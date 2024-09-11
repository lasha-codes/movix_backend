import { Request, Response } from 'express'
import { actorsService } from '../services/actors.services.js'

export const actorsController = async (req: Request, res: Response) => {
  try {
    await actorsService(req.body, res)
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' })
  }
}
