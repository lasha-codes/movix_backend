import { validateRegister } from '../validations/auth.validation.js';
import CustomError from '../utils/customError.js';
export const registerMiddleware = async (req, res, next) => {
    const { error, value } = await validateRegister(req.body);
    const destructuredError = error.details[0].message;
    const customError = new CustomError(null, destructuredError, 400);
    res.status(customError.statusCode).json({ error: customError });
};
//# sourceMappingURL=auth.middleware.js.map