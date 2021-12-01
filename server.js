import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
const app = express();
import connectDb from './config/db.js';
import reportRoutes from './routes/reportRoutes.js';

const appPort = process.env.APP_PORT || 3500;

const start = async () => {
	try {
		await connectDb();
		app.listen(appPort, () => console.log(`Server started on port ${appPort}`));
	} catch (err) {
		console.log(err);
	}
};

start();

//routes
app.use(express.json());
app.use('/api/v1/reports', reportRoutes);
