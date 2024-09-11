import { NextFunction, Request, Response } from 'express'
import {
  validateRegisterSchema,
  validateLoginSchema,
} from '../validations/auth.validation.js'
import CustomError from '../utils/customError.js'

export const registerMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { error } = validateRegisterSchema(req.body)
  let destructuredError: null | string = null
  if (error) {
    destructuredError = error.details[0].message

    const customError = new CustomError(null, destructuredError, 400)
    return res.status(customError.statusCode).json({ error: customError })
  } else {
    next()
  }
}

export const loginMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { error } = validateLoginSchema(req.body)
  let destructuredError: null | string = null
  if (error) {
    destructuredError = error.details[0].message
    const customError = new CustomError(null, destructuredError, 400)
    return res.status(customError.statusCode).json({ error: customError })
  } else {
    next()
  }
}
