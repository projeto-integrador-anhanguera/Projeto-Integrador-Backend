const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("/cars", (req, res) => {
  db.Car.findAll().then((cars) => res.send(cars));
});

module.exports = router;
