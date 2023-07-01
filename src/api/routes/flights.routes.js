const express = require('express');
const {
  getAllFlights,
  getFlightById,
  createFlight,
  updateFlight,
  deleteFlight
} = require('../controllers/flights.controllers');
const flightsRouter = express.Router();

flightsRouter.get('/', getAllFlights);
flightsRouter.get('/:id', getFlightById);
flightsRouter.post('/', createFlight);
flightsRouter.put('/:id', updateFlight);
flightsRouter.delete('/:id', deleteFlight);


module.exports = flightsRouter;