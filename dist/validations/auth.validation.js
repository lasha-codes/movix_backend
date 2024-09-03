import Joi from 'joi';
import db from '../database/db.js';
export const validateRegisterSchema = async (body) => {
    const registerSchema = Joi.object({
        email: Joi.string().email().required(),
        username: Joi.string().min(3).max(20).required(),
        password: Joi.string().min(3).max(35).required(),
        date: Joi.number().required(),
        gender: Joi.string().required(),
    });
    try {
        const { error, value } = registerSchema.validate(body);
        return { error, value };
    }
    catch (err) {
        console.log('err', err);
    }
};
export const validateRegister = async (body) => {
    try {
        const { email, username, password } = body;
        const existingUser = await db.user.findFirst({
            where: {
                OR: [
                    {
                        username: {
                            equals: username,
                        },
                    },
                    {
                        email: {
                            equals: email,
                        },
                    },
                ],
            },
        });
        if (existingUser) {
            return { errorMessage: 'ექაუნთი უკვე დარეგისტრირებულია' };
        }
        return { errorMessage: null };
    }
    catch (err) {
        console.log('err', err);
    }
};
//# sourceMappingURL=auth.validation.js.map