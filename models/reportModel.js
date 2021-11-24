import mongoose from 'mongoose';

const reportSchema = new mongoose.Schema({
	type: {
		type: String,
		required: true,
		enum: ['voirie', 'stationnement', 'travaux', 'autre'],
	},
	description: {
		type: String,
		max: 1024,
	},
	required: true,

	date: {
		type: Date,
		required: true,
	},
	hours: {
		type: String,
		required: true,
	},
	alertAdress: {
		type: String,
		required: true,
		minlength: [3, "L'adresse doit contenir au moins 3 caractères"],
		maxlength: [100, "L'adresse ne doit pas dépasser 100 caractères"],
	},
	lastName: {
		type: String,
		required: true,
		minlength: [2, "Le prénom d'utilisateur doit contenir au moins 2 caractères"],
		maxlength: [50, "Le prénom d'utilisateur ne doit pas dépasser 50 caractères"],
	},
	firstName: {
		type: String,
		required: true,
		minlength: [2, "Le nom d'utilisateur doit contenir au moins 2 caractères"],
		maxlength: [50, "Le nom d'utilisateur ne doit pas dépasser 50 caractères"],
	},
	userAdress: {
		type: String,
		required: true,
		minlength: [3, "L'adresse doit contenir au moins 3 caractères"],
		maxlength: [100, "L'adresse ne doit pas dépasser 100 caractères"],
	},
	postCode: {
		type: String,
		required: true,
		minimum: [2, 'Le code postal doit contenir au moins 2 caractères'],
		maximum: [5, 'Le code postal ne doit pas dépasser 5 caractères'],
	},
	city: {
		type: String,
		required: true,
		minlength: [2, 'Le nom de la ville doit contenir au moins 2 caractères'],
		maxlength: [30, 'Le nom de la ville ne doit pas dépasser 30 caractères'],
	},
	phone: {
		type: String,
		required: true,
		minimum: [10, 'Le numéro de téléphone doit contenir au moins 10 chiffres'],
		maximum: [13, 'Le numéro de téléphone ne doit pas dépasser 13 chiffres'],
	},
	email: {
		type: String,
		match: [
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
			'Merci de fournir un email valide',
		],
		unique: true,
	},
	video: {
		type: string,
	},

	timestamps: true,
});

// export the user models
export default mongoose.model('Report', reportSchema);
