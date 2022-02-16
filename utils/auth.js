import dotenv from 'dotenv';
dotenv.config();

import passport from 'passport';
import { Strategy } from 'passport-local';

import userModel from '../models/userModel.js';

import JWT from 'passport-jwt';
const { Strategy: JWTStrategy, ExtractJwt } = JWT; // le : permet de changer le nom strategy qui existe déjà

passport.use(
	'signUp',
	new Strategy(
		{
			usernameField: 'email',
			passwordField: 'password',
			passReqToCallback: true, // passe la req dans la fonction de callback
		},
		async (req, email, password, done) => {
			try {
				const user = await userModel.create({ ...req.body });
				return done(null, user);
			} catch (error) {
				return done(error);
			}
		}
	)
);

passport.use(
	'signIn',
	new Strategy(
		{
			usernameField: 'email',
			passwordField: 'password',
		},
		async (email, password, done) => {
			try {
				const user = await userModel.findOne({ email });
				if (!user) return done(null, false, { message: 'Utilisateur non trouvé.' });

				const isMatch = await user.matchPassword(password); //on va chercher la méthode matchpassword qu'on a créé dans userModel.js
				if (!isMatch) return done(null, false, { message: 'Erreur de connexion.' });

				return done(null, user, { message: 'Connexion réussie.' });
			} catch (error) {
				return done(error);
			}
		}
	)
);

passport.use(
	new JWTStrategy(
		{
			secretOrKey: process.env.JWT_SECRET,
			jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
		},
		async (token, done) => {
			try {
				return done(null, token._id);
			} catch (error) {
				done(error);
			}
		}
	)
);

export default passport;
