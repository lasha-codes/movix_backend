import { validateActorsSchema } from '../validations/actors.validation.js';
import CustomError from '../utils/customError.js';
export const actorsMiddleware = (req, res, next) => {
    const { error } = validateActorsSchema(req.body, res);
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
//# sourceMappingURL=actors.middleware.js.map