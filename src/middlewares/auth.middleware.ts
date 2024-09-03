import { NextFunction, Request, Response } from 'express'
import { validateRegister } from '../validations/auth.validation.js'
import CustomError from '../utils/customError.js'

export const registerMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { error } = await validateRegister(req.body)
  const destructuredError = error.details[0].message

  if (error) {
    const customError = new CustomError(null, destructuredError, 400)
    return res.status(customError.statusCode).json({ error: customError })
  } else {
    next()
  }
}
