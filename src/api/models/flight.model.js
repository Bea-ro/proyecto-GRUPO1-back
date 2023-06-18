const mongoose = require("mongoose");

const flightSchema = new mongoose.Schema(
  {
    departureCity: { type: String, required: true, trim: true },
    arrivalCity: { type: String, required: true, trim: true },
    departureTime: { type: Number, required: true },
    arrivalTime: { type: Number, required: true },
    duration: { type: Number, required: true },
    price: { type: Number, required: true }
    },
  {
    timestamps: true,
  }
);

const Flight = mongoose.model(
  "Flight",
  flightSchema,
  "flights"
);

module.exports = Flight;