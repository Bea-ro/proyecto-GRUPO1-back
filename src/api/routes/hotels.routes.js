const express = require('express');
const {
  getAllHotels,
  getHotelById,
  createHotel,
  updateHotel,
  deleteHotel
} = require('../controllers/hotels.controllers');
const router = express.Router();
// const { isAuth } = require('../../middlewares/authentication');
// const { uploadImgCloudinary } = require('../../middlewares/uploadFile');

router.get('/', getAllHotels);
router.get('/:id', getHotelById);
router.post('/', createHotel);
router.put('/:id', updateHotel);
// router.patch('/:id', [isAuth], uploadImgCloudinary.single('image'), uploadHotelImg);
router.delete('/:id', deleteHotel);

module.exports = router;