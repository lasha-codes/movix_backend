import { actorsService } from '../services/actors.services.js';
export const actorsController = async (req, res) => {
    try {
        await actorsService(req.body, res);
    }
    catch (err) {
        res.status(500).json({ error: 'Internal server error' });
    }
};
//# sourceMappingURL=actors.controller.js.map