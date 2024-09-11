import { Router } from 'express'
import { actorsController } from '../controllers/actors.controller.js'
import { actorsMiddleware } from '../middlewares/actors.middleware.js'

const router = Router()

router.post('/add', actorsMiddleware, actorsController)

export default router
