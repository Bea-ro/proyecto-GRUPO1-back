const Destination = require("../models/destination.model");

const getAllDestinations = async (req, res, next) => {
  try {
    const destinations = await Destination.find().populate('hotels').populate('flights')
    return res.status(200).json(destinations);
  } catch (error) {
    return next("Destinations were not found", error);
  }
};

const createDestination = async (req, res, next) => {
  try {
    const newDestination = new Destination(req.body);

    const createdDestination = await newDestination.save();
    return res.status(201).json(createdDestination);
  } catch (error) {
    return next("Error while creating Destination", error);
  }
};

const getDestinationById = async (req, res, next) => {
  try {
    const destination = await Destination.findById(req.params.id);
    return res.status(200).json(destination);
  } catch (error) {
    return next("Destination not found", error);
  }
};

const updateDestination = async (req, res, next) => {
  try {
    const { id } = req.params;

    const newDestination = new Destination(req.body);
    newDestination._id = id;
  

    const oldDestination = await Destination.findById(id)
    newDestination.images = [ ...oldDestination.images, ...newDestination.images];
    newDestination.hotels = [ ...oldDestination.hotels, ...newDestination.hotels];
    newDestination.flights = [ ...oldDestination.flights, ...newDestination.flights];
  

    const updatedDestination = await Destination.findByIdAndUpdate(
      id,
      req.body,
      {
        new: true,
      }
    );
    return res.status(200).json(updatedDestination);
  } catch (error) {
    return next("Error updating Destination", error);
  }
};

const deleteDestination = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedDestination = await Destination.findByIdAndDelete(id);

    return res.status(200).json("Destination deleted successfully");
  } catch (error) {
    return next("Destination not found", error);
  }
};

const uploadDestinationImg = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (req.file) {
      // const originalDestination = await Destination.findById(id);
      
      // if (originalDestination.image) {
      //   deleteImgCloudinary(originalDestination.image);
      // }

      const updatedDestination = await Destination.findByIdAndUpdate(
        id,
        { $addToSet: { images: req.file.path } },
        { new: true }
      );
      
      return res.status(200).json(updatedDestination);
    }
  } catch (error) {
    return res.status(400).json({ mensaje: 'Error uploading image', error: error });
  }
};

module.exports = {
  getAllDestinations,
  createDestination,
  getDestinationById,
  updateDestination,
  deleteDestination,
  uploadDestinationImg
};