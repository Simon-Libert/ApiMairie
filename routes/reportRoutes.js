import dotenv from 'dotenv';
dotenv.config();

import passport from 'passport';

import { Router } from 'express';

import {
	allReports,
	addReport,
	deleteReport,
	updateReport,
	allReportsFromUser,
} from '../controllers/reportController.js';
import { adminUser } from '../middlewares/admin.js';
const router = Router();

import uploadImage from '../utils/cloudinary.js';

router.get('/', passport.authenticate('jwt', { session: false }), adminUser(['admin']), allReports);

router.get(
	'/:id',
	passport.authenticate('jwt', { session: false }),
	adminUser(['admin']),
	allReportsFromUser
);

router.post('/', uploadImage, addReport);

router.put(
	'/:id',
	passport.authenticate('jwt', { session: false }),
	adminUser(['admin']),
	updateReport
);

router.delete(
	'/:id',
	passport.authenticate('jwt', { session: false }),
	adminUser(['admin']),
	deleteReport
);

export default router;
