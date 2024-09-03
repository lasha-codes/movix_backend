import { NextFunction, Request, Response } from 'express'
import { validateRegisterSchema } from '../validations/auth.validation.js'
import CustomError from '../utils/customError.js'

export const registerMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { error } = await validateRegisterSchema(req.body)
  let destructuredError: null | string = null
  if (error) {
    destructuredError = error.details[0].message
  }

  if (error) {
    const customError = new CustomError(null, destructuredError, 400)
    return res.status(customError.statusCode).json({ error: customError })
  } else {
    next()
  }
}
