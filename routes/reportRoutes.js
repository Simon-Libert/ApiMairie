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

//http://localhost:3500/api/v1/reports
router.get('/', passport.authenticate('jwt', { session: false }), adminUser(['admin']), allReports);

//http://localhost:3500/api/v1/reports/:userId
router.get(
	'/:id',
	passport.authenticate('jwt', { session: false }),
	adminUser(['admin']),
	allReportsFromUser
);

router.post('/', uploadImage, addReport);

//http://localhost:3500/api/v1/reports/:reportsId
router.put(
	'/:id',
	passport.authenticate('jwt', { session: false }),
	adminUser(['admin']),
	updateReport
);

//http://localhost:3500/api/v1/reports/:reportsId
router.delete(
	'/:id',
	passport.authenticate('jwt', { session: false }),
	adminUser(['admin']),
	deleteReport
);

export default router;
