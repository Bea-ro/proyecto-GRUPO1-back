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
const router = express.Router();
// const { isAuth } = require('../../middlewares/authentication');


router.get('/', getAllHotels);
router.get('/:id', getHotelById);
router.post('/', createHotel);
router.put('/:id', updateHotel);
router.patch('/:id', uploadImgCloudinary.single('images'), uploadHotelImg);
router.delete('/:id', deleteHotel);

module.exports = router;