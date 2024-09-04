import { Movies } from '@prisma/client'
import Joi from 'joi'

export const validateMoviesSchema = (body: Movies) => {
  try {
    const moviesSchema = Joi.object({
      title: Joi.string().required().min(1).max(150),
      thumbnail: Joi.string().required(),
      trailer: Joi.string().required(),
      imdb: Joi.number().required().max(4),
      year: Joi.number().required().min(4),
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
    console.log('err', err)
  }
}
