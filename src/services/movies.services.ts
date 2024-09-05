import { Movies } from '@prisma/client'
import { Response } from 'express'
import CustomError from '../utils/customError.js'
import db from '../database/db.js'

export const uploadMovieService = async (body: Movies, response: Response) => {
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
      description,
      director,
      studio,
      videos,
    } = body

    const createdMovie = await db.movies.create({
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
        studio,
        videos,
      },
    })

    return response.status(201).json({ createdMovie })
  } catch (err) {
    console.log(body)
    const customError = new CustomError(null, err.message, 500)
    response.status(500).json({ error: customError })
  }
}
