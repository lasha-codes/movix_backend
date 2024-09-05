import { Series } from '@prisma/client'
import { Response } from 'express'
import CustomError from '../utils/customError.js'
import db from '../database/db.js'

export const seriesService = async (body: Series, response: Response) => {
  try {
    const {
      title,
      thumbnail,
      trailer,
      imdb,
      year,
      country,
      genres,
      actors,
      duration,
      description,
      studio,
      director,
      rating,
      releaseDate,
      series,
    } = body

    const createdSeries = await db.series.create({
      data: {
        title,
        thumbnail,
        trailer,
        imdb,
        year,
        country,
        genres,
        actors,
        description,
        director,
        duration,
        studio,
        series,
        rating,
        releaseDate,
      },
    })

    response.status(201).json({ createdSeries })
  } catch (err) {
    throw new CustomError(
      null,
      'error was probably caused by invalid schema',
      500
    )
  }
}
