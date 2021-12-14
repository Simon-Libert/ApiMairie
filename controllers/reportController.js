import reportModel from '../models/reportModel.js';

import { StatusCodes } from 'http-status-codes';

import sendMail from '../utils/sendMail.js';

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

		let emailService;
		switch (type) {
			case 'voirie':
				emailService = 'voirie@simplonville.co';
				break;
			case 'stationnement':
				emailService = 'stationnement@simplonville.co';
				break;
			case 'travaux':
				emailService = 'travaux@simplonville.co';
				break;
			default:
				emailService = 'autres@simplonville.co';
				break;
		}
		sendMail(
			emailService,
			'Nouvelle alerte.',
			`
				<p>Vous avez une nouvelle requête</p>
				<h3> Contenu de la requête: </h3>
				<li>Nom: ${lastName}</li>
				<li>Prénom: ${firstName}</li>
				<li>Adresse:${userAdress}</li>
				<li>Code Postale: ${postCode}</li>
				<li>Ville: ${city}</li>
				<li>Email: ${email}</li>
				<li>Téléphone: ${phone}</li>
				<li>Description: ${description}</li>
				<li>Date: ${date}</li>
				<li>Heure: ${time}</li>
				<li>Image: ${image}</li>
				<li>Video: ${video}</li>
			`
		);

		res.status(200).json({ newReport });
	} catch (error) {
		res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: error.message });
	}
};
