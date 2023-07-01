const express = require('express');
const {
  getAllHotels,
  getHotelById,
  createHotel,
  updateHotel,
  deleteHotel,
  uploadHotelImg
} = require('../controllers/hotels.controllers');
const { uploadImgCloudinary } = require('../middlewares/uploadImg');
const hotelsRouter = express.Router();
//const { isAuth } = require('../../middlewares/isAuth.middleware');


hotelsRouter.get('/', getAllHotels);
hotelsRouter.get('/:id', getHotelById);
hotelsRouter.post('/', createHotel);
hotelsRouter.put('/:id', updateHotel);
hotelsRouter.patch('/:id', uploadImgCloudinary.single('images'), uploadHotelImg);
hotelsRouter.delete('/:id', deleteHotel);

module.exports = hotelsRouter;