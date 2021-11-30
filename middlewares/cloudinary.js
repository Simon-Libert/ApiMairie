import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import mongoose from 'mongoose';

import reportModel from '../models/reportModel.js';

import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
	cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
	api_key: process.env.CLOUDINARY_API_KEY,
	api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const uploadImage = async (req, res) => {
	const { image } = req.body;
	const result = await cloudinary.uploader.upload(image);
	res.status(200).json({ result });
};
