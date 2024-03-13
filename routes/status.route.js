const express = require('express');
const statusRoute = express();
const statusController = require('../controllers/status.controller');

statusRoute.post('/add', statusController.addNewStatus);
statusRoute.get('/get', statusController.getStatus);
statusRoute.get('/filtercards', statusController.getCardByQuery)


module.exports = statusRoute;
