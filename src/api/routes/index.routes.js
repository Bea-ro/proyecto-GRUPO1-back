const express = require('express');
const destinationsRouter = require('./destinations.routes');
const flightsRouter = require('./flights.routes');
const hotelsRouter = require('./hotels.routes');
// const usersRouter = require('./users');

const router = express.Router();

router.use('/destinations', destinationsRouter);
router.use('/flights', flightsRouter);
router.use('/hotels', hotelsRouter);
// router.use('/users', usersRouter);

module.exports = router;