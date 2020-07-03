const express = require('express');

const movieController = require('./controllers/movieController');

const routes = express.Router();

routes.get('/movies', movieController.index);
routes.post('/movies', movieController.create);

module.exports = routes;