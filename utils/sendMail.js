import nodemailer from 'nodemailer';

import dotenv from 'dotenv';
dotenv.config();

// create reusable transporter object using the default SMTP transport
export default (to, subject, message) => {
	let transporter = nodemailer.createTransport({
		host: process.env.EMAIL_HOST,
		port: process.env.EMAIL_PORT,
		secure: false, // true for 465, false for other ports
		auth: {
			user: process.env.EMAIL_HOST_USER, // generated ethereal user
			pass: process.env.EMAIL_HOST_PASSWORD, // generated ethereal password
		},
		tls: {
			rejectUnauthorized: false,
		},
	});

	// send mail with defined transport object
	let mailOptions = {
		from: `"Mairie Simplonville" <${process.env.EMAIL_HOST_USER}>`, // sender address
		to: process.env.EMAIL_DEST_TEST, // list of receivers
		subject: subject,
		html: message,

		// Subject line
	};

	transporter.sendMail(mailOptions, (error, info) => {
		if (error) {
			return console.log(error);
		}
		console.log('Message envoyé.', info.messageId);
	});
};
