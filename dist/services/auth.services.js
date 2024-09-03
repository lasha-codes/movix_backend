import CustomError from '../utils/customError.js';
export const registerService = async (body, response) => {
    const { email, username, password, gender, date } = body;
    console.log(email);
    try {
    }
    catch (err) {
        const customError = new CustomError(null, 'სერვერის პრობლემა', 500);
        const finalCustomError = { ...customError, serverMessage: null };
        response.status(finalCustomError.statusCode).json({ finalCustomError });
    }
};
//# sourceMappingURL=auth.services.js.map