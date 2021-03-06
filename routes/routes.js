const CardsController = require("../app/controllers/CardsController")
const UserController = require("../app/controllers/UserController");
const CarController = require("../app/controllers/CarController");
const express = require("express");
const routes = express.Router();

/* User methods */
routes.post("/register", UserController.register);
routes.post("/api/authenticate", UserController.authenticate);
routes.get("/api/user/:id", UserController.getUserById);
routes.get("/api/user", UserController.findAll);

/* Car methods */
routes.post("/api/cars", CarController.create);
routes.get("/api/cars", CarController.findAll);
routes.put("/api/cars/:licensePlate", CarController.update);
routes.delete("/api/cars/:licensePlate", CarController.delete);
routes.get("/api/cars/:licensePlate", CarController.findByLicensePlate);

/* Cards methods */
routes.get("/api/cards/one/:startDate/:endDate/:city", CardsController.findAllByStateAndDate);
routes.get("/api/cards/two/:startDate/:endDate/:city/:status", CardsController.findAllByStatus);

module.exports = routes;
