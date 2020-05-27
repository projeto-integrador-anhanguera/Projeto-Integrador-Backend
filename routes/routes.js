const express = require("express");
const UserController = require("../app/controllers/UserController");
const CarController = require("../app/controllers/CarController");
const routes = express.Router();

/* User methods */
routes.post("/register", UserController.register);
routes.post("/login", UserController.login);

/* Car methods */
routes.post("/api/cars", CarController.create);
routes.get("/api/cars", CarController.findAll);
routes.get("/api/cars/:licensePlate", CarController.findByLicensePlate);
routes.put("/api/cars/:carId", CarController.update);
routes.delete("/api/cars/:carsId", CarController.delete);

module.exports = routes;
