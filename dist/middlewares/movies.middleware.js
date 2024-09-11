import CustomError from '../utils/customError.js';
import { validateGenrePayload, validateMoviesSchema, } from '../validations/movies.validation.js';
export const uploadMoviesMiddleware = (req, res, next) => {
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
export const genresMiddleware = async (req, res, next) => {
    const { error, status } = await validateGenrePayload(req.body, res);
    if (error) {
        res.status(status).json({ error: error });
    }
    else {
        next();
    }
};
//# sourceMappingURL=movies.middleware.js.map