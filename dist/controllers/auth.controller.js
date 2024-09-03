import { registerService } from '../services/auth.services.js';
import { validateRegister, validateLogin, } from '../validations/auth.validation.js';
export const register = async (req, res) => {
    const { errorMessage } = await validateRegister(req.body);
    if (errorMessage) {
        return res.status(400).json({ error: errorMessage });
    }
    await registerService(req.body, res);
};
export const login = async (req, res) => {
    const { errorMessage } = await validateLogin(req.body);
    if (errorMessage) {
        return res.status(400).json({ error: errorMessage });
    }
};
//# sourceMappingURL=auth.controller.js.map