import dotenv from 'dotenv';
dotenv.config();

import { Router } from 'express';

import { allReports, addReport } from '../controllers/reportController.js';
const router = Router();

import parser from '../utils/cloudinary.js';
import { v2 as cloudinary } from 'cloudinary';

router.get('/', allReports); // à l'accueil récupère tous mes utilisateurs

// à l'accueil récupère tous mes utilisateurs
router.post('/', addReport);

router.post('/images', parser.single('image'), (req, res) => {
	console.log(req.file); // to see what is returned to you
	const image = req.files;

	if (image) {
		image.forEach(function (file) {
			cloudinary.uploader.upload('image', function (result) {
				console.log(result);
			});
		});
	}
});
export default router;
