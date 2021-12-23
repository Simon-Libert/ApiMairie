import dotenv from 'dotenv';
dotenv.config();

import { Router } from 'express';

import {
	allReports,
	addReport,
	deleteReport,
	updateReport,
	allReportsFromUser,
} from '../controllers/reportController.js';
const router = Router();

import uploadImage from '../utils/cloudinary.js';

router.get('/', allReports);

router.get('/:id', allReportsFromUser);

router.post('/', uploadImage, addReport);

router.put('/:id', updateReport);

router.delete('/:id', deleteReport);

export default router;
