const Hotel = require("../models/hotel.model");

const getAllHotels = async (req, res, next) => {
  try {
    const hotels = await Hotel.find();
    return res.status(200).json(hotels);
  } catch (error) {
    return next("Hotels were not found", error);
  }
};

const createHotel = async (req, res, next) => {
  try {
    const newHotel = new Hotel(req.body);

    const createdHotel = await newHotel.save();
    return res.status(201).json(createdHotel);
  } catch (error) {
    return next("Error while creating hotel", error);
  }
};

const getHotelById = async (req, res, next) => {
  try {
    const hotel = await Hotel.findById(req.params.id);
    return res.status(200).json(hotel);
  } catch (error) {
    return next("Hotel not found", error);
  }
};

const updateHotel = async (req, res, next) => {
  try {
    const { id } = req.params;

    const newHotel = new Hotel(req.body);

    newHotel._id = id;

    const updatedHotel = await Hotel.findByIdAndUpdate(
      id,
      newHotel,
      {
        new: true,
      }
    );
    return res.status(200).json(updatedHotel);
  } catch (error) {
    return next("Error updating hotel", error);
  }
};

const deleteHotel = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedHotel = await Hotel.findByIdAndDelete(id);

    return res.status(200).json("Hotel deleted successfully");
  } catch (error) {
    return next("Hotel not found", error);
  }
};

const uploadHotelImg = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (req.file) {
      const originalHotel = await Hotel.findById(id);
      
      // if (originalHotel.image) {
      //   deleteImgCloudinary(originalHotel.image);
      // }

      const updatedHotel = await Hotel.findByIdAndUpdate(
        id,
        { $addToSet: { images: req.file.path } },
        { new: true }
      );
      
      return res.status(200).json(updatedHotel);
    }
  } catch (error) {
    return res.status(400).json({ mensaje: 'Error uploading image', error: error });
  }
};


module.exports = {
  getAllHotels,
  createHotel,
  getHotelById,
  updateHotel,
  deleteHotel,
  uploadHotelImg
};