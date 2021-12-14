import reportModel from '../models/reportModel.js';

import { StatusCodes } from 'http-status-codes';

import cloudinary from '../utils/cloudinary.js';
import fs from 'fs';

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
