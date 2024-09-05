import Joi from 'joi';
import CustomError from '../utils/customError.js';
export const validateSeriesSchema = (body, response) => {
    try {
        const seriesSchema = Joi.object({
            title: Joi.string().required().min(1).max(150),
            thumbnail: Joi.string().required(),
            trailer: Joi.string().required(),
            imdb: Joi.number().required(),
            year: Joi.number().required().min(1550),
            country: Joi.array().required().min(1),
            genres: Joi.array().required().min(1),
            actors: Joi.array().required().min(1),
            description: Joi.string().min(50).max(1000),
            director: Joi.string().min(2).max(150),
            studio: Joi.string().min(2).max(150),
            series: Joi.array().min(1).required(),
            releaseDate: Joi.string().required(),
            rating: Joi.string(),
            duration: Joi.number(),
        });
        const { error, value } = seriesSchema.validate(body);
        return { error, value };
    }
    catch (err) {
        const customError = new CustomError(null, 'schema validation error', 400);
        response
            .status(customError.statusCode)
            .json({ message: customError.clientMessage });
    }
};
//# sourceMappingURL=series.validation.js.map