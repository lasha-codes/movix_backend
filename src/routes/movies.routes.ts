import { Router } from 'express'
import { uploadMovieController } from '../controllers/movies.controller.js'
import { uploadMoviesMiddleware } from '../middlewares/movies.middleware.js'

const router = Router()

router.post('/upload', uploadMoviesMiddleware, uploadMovieController)

export default router
