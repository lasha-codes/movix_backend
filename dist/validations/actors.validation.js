import CustomError from '../utils/customError.js';
import Joi from 'joi';
export const validateActorsSchema = (body, response) => {
    try {
        const actorsSchema = Joi.object({
            name: Joi.string().required().min(2),
            image: Joi.string().required(),
            date: Joi.date().required(),
        });
        const { error, value } = actorsSchema.validate(body);
        return { error, value };
    }
    catch (err) {
        const customError = new CustomError(null, 'schema validation error', 400);
        response
            .status(customError.statusCode)
            .json({ message: customError.clientMessage });
    }
};
//# sourceMappingURL=actors.validation.js.map