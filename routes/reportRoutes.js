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
import { adminUser } from '../middlewares/admin.js';
const router = Router();

import uploadImage from '../utils/cloudinary.js';

router.get('/', allReports);

router.get('/:id', allReportsFromUser);

router.post('/', uploadImage, addReport);

router.put('/:id', adminUser(['admin']), updateReport);

router.delete('/:id', adminUser(['admin']), deleteReport);

export default router;
