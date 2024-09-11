import { Router } from 'express';
import { genresController, uploadMovieController, } from '../controllers/movies.controller.js';
import { genresMiddleware, uploadMoviesMiddleware, } from '../middlewares/movies.middleware.js';
const router = Router();
router.post('/upload', uploadMoviesMiddleware, uploadMovieController);
router.post('/genres/add', genresMiddleware, genresController);
export default router;
//# sourceMappingURL=movies.routes.js.map