const express = require('express');
const cardRoute = express();
const cardController = require('../controllers/card.controller');

cardRoute.post('/add', cardController.addNewCardsData);
cardRoute.post('/update', cardController.updateCardsData);
cardRoute.get('/get-all', cardController.getAllCardsData);


module.exports = cardRoute;
