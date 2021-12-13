import dotenv from 'dotenv';
dotenv.config();

import { Router } from 'express';

import { allReports, addReport } from '../controllers/reportController.js';
const router = Router();

import cloudinary from '../utils/cloudinary.js';

import upload from '../utils/multer.js';

router.get('/', allReports); // à l'accueil récupère tous mes utilisateurs

// à l'accueil récupère tous mes utilisateurs
router.post('/', upload.single('image'), addReport);

export default router;
