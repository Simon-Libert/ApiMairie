import { Router } from 'express';
const router = Router();
import { getAllReports } from '../controllers/reportController.js';

router.get('/', getAllReports); // à l'accueil récupère tous mes utilisateurs

router.post('/', addReport); // à l'accueil récupère tous mes utilisateurs

export default router;
