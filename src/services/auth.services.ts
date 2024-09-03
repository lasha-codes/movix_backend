import { registerBody } from '../types/globalTypes.js'
import jwt from 'jsonwebtoken'
import CustomError from '../utils/customError.js'
import { Response } from 'express'

export const registerService = async (
  body: registerBody,
  response: Response
) => {
  const { email, username, password, gender, date } = body

  console.log(email)

  try {
  } catch (err) {
    const customError = new CustomError(null, 'სერვერის პრობლემა', 500)
    const finalCustomError = { ...customError, serverMessage: null }
    response.status(finalCustomError.statusCode).json({ finalCustomError })
  }
}
