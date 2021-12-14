/* import dotenv from 'dotenv';
dotenv.config();

import fs from 'fs';
import upload from './multer.js';
import { v2 as cloudinary } from 'cloudinary';

export const uploadImage = (req, res, next) => {
	// upload to cloudinary
	upload(req, res, async (err) => {
		if (err) {
			return res.send(err);
		}
		// SEND FILE TO CLOUDINARY
		cloudinary.config({
			cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
			api_key: process.env.CLOUDINARY_API_KEY,
			api_secret: process.env.CLOUDINARY_API_SECRET,
		});

		const { path } = req.file; // file becomes available in req at this point

		try {
			const result = await cloudinary.uploader.upload(path, {
				upload_preset: 'apimairie',
				resource_type: 'image',
			});
			console.log(result);
			fs.unlinkSync(path);
			next();
		} catch (error) {
			return res.status(409).send(error);
		}
	});
}; */

// essai 2.0
import dotenv from 'dotenv';
dotenv.config();
import multer from '../utils/multer.js';
import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';

const uploadImage = (req, res, next) => {
	// upload to cloudinary
	multer(req, res, async (err) => {
		if (err) {
			console.log(err);
			return res.send(err);
		}

		cloudinary.config({
			cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
			api_key: process.env.CLOUDINARY_API_KEY,
			api_secret: process.env.CLOUDINARY_API_SECRET,
		});

		if (!req.file) {
			return next();
		}

		// SEND FILE TO CLOUDINARY
		try {
			const { path } = req.file; // file becomes available in req at this point
			const result = await cloudinary.uploader.upload(path, {
				upload_preset: 'apimairie',
				resource_type: 'image',
			});
			console.log(result);
			fs.unlinkSync(path); // delete file from server
			next();
		} catch (error) {
			return res.status(409).send(error);
		}
	});
};

export default uploadImage;
