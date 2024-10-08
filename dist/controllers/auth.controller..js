import { registerService } from '../services/auth.services.js';
import { validateRegister } from '../validations/auth.validation.js';
export const register = async (req, res) => {
    await validateRegister(req.body);
    await registerService(req.body, res);
};
//# sourceMappingURL=auth.controller..js.map