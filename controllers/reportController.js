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

export const oneReportPerCitizen = async (req, res) => {
	try {
		const report = await reportModel.find({ firstName: req.params.firstName });
		res.status(200).json({ report });
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
		alertAddress,
		lastName,
		firstName,
		userAddress,
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
			alertAddress,
			lastName,
			firstName,
			userAddress,
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
				<ul>
				<li>Nom: ${lastName}</li>
				<li>Prénom: ${firstName}</li>
				<li>Adresse:${userAddress}</li>
				<li>Code Postale: ${postCode}</li>
				<li>Ville: ${city}</li>
				<li>Email: ${email}</li>
				<li>Téléphone: ${phone}</li>
				<li>Type de requête: ${type}</li>
				<li>Description: ${description}</li>
				<li>alertAddress: ${alertAddress}</li>
				<li>Date: ${date}</li>
				<li>Heure: ${time}</li>
				<li>Image: ${image}</li>
				<li>Video: ${video}</li>
				</ul>
			`
		);

		res.status(200).json({ newReport });
	} catch (error) {
		res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: error.message });
	}
};
