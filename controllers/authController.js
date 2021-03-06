import jwt from 'jsonwebtoken';
import passport from 'passport';
import { StatusCodes } from 'http-status-codes';
import userModel from '../models/userModel.js';
import mongoose from 'mongoose';
const ObjectId = mongoose.Types.ObjectId;

// Register
export const signUp = async (req, res, next) => {
	res.json({
		message: 'Enregistrement réussi.',
		user: req.user,
	});
};

// login
export const signIn = (req, res, next) => {
	passport.authenticate('signIn', async (err, user) => {
		try {
			if (err || !user) {
				const error = new Error('Une erreur est survenue.');
				return next(error);
			}
			req.login(user, { session: false }, async (error) => {
				if (error) return next(error);

				const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);

				res.send({ token });
			});
		} catch (error) {
			return next(error);
		}
	})(req, res, next);
};

// update
export const updateUser = async (req, res) => {
	if (!ObjectId.isValid(req.user))
		return res.status(StatusCodes.BAD_REQUEST).send(`Invalid parameter : ${req.user}`);

	try {
		const user = await userModel.findByIdAndUpdate(req.user, req.body);
		if (!user) return res.status(StatusCodes.NOT_FOUND).send('User not found');

		res.status(StatusCodes.OK).json({ message: 'User updated', user });
		user.save();
	} catch (error) {
		res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: error.message });
	}
};

// delete user
export const deleteUser = async (req, res) => {
	if (!ObjectId.isValid(req.user))
		return res.status(StatusCodes.BAD_REQUEST).send(`Invalid parameter : ${req.user}`);

	try {
		const user = await userModel.findByIdAndDelete(req.user);
		if (!user) return res.status(StatusCodes.NOT_FOUND).send('Utilisateur non trouvé');

		res.status(StatusCodes.OK).send('Utilisateur supprimé.');
	} catch (error) {
		res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: error.message });
	}
};

//logout
export const signOut = (req, res) => {
	req.logout();
	res.status(StatusCodes.OK).send('Utilisateur déconnecté.');
};

// get user
export const getUser = async (req, res) => {
	if (!ObjectId.isValid(req.params.id))
		// req params va chercher les paramètres de l'url
		return res.status(StatusCodes.BAD_REQUEST).send(`Invalid parameter : ${req.params.id}`);

	try {
		const user = await userModel.findById(req.params.id).select('-password -__v');
		if (!user) return res.status(StatusCodes.BAD_REQUEST).send('User not found');
		res.status(StatusCodes.OK).send(user);
	} catch (error) {
		res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: error.message });
	}
};
