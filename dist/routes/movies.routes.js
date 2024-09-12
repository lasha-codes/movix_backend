import { Router } from 'express';
import { genresController, genresUpdateController, uploadMovieController, } from '../controllers/movies.controller.js';
import { genresMiddleware, genresUpdateMiddleware, uploadMoviesMiddleware, } from '../middlewares/movies.middleware.js';
const router = Router();
router.post('/upload', uploadMoviesMiddleware, uploadMovieController);
router.post('/genres/add', genresMiddleware, genresController);
router.put('/genres/update', genresUpdateMiddleware, genresUpdateController);
export default router;
//# sourceMappingURL=movies.routes.js.map