const express = require('express');
const destinationsRouter = require('./destinations.routes');
const flightsRouter = require('./flights.routes');
const hotelsRouter = require('./hotels.routes');
const usersRouter = require('./users.routes');

const mainRouter = express.Router();

mainRouter.use('/destinations', destinationsRouter);
mainRouter.use('/flights', flightsRouter);
mainRouter.use('/hotels', hotelsRouter);
mainRouter.use('/users', usersRouter);

module.exports = mainRouter;