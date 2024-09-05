import { NextFunction, Response, Request } from 'express'
import CustomError from '../utils/customError.js'
import { validateSeriesSchema } from '../validations/series.validation.js'

export const seriesMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { error } = validateSeriesSchema(req.body as any, res)
  let destructuredError: null | string = null
  if (error) {
    destructuredError = error.details[0].message
    const customError = new CustomError(null, destructuredError, 400)
    return res.status(customError.statusCode).json({ error: customError })
  } else {
    next()
  }
}
