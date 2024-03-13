const express = require('express');
const profileRoute = express();
const profileController = require('../controllers/profile.controller');

profileRoute.post('/add', profileController.addNewProfile);
profileRoute.get('/get', profileController.getProfile);


module.exports = profileRoute;
