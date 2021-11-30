import reportModel from '../models/reportModel.js';

export const allReports = async (req, res) => {
	const reports = await reportModel.find();
	res.status(200).json({ reports });
};

export const addReport = async (req, res) => {
	const { title, description, image, latitude, longitude, address, category, user } = req.body; //faire des ifs pour vérifier que les champs sont remplis

	const newReport = new reportModel({
		//faire un try catch
		title,
		description,
		image,
		latitude,
		longitude,
		address,
		category,
		user,
	});

	await newReport.save();
	res.status(200).json({ newReport });
};
