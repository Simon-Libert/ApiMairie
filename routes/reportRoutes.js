import dotenv from 'dotenv';
dotenv.config();

import { Router } from 'express';

import { allReports, addReport } from '../controllers/reportController.js';
const router = Router();

import uploadImage from '../utils/cloudinary.js';

router.get('/', allReports); // à l'accueil récupère tous mes utilisateurs

// à l'accueil récupère tous mes utilisateurs
router.post('/', uploadImage, addReport);

export default router;
