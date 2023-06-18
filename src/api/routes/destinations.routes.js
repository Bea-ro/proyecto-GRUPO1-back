const express = require('express');
const {
  getAllDestinations,
  getDestinationById,
  createDestination,
  updateDestination,
  deleteDestination
} = require('../controllers/destinations.controllers');
const router = express.Router();
// const { isAuth } = require('../../middlewares/authentication');
// const { uploadImgCloudinary } = require('../../middlewares/uploadFile');

router.get('/', getAllDestinations);
router.get('/:id', getDestinationById);
router.post('/', createDestination);
router.put('/:id', updateDestination);
// router.patch('/:id', [isAuth], uploadImgCloudinary.single('image'), uploadDestinationImg);
router.delete('/:id', deleteDestination);

module.exports = router;