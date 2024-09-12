import { Movies, Genres } from '@prisma/client'
import Joi from 'joi'
import CustomError from '../utils/customError.js'
import { Response } from 'express'
import db from '../database/db.js'

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
      director: Joi.string().min(2).max(150).required(),
      studio: Joi.string().min(2).max(150).required(),
      videos: Joi.array().min(1).max(10).required(),
      releaseDate: Joi.string().required(),
      rating: Joi.string(),
      duration: Joi.number(),
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

export const validateGenrePayload = async (
  body: Genres,
  response: Response
) => {
  try {
    if (!body.genre) {
      return { error: 'genre is required', status: 400 }
    }

    const genreExists = await db.genres.findUnique({
      where: { genre: body.genre },
    })

    if (genreExists) {
      return { error: 'genre already exists', status: 403 }
    }

    return { error: null, status: null }
  } catch (err) {
    const customError = new CustomError(null, 'schema validation error', 400)
    response
      .status(customError.statusCode)
      .json({ message: customError.clientMessage })
  }
}

export const validateGenreUploadPayload = async (
  body: Genres,
  response: Response
) => {
  try {
    if (!body.genre) {
      return { error: 'genre is required', status: 400 }
    }

    if (body.id === undefined || body.id === null) {
      return { error: 'id is required', status: 400 }
    }

    const genreExists = await db.genres.findUnique({
      where: { genre: body.genre },
    })
    if (genreExists) {
      return { error: 'genre already exists', status: 403 }
    }

    const genreNotFound = await db.genres.findUnique({
      where: { id: body.id },
    })

    if (!genreNotFound) {
      return { error: 'genre with the provided id does not exist', status: 400 }
    }

    return { error: null, status: null }
  } catch (err) {
    const customError = new CustomError(null, 'schema validation error', 400)
    response
      .status(customError.statusCode)
      .json({ message: customError.clientMessage })
  }
}
