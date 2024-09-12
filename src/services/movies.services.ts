import { Genres, Movies } from '@prisma/client'
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
      releaseDate,
      rating,
      duration,
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
        releaseDate,
        rating,
        duration,
      },
    })

    return response.status(201).json({ createdMovie })
  } catch (err) {
    const customError = new CustomError(null, err.message, 500)
    response.status(500).json({ error: customError })
  }
}

export const genresService = async (body: Genres, response: Response) => {
  try {
    const { genre } = body

    const createdGenre = await db.genres.create({
      data: {
        genre,
      },
    })

    return response.status(201).json({ createdGenre })
  } catch (err) {
    const customError = new CustomError(null, 'something went wrong', 500)
    response.status(500).json({ error: customError })
  }
}
export const genreUpdateService = async (body: Genres, response: Response) => {
  try {
    const { genre, id } = body

    const updatedGenre = await db.genres.update({
      where: {
        id,
      },
      data: {
        genre: genre,
      },
    })

    return response.status(200).json({ updatedGenre })
  } catch (err) {
    const customError = new CustomError(null, 'something went wrong', 500)
    response.status(500).json({ error: customError })
  }
}
