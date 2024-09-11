import Joi from 'joi';
import db from '../database/db.js';
import bcrypt from 'bcrypt';
export const validateRegisterSchema = (body) => {
    const registerSchema = Joi.object({
        email: Joi.string().email().required(),
        username: Joi.string().min(3).max(20).required(),
        password: Joi.string().min(6).max(35).required(),
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
export const validateLoginSchema = (body) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let isEmail = false;
    if (body.usernameOrEmail) {
        const validEmail = emailRegex.test(body.usernameOrEmail);
        if (validEmail) {
            isEmail = true;
        }
        else {
            isEmail = false;
        }
    }
    const loginSchema = Joi.object({
        usernameOrEmail: isEmail
            ? Joi.string().email().required()
            : Joi.string().min(3).required(),
        password: Joi.string().min(6).max(35).required(),
    });
    try {
        const { error, value } = loginSchema.validate(body);
        return { error, value };
    }
    catch (err) {
        console.log('err', err);
    }
};
export const validateRegister = async (body) => {
    try {
        const { email, username } = body;
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
export const validateLogin = async (body) => {
    try {
        const { usernameOrEmail, password } = body;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const isValidEmail = emailRegex.test(usernameOrEmail);
        if (isValidEmail) {
            const userWithEmail = await db.user.findUnique({
                where: { email: usernameOrEmail },
            });
            if (!userWithEmail) {
                return { errorMessage: 'ეს email არ არის დარეგისტრირებული' };
            }
            const passwordMatches = await bcrypt.compare(password, userWithEmail.password);
            if (!passwordMatches) {
                return { errorMessage: 'პაროლი არასწორია' };
            }
            return { errorMessage: null };
        }
        else {
            const userWithUsername = await db.user.findUnique({
                where: {
                    username: usernameOrEmail,
                },
            });
            if (!userWithUsername) {
                return { errorMessage: 'ეს username არ არის დარეგისტრირებული' };
            }
            const passwordMatches = await bcrypt.compare(password, userWithUsername.password);
            if (!passwordMatches) {
                return { errorMessage: 'პაროლი არასწორია' };
            }
            return { errorMessage: null };
        }
    }
    catch (err) {
        console.log('err', err);
    }
};
//# sourceMappingURL=auth.validation.js.map