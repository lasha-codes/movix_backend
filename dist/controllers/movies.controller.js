import { genresService, genreUpdateService, uploadMovieService, } from '../services/movies.services.js';
export const uploadMovieController = async (req, res) => {
    try {
        await uploadMovieService(req.body, res);
    }
    catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};
export const genresController = async (req, res) => {
    try {
        await genresService(req.body, res);
    }
    catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};
export const genresUpdateController = async (req, res) => {
    try {
        await genreUpdateService(req.body, res);
    }
    catch (err) {
        res.status(500).json({ error: 'Internal server error' });
    }
};
//# sourceMappingURL=movies.controller.js.map