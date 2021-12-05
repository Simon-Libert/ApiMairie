import reportModel from '../models/reportModel.js';

import { StatusCodes } from 'http-status-codes';

export const allReports = async (req, res) => {
	try {
		const reports = await reportModel.find();
		res.status(200).json({ reports });
	} catch (error) {
		res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: error.message });
	}
};

export const addReport = async (req, res) => {
	const {
		type,
		description,
		date,
		time,
		alertAdress,
		lastName,
		firstName,
		userAdress,
		postCode,
		city,
		email,
		phone,
		image,
		video,
	} = req.body;

	try {
		const newReport = await reportModel.create({
			//faire un try catch
			type,
			description,
			date,
			time,
			alertAdress,
			lastName,
			firstName,
			userAdress,
			postCode,
			city,
			email,
			phone,
			image,
			video,
		});

		newReport.save();
		res.status(200).json({ newReport });
	} catch (error) {
		res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: error.message });
	}
};

/* Récupération du path temporaire du fichier ;
2 : Stocké l'image dans cloudinary ;
3 : Récupérer le path de l'image dans cloudinary ;
4 : Instancier un nouveau reportModel ;
5 : Injecter les données du body dans le model (sauf file) + path récupéré par le cloudinary dans la propriété image
6 : save le model;
7 : Retourner un rendu à ta vue */
