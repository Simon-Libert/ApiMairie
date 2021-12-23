import { StatusCodes } from 'http-status-codes';
import userModel from '../models/userModel.js';

export const adminUser = (permissions) => {
	return async (req, res, next) => {
		const userRole = await userModel.findById(req.user); // req.user is the id of the user
		if (permissions.includes(userRole.role)) {
			next();
		} else {
			return res.status(StatusCodes.UNAUTHORIZED).json({ error: 'Unauthorized' });
		}
	};
};
