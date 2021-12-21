// On importe la bibliothèque express
import { Router } from 'express';
//import session from 'express-session';
import passport from 'passport';
import { signUp, signIn, updateUser, getMe, signOut } from '../controllers/authController.js';
const router = Router();

// Register
// http://localhost:3500/api/v1/users/signup
router.post('/register', passport.authenticate('signUp', { session: false }), signUp);

// Login
// http://localhost:3500/api/v1/users/login
router.post('/login', passport.authenticate('signIn', { session: false }), signIn);

//update user
// http://localhost:3500/api/v1/users/update
router.put('/update', passport.authenticate('jwt', { session: false }), updateUser);

// LOGOUT ROUTER
router.get('/logout', passport.authenticate('jwt', { session: false }), signOut);

// http://localhost:3500/api/v1/users/me
router.get('/me', passport.authenticate('jwt', { session: false }), getMe);

export default router;
