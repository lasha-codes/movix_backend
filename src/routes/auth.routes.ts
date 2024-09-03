import { Router } from 'express'
import { register } from '../controllers/auth.controller.js'
import { registerMiddleware } from '../middlewares/auth.middleware.js'
const router = Router()

router.post('/register', registerMiddleware, register)

export default router
