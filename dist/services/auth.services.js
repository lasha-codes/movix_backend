import jwt from 'jsonwebtoken';
import CustomError from '../utils/customError.js';
import db from '../database/db.js';
import bcrypt from 'bcrypt';
export const registerService = async (body, response) => {
    const { email, username, password, gender, date } = body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const createdUser = await db.user.create({
        data: {
            email,
            username,
            gender,
            date,
            password: hashedPassword,
            iconNumber: 1,
        },
    });
    jwt.sign({ id: createdUser.id, email: createdUser.email }, process.env.JWT_SECRET, {}, (err, token) => {
        if (err) {
            return response.status(500).json({ error: err });
        }
        response
            .cookie('token', token, {
            secure: true,
            httpOnly: true,
            sameSite: 'none',
        })
            .json({ message: 'registeredToken', token });
    });
    try {
    }
    catch (err) {
        const customError = new CustomError(null, 'სერვერის პრობლემა', 500);
        const finalCustomError = { ...customError, serverMessage: null };
        response.status(finalCustomError.statusCode).json({ finalCustomError });
    }
};
//# sourceMappingURL=auth.services.js.map