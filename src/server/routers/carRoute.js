const express = require("express");
const router = express.Router();
const carController = require("../controllers/carController");

router.route("/").get(carController.getAllCar).post(carController.createCar);

router.route("/:id").get(carController.getCarByID).delete(carController.deleteCarByID).patch(carController.updateCarByID);

module.exports = router;