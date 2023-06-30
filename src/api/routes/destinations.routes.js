const express = require('express');
const {
  getAllDestinations,
  getDestinationById,
  createDestination,
  updateDestination,
  deleteDestination,
  uploadDestinationImg
} = require('../controllers/destinations.controllers');
const { uploadImgCloudinary } = require('../middlewares/uploadImg');
const router = express.Router();
//const { isAuth } = require('../../middlewares/authentication');


router.get('/', getAllDestinations);
router.get('/:id', getDestinationById);
router.post('/', createDestination);
router.put('/:id', updateDestination);
router.patch('/:id', uploadImgCloudinary.single('images'), uploadDestinationImg);
router.delete('/:id', deleteDestination);

module.exports = router;