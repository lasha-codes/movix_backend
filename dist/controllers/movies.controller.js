import { uploadMovieService } from '../services/movies.services.js';
export const uploadMovieController = async (req, res) => {
    try {
        await uploadMovieService(req.body, res);
    }
    catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};
//# sourceMappingURL=movies.controller.js.map