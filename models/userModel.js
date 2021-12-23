// On importe la bibliothèque (package) mongoose
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

// UserSchema représente le squelette du document utilisateur dans la base de données
const userSchema = new mongoose.Schema(
	{
		role: {
			type: String,
			enum: ['admin', 'user'],
			default: 'user',
		},

		lastName: {
			type: String,
			required: [true, "Merci de fournir un nom d'utilisateur"],
			minlength: 2,
			maxlength: 50,
			unique: true,
			trim: true,
			lowercase: true,
		},

		firstName: {
			type: String,
			required: [true, "Merci de fournir un nom d'utilisateur"],
			minlength: 2,
			maxlength: 50,
			unique: true,
			trim: true,
			lowercase: true,
		},

		userAddress: {
			type: String,
			trim: true,
			required: true,
			minlength: [3, "L'adresse doit contenir au moins 3 caractères"],
			maxlength: [100, "L'adresse ne doit pas dépasser 100 caractères"],
		},
		postCode: {
			type: String,
			trim: true,
			required: true,
			minimum: [2, 'Le code postal doit contenir au moins 2 caractères'],
			maximum: [5, 'Le code postal ne doit pas dépasser 5 caractères'],
		},

		city: {
			type: String,
			trim: true,
			required: true,
			minlength: [2, 'Le nom de la ville doit contenir au moins 2 caractères'],
			maxlength: [30, 'Le nom de la ville ne doit pas dépasser 30 caractères'],
		},

		phone: {
			type: String,
			trim: true,
			required: true,
			minimum: [10, 'Le numéro de téléphone doit contenir au moins 10 chiffres'],
			maximum: [10, 'Le numéro de téléphone ne doit pas dépasser 10 chiffres'],
		},

		email: {
			type: String,
			trim: true,
			required: [true, 'Merci de fournir un email'],
			unique: true,
			match: [
				/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
				'Merci de fournir un email valide',
			],
			unique: true,
		},

		role: {
			type: String,
			required: true,
			enum: ['citoyen', 'responsable', 'admin'],
			default: 'citoyen',
		},

		status: {
			type: String,
			enum: ['todo', 'inProgress', 'done'],
			default: 'todo',
		},

		service: {
			type: String,
			trim: true,
			enum: ['Voirie', 'Stationnement', 'Travaux', 'Autre'],
		},

		password: {
			type: String,
			required: [true, 'Merci de fournir un mot de passe'],
			minlength: 3,
			maxlength: 255,
		},
	},
	{
		timestamps: true,
	}
);

//pre hook (event) qui s'exécute avant d'enregistrer dans mongodb
userSchema.pre('save', async function (next) {
	const salt = await bcrypt.genSalt(Number(process.env.SALT));
	this.password = await bcrypt.hash(this.password, salt); //this = user
	next();
});

//Ajouter une méthode pour vérifier le password
userSchema.methods.matchPassword = async function (password) {
	return await bcrypt.compare(password, this.password);
};

// Permet d'exporter le modèle User afin de pouvoir y accèdez dans les autres fichiers
const userModel = mongoose.model('User', userSchema);

export default userModel;
