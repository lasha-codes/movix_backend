import { Router } from 'express';
import { register, login } from '../controllers/auth.controller.js';
import { loginMiddleware, registerMiddleware, } from '../middlewares/auth.middleware.js';
const router = Router();
router.post('/register', registerMiddleware, register);
router.post('/login', loginMiddleware, login);
export default router;
//# sourceMappingURL=auth.routes.js.map