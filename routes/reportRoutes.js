const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/', userController.getAllUsers); // à l'accueil récupère tous mes utilisateurs

module.exports = router;
