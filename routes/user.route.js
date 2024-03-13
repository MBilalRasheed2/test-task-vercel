const express = require('express');
const authRoute = express();
const authController = require('../controllers/auth.controller');

authRoute.post('/register', authController.registerUser);
authRoute.post('/login', authController.loginUser);


module.exports = authRoute;
