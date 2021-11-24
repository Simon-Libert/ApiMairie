require('dotenv').config();
const express = require('express');
const app = express();
const connectDb = require('./config/db');
const userRoutes = require('./routes/userRoutes');

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
app.use('/api/reports/users', userRoutes);
