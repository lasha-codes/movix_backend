import Joi from 'joi'
import { registerBody, loginBody } from '../types/globalTypes.js'
import db from '../database/db.js'
import bcrypt from 'bcrypt'

export const validateRegisterSchema = async (body: registerBody) => {
  const registerSchema = Joi.object({
    email: Joi.string().email().required(),
    username: Joi.string().min(3).max(20).required(),
    password: Joi.string().min(6).max(35).required(),
    date: Joi.number().required(),
    gender: Joi.string().required(),
  })

  try {
    const { error, value } = registerSchema.validate(body)

    return { error, value }
  } catch (err) {
    console.log('err', err)
  }
}

export const validateLoginSchema = async (body: loginBody) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  let isEmail: boolean = false
  if (body.usernameOrEmail) {
    const validEmail: boolean = emailRegex.test(body.usernameOrEmail)
    if (validEmail) {
      isEmail = true
    } else {
      isEmail = false
    }
  }
  const loginSchema = Joi.object({
    usernameOrEmail: isEmail
      ? Joi.string().email().required()
      : Joi.string().min(3).required(),
    password: Joi.string().min(6).max(35).required(),
  })

  try {
    const { error, value } = loginSchema.validate(body)
    return { error, value }
  } catch (err) {
    console.log('err', err)
  }
}

export const validateRegister = async (body: registerBody) => {
  try {
    const { email, username } = body

    const existingUser = await db.user.findFirst({
      where: {
        OR: [
          {
            username: {
              equals: username,
            },
          },
          {
            email: {
              equals: email,
            },
          },
        ],
      },
    })

    if (existingUser) {
      return { errorMessage: 'ექაუნთი უკვე დარეგისტრირებულია' }
    }

    return { errorMessage: null }
  } catch (err) {
    console.log('err', err)
  }
}

export const validateLogin = async (body: loginBody) => {
  try {
    const { usernameOrEmail, password } = body
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    const isValidEmail = emailRegex.test(usernameOrEmail)

    if (isValidEmail) {
      const userWithEmail = await db.user.findUnique({
        where: { email: usernameOrEmail },
      })

      if (!userWithEmail) {
        return { errorMessage: 'ეს email არ არის დარეგისტრირებული' }
      }

      const passwordMatches = await bcrypt.compare(
        password,
        userWithEmail.password
      )

      if (!passwordMatches) {
        return { errorMessage: 'პაროლი არასწორია' }
      }
    } else {
      const userWithUsername = await db.user.findUnique({
        where: {
          username: usernameOrEmail,
        },
      })

      if (!userWithUsername) {
        return { errorMessage: 'ეს username არ არის დარეგისტრირებული' }
      }

      const passwordMatches = await bcrypt.compare(
        password,
        userWithUsername.password
      )

      if (!passwordMatches) {
        return { errorMessage: 'პაროლი არასწორია' }
      }
    }
  } catch (err) {
    console.log('err', err)
  }
}
