import { NextFunction, Request, Response } from 'express'
import { validateActorsSchema } from '../validations/actors.validation.js'
import CustomError from '../utils/customError.js'

export const actorsMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { error } = validateActorsSchema(req.body, res)
  let destructuredError: null | string = null
  if (error) {
    destructuredError = error.details[0].message
    const customError = new CustomError(null, destructuredError, 400)
    return res.status(customError.statusCode).json({ error: customError })
  } else {
    next()
  }
}
