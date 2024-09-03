import Joi from 'joi';
export const validateRegister = async (body) => {
    const registerSchema = Joi.object({
        email: Joi.string().email().required(),
        username: Joi.string().min(3).max(20).required(),
        password: Joi.string().min(3).max(35).required(),
        date: Joi.number().required(),
        gender: Joi.string().required(),
    });
};
//# sourceMappingURL=auth.js.map