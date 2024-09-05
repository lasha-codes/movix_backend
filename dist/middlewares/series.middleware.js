import CustomError from '../utils/customError.js';
import { validateSeriesSchema } from '../validations/series.validation.js';
export const seriesMiddleware = (req, res, next) => {
    const { error } = validateSeriesSchema(req.body, res);
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
//# sourceMappingURL=series.middleware.js.map