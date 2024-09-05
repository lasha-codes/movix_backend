import { Movies } from '@prisma/client'
import Joi from 'joi'
import CustomError from '../utils/customError.js'
import { Response } from 'express'

export const validateMoviesSchema = (body: Movies, response: Response) => {
  try {
    const moviesSchema = Joi.object({
      title: Joi.string().required().min(1).max(150),
      thumbnail: Joi.string().required(),
      trailer: Joi.string().required(),
      imdb: Joi.number().required(),
      year: Joi.number().required().min(1550),
      country: Joi.array().required().min(1),
      genres: Joi.array().required().min(1),
      actors: Joi.array().required().min(1),
      description: Joi.string().min(50).max(1000),
      director: Joi.string().min(2).max(150),
      studio: Joi.string().min(2).max(150),
      videos: Joi.array().min(1).max(10),
    })

    const { error, value } = moviesSchema.validate(body)

    return { error, value }
  } catch (err) {
    const customError = new CustomError(null, 'schema validation error', 400)
    response
      .status(customError.statusCode)
      .json({ message: customError.clientMessage })
  }
}
