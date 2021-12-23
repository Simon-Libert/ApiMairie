import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import session from 'express-session';

const app = express();

app.use(session({ secret: 'cats', resave: true, saveUninitialized: true }));

import cors from 'cors';

import connectDb from './config/db.js';
import reportRoutes from './routes/reportRoutes.js';
import userRoutes from './routes/userRoutes.js';

import './utils/auth.js';
import passport from 'passport';

const appPort = process.env.PORT || 3500;

const start = async () => {
	try {
		await connectDb();
		app.listen(appPort, () => console.log(`Server started on port ${appPort}`));
	} catch (err) {
		console.log(err);
	}
};

start();

//middlewares
app.use(express.json());
app.use(cors());

app.use(passport.initialize());
app.use(passport.session());

//routes
app.use('/api/v1/reports', reportRoutes);
app.use('/api/v1/users', userRoutes);
