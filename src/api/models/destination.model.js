const mongoose = require("mongoose");

const destinationSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    //images: { type: [String], required: false, trim: true },
    // hotels: [
    //   {
    //     type: mongoose.Types.ObjectId,
    //     required: true,
    //     trim: true,
    //     ref: "Hotel",
    //   },
    // ],
    // flights: [
    //     {
    //         type: mongoose.Types.ObjectId,
    //     required: true,
    //     trim: true,
    //     ref: "Flight",
    //     }
    // ]
  },
  {
    timestamps: true,
  }
);

const Destination = mongoose.model(
  "Destination",
  destinationSchema,
  "destinations"
);

module.exports = Destination;