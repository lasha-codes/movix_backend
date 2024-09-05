import { Router } from 'express';
import { seriesMiddleware } from '../middlewares/series.middleware.js';
import { seriesController } from '../controllers/series.controller.js';
const router = Router();
router.post('/upload', seriesMiddleware, seriesController);
export default router;
//# sourceMappingURL=series.routes.js.map