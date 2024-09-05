import CustomError from '../utils/customError.js';
import { validateMoviesSchema } from '../validations/movies.validation.js';
export const uploadMoviesMiddleware = async (req, res, next) => {
    const { error } = validateMoviesSchema(req.body, res);
    let destructuredError = null;
    if (error) {
        destructuredError = error.details[0].message;
        const customError = new CustomError(null, destructuredError, 400);
        return res.status(customError.statusCode).json({ error: customError });
    }
    else {
        next();
    }
};
//# sourceMappingURL=movies.middleware.js.map