const mongoose = require("mongoose");

const hotelSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    images: { type: [String], required: false, trim: true },
    city: { type: String, required: true, trim: true },
    airportDistance: { type: Number, required: false },
    stars: { type: Number, required: true},
    rating: { type: Number, required: false},
    price: { type: Number, required: true }
  },
  {
    timestamps: true,
  }
);

const Hotel = mongoose.model(
  "Hotel", hotelSchema, "hotels"
);

module.exports = Hotel;