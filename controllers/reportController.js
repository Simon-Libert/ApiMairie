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

export const uploadImage = async (req, res) => {
	try {
		const result = await cloudinary.v2.uploader.upload(req.file.path);

		let user = new User({
			name: req.body.name,
			avatar: result.secure_url,
			cloudinary_id: result.public_id,
		});

		await user.save();
		res.json(user);
	} catch (error) {
		console.log(error);
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
