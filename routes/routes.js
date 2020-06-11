const CardsController = require("../app/controllers/CardsController")
const UserController = require("../app/controllers/UserController");
const CarController = require("../app/controllers/CarController");
const express = require("express");
const routes = express.Router();

/* User methods */
routes.post("/register", UserController.register);
routes.post("/api/authenticate", UserController.authenticate);

/* Car methods */
routes.post("/api/cars", CarController.create);
routes.get("/api/cars", CarController.findAll);
routes.put("/api/cars", CarController.update);
routes.delete("/api/cars", CarController.delete);
routes.get("/api/cars/:licensePlate", CarController.findByLicensePlate);

/* Cards methods */
routes.get("/api/cards/one", CardsController.findAllByStateAndDate);
routes.get("/api/cards/two", CardsController.findAllByStatus);

module.exports = routes;
