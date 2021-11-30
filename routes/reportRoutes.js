import { Router } from 'express';
import { uploadImage } from '../middlewares/cloudinary.js';

import { allReports, addReport } from '../controllers/reportController.js';
const router = Router();

router.get('/', allReports); // à l'accueil récupère tous mes utilisateurs

router.post('/', uploadImage, addReport); // à l'accueil récupère tous mes utilisateurs

export default router;
