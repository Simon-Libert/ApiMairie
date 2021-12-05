import dotenv from 'dotenv';
dotenv.config();

import { Router } from 'express';
import cloudinary from '../utils/cloudinary.js';
import upload from '../utils/multer.js';

import { allReports, addReport } from '../controllers/reportController.js';
const router = Router();

router.get('/', allReports); // à l'accueil récupère tous mes utilisateurs

// à l'accueil récupère tous mes utilisateurs
router.post('/', addReport);

export default router;
