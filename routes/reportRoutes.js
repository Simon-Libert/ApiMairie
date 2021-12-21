import dotenv from 'dotenv';
dotenv.config();

import { Router } from 'express';

import { allReports, addReport, oneReportPerCitizen } from '../controllers/reportController.js';
const router = Router();

import uploadImage from '../utils/cloudinary.js';

router.get('/', allReports); // à l'accueil récupère tous mes utilisateurs
router.get('/:firstName', oneReportPerCitizen); // récupère les reports d'un utilisateur

// à l'accueil récupère tous mes utilisateurs
router.post('/', uploadImage, addReport);

export default router;
