import { NextFunction, Response, Request } from 'express'
import CustomError from '../utils/customError.js'
import { validateMoviesSchema } from '../validations/movies.validation.js'

export const uploadMoviesMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { error } = validateMoviesSchema(req.body, res)
  let destructuredError: null | string = null
  if (error) {
    destructuredError = error.details[0].message
    const customError = new CustomError(null, destructuredError, 400)
    return res.status(customError.statusCode).json({ error: customError })
  } else {
    next()
  }
}
