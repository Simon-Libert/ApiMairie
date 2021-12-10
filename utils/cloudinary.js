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
import { v2 as cloudinary } from 'cloudinary';
import multer from 'multer';

import { CloudinaryStorage } from 'multer-storage-cloudinary';

cloudinary.config({
	cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
	api_key: process.env.CLOUDINARY_API_KEY,
	api_secret: process.env.CLOUDINARY_API_SECRET,
	secure: true,
});

const storage = new CloudinaryStorage({
	cloudinary: cloudinary,
	folder: 'images',
	allowedFormats: ['jpg', 'png', 'jpeg'],
	transformation: [{ width: 500, height: 500, crop: 'limit' }],
});
const parser = multer({ storage: storage });

export default parser;
