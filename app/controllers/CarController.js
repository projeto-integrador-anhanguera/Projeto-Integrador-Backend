const db = require("../config/db-config.js");
const Car = db.cars;

exports.create = (req, res) => {
  Car.create(req.body).then((newCar) => {
    res.send(newCar);
  });
};

exports.findAll = (req, res) => {
  Car.findAll().then((cars) => {
    res.send(cars);
  });
};

exports.findById = (req, res) => {
  Car.findById(req.params.carId).then((car) => {
    res.send(car);
  });
};

exports.update = (req, res) => {
  const id = req.params.carId;
  Car.update(req.body, { where: { id: req.params.carId } }).then(() => {
    res.status(200).send("updated successfully a car with id = " + id);
  });
};

exports.delete = (req, res) => {
  const id = req.params.customerId;
  Customer.destroy({
    where: { id: id },
  }).then(() => {
    res.status(200).send("deleted successfully a car with id = " + id);
  });
};
