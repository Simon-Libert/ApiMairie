import mongoose from 'mongoose';

const reportSchema = new mongoose.Schema(
	{
		ownerId: {
			type: mongoose.Types.ObjectId,
			ref: 'User',
		},

		status: {
			type: String,
			enum: ['En attente', 'En cours', 'Terminé'],
		},

		type: {
			type: String,
			required: true,
			trim: true,
			enum: ['voirie', 'stationnement', 'travaux', 'autre'],
		},
		description: {
			type: String,
			trim: true,
			max: 1024,
			required: true,
		},

		date: {
			type: Date,
			trim: true,
			required: true,
		},
		time: {
			type: String,
		},
		alertAddress: {
			type: String,
			trim: true,
			required: true,
			minlength: [3, "L'adresse doit contenir au moins 3 caractères"],
			maxlength: [100, "L'adresse ne doit pas dépasser 100 caractères"],
		},
		lastName: {
			type: String,
			trim: true,
			minlength: [2, "Le prénom d'utilisateur doit contenir au moins 2 caractères"],
			maxlength: [50, "Le prénom d'utilisateur ne doit pas dépasser 50 caractères"],
		},
		firstName: {
			type: String,
			trim: true,
			minlength: [2, "Le nom d'utilisateur doit contenir au moins 2 caractères"],
			maxlength: [50, "Le nom d'utilisateur ne doit pas dépasser 50 caractères"],
		},

		email: {
			type: String,
			trim: true,
			match: [
				/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
				'Merci de fournir un email valide',
			],
			unique: true,
		},
		video: {
			type: String,
		},
		image: {
			default: '',
			type: String,
		},
	},

	{
		timestamps: true,
	}
);

// export the user models
export default mongoose.model('Report', reportSchema);
