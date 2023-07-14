const express = require("express");
const {
  getAllDestinations,
  getDestinationById,
  createDestination,
  updateDestination,
  deleteDestination,
  uploadDestinationImg,
} = require("../controllers/destinations.controllers");
const { uploadImgCloudinary } = require("../middlewares/uploadImg");
const { isAuth } = require("../middlewares/isAuth.middleware");
const destinationsRouter = express.Router();

destinationsRouter.get("/", getAllDestinations);
destinationsRouter.get("/:id", getDestinationById);
destinationsRouter.post("/", createDestination);
destinationsRouter.put("/:id", updateDestination);
destinationsRouter.patch(
  "/:id",
  uploadImgCloudinary.single("images"),
  uploadDestinationImg
);
destinationsRouter.delete("/:id", deleteDestination);

module.exports = destinationsRouter;
