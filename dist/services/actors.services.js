import CustomError from '../utils/customError.js';
import db from '../database/db.js';
export const actorsService = async (body, response) => {
    try {
        const { name, image, date } = body;
        const createdActor = await db.actors.create({
            data: {
                name,
                image,
                date: new Date(date),
            },
        });
        response.status(201).json({ createdActor });
    }
    catch (err) {
        const customError = new CustomError(null, err, 500);
        response
            .status(customError.statusCode)
            .json({ message: customError.clientMessage });
    }
};
//# sourceMappingURL=actors.services.js.map