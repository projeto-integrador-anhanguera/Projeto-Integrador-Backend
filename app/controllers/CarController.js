const express = require("express");
const routes = express.Router();
const db = require("../models");

routes.get("/cars", (req, res) => {
  db.Car.findAll().then((cars) => res.send(cars));
});

module.exports = routes;
