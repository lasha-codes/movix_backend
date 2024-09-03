import { loginBody, registerBody } from '../types/globalTypes.js'
import jwt from 'jsonwebtoken'
import CustomError from '../utils/customError.js'
import { Response } from 'express'
import db from '../database/db.js'
import bcrypt from 'bcrypt'

export const registerService = async (
  body: registerBody,
  response: Response
) => {
  const { email, username, password, gender, date } = body

  try {
    const hashedPassword = await bcrypt.hash(password, 10)
    const createdUser = await db.user.create({
      data: {
        email,
        username,
        gender,
        date,
        password: hashedPassword,
        iconNumber: 1,
      },
    })

    jwt.sign(
      { id: createdUser.id, email: createdUser.email },
      process.env.JWT_SECRET,
      {},
      (err, token) => {
        if (err) {
          return response.status(500).json({ error: err })
        }
        response
          .cookie('token', token, {
            secure: true,
            httpOnly: true,
            sameSite: 'none',
          })
          .json({ message: 'registeredToken', token })
      }
    )
  } catch (err) {
    const customError = new CustomError(null, err.message, 500)
    const finalCustomError = { ...customError, serverMessage: null }
    response
      .status(finalCustomError.statusCode)
      .json({ error: finalCustomError })
  }
}

export const loginService = async (body: loginBody, response: Response) => {
  const { usernameOrEmail } = body
  try {
    const foundUser = await db.user.findFirst({
      where: {
        OR: [
          {
            username: {
              equals: usernameOrEmail,
            },
          },
          {
            email: {
              equals: usernameOrEmail,
            },
          },
        ],
      },
    })

    if (foundUser) {
      jwt.sign(
        { id: foundUser.id, email: foundUser.email },
        process.env.JWT_SECRET,
        {},
        (err, token) => {
          if (err) {
            return response.status(500).json({ error: err })
          }
          response
            .cookie('token', token, {
              secure: true,
              httpOnly: true,
              sameSite: 'none',
            })
            .json({ message: 'registeredToken', token })
        }
      )
    } else {
      return response.status(500).json({ error: 'something went wrong' })
    }
  } catch (err) {
    const customError = new CustomError(null, 'სერვერის პრობლემა', 500)
    const finalCustomError = { ...customError, serverMessage: null }
    response
      .status(finalCustomError.statusCode)
      .json({ error: finalCustomError })
  }
}
