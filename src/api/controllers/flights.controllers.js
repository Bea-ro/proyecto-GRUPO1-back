const Flight = require("../models/flight.model");

const getAllFlights = async (req, res, next) => {
  try {
    const flights = await Flight.find();
    return res.status(200).json(flights);
  } catch (error) {
    return next("Flights were not found", error);
  }
};

const createFlight = async (req, res, next) => {
  try {
    const newFlight = new Flight(req.body);

    const createdFlight = await newFlight.save();
    return res.status(201).json(createdFlight);
  } catch (error) {
    return next("Error while creating flight", error);
  }
};

const getFlightById = async (req, res, next) => {
  try {
    const flight = await Flight.findById(req.params.id);
    return res.status(200).json(flight);
  } catch (error) {
    return next("Flight not found", error);
  }
};

const updateFlight = async (req, res, next) => {
  try {
    const { id } = req.params;

    const newFlight = new Flight(req.body);

    newFlight._id = id;

    const updatedFlight = await Flight.findByIdAndUpdate(
      id,
      newFlight,
      {
        new: true,
      }
    );
    return res.status(200).json(updatedFlight);
  } catch (error) {
    return next("Error updating flight", error);
  }
};

const deleteFlight = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedFlight = await Flight.findByIdAndDelete(id);

    return res.status(200).json("Flight deleted successfully");
  } catch (error) {
    return next("Flight not found", error);
  }
};

module.exports = {
  getAllFlights,
  createFlight,
  getFlightById,
  updateFlight,
  deleteFlight
};