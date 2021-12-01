import reportModel from '../models/reportModel.js';
import mongoose from 'mongoose';
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
		phone,
	} = req.body;

	try {
		const newReport = new reportModel({
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
			phone,
		});

		await newReport.save();
		res.status(200).json({ newReport });
	} catch (error) {
		res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: error.message });
	}
};
