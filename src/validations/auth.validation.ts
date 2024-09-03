import Joi from 'joi'

type registerBody = {
  email: string
  username: string
  date: number
  gender: string
  password: string
}

export const validateRegister = async (body: registerBody) => {
  const registerSchema = Joi.object({
    email: Joi.string().email().required(),
    username: Joi.string().min(3).max(20).required(),
    password: Joi.string().min(3).max(35).required(),
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
