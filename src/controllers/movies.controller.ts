import { Request, Response } from 'express'
import {
  genresService,
  uploadMovieService,
} from '../services/movies.services.js'
import { Movies } from '@prisma/client'

export const uploadMovieController = async (req: Request, res: Response) => {
  try {
    await uploadMovieService(req.body as Movies, res)
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' })
  }
}

export const genresController = async (req: Request, res: Response) => {
  try {
    await genresService(req.body, res)
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' })
  }
}
