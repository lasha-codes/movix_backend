import { Response, Request } from 'express'
import { seriesService } from '../services/series.services.js'
import CustomError from '../utils/customError.js'

export const seriesController = async (req: Request, res: Response) => {
  try {
    await seriesService(req.body, res)
  } catch (err) {
    throw new CustomError(null, 'სერვერის ხარვეზი', 500)
  }
}
