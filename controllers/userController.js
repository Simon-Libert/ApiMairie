const userModel = require('../models/userModel');
module.exports = {
	//permet de récupérer tous les utilisateurs
	getAllUsers: async (req, res) => {
		const users = await userModel.find().select('-password');
		res.status(200).json({ users });
	},
};
