// On importe la bibliothèque express
import { Router } from 'express';
//import session from 'express-session';
import passport from 'passport';
import { signUp, signIn, getMe, signOut } from '../controllers/authController.js';
const router = Router();

// Register
// http://localhost:3500/api/v1/auth/signup
router.post('/register', passport.authenticate('signUp', { session: false }), signUp);

// Login
// http://localhost:3500/api/v1/auth/login
router.post('/login', passport.authenticate('signIn', { session: false }), signIn);

// LOGOUT ROUTER
router.get('/logout', passport.authenticate('jwt', { session: false }), signOut);

// http://localhost:3500/api/v1/auth/me
router.get('/me', passport.authenticate('jwt', { session: false }), getMe);

export default router;
