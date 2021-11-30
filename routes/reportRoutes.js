import { Router } from 'express';

import { allReports, addReport } from '../controllers/reportController.js';
const router = Router();

router.get('/', allReports); // à l'accueil récupère tous mes utilisateurs

router.post('/', addReport); // à l'accueil récupère tous mes utilisateurs

export default router;
