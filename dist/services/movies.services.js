import CustomError from '../utils/customError.js';
import db from '../database/db.js';
export const uploadMovieService = async (body, response) => {
    try {
        const { title, thumbnail, trailer, imdb, year, country, genres, actors, description, director, studio, videos, releaseDate, rating, duration, } = body;
        const createdMovie = await db.movies.create({
            data: {
                title,
                thumbnail,
                trailer,
                imdb,
                year,
                country,
                genres,
                actors,
                description,
                director,
                studio,
                videos,
                releaseDate,
                rating,
                duration,
            },
        });
        return response.status(201).json({ createdMovie });
    }
    catch (err) {
        console.log(body);
        const customError = new CustomError(null, err.message, 500);
        response.status(500).json({ error: customError });
    }
};
//# sourceMappingURL=movies.services.js.map