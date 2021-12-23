// On importe la bibliothèque express
import { Router } from 'express';
//import session from 'express-session';
import passport from 'passport';
import {
	signUp,
	signIn,
	updateUser,
	deleteUser,
	getUser,
	signOut,
} from '../controllers/authController.js';

const router = Router();

// http://localhost:3500/api/v1/users/signup
router.post('/register', passport.authenticate('signUp', { session: false }), signUp);

// http://localhost:3500/api/v1/users/login
router.post('/login', passport.authenticate('signIn', { session: false }), signIn);

// http://localhost:3500/api/v1/users/update
router.put('/update', passport.authenticate('jwt', { session: false }), updateUser);

// http://localhost:3500/api/v1/users/delete
router.delete('/delete', passport.authenticate('jwt', { session: false }), deleteUser);

// http://localhost:3500/api/v1/users/logout
router.get('/logout', passport.authenticate('jwt', { session: false }), signOut);

// http://localhost:3500/api/v1/users/me
router.get('/admin/:id', passport.authenticate('jwt', { session: false }), getUser);

export default router;
