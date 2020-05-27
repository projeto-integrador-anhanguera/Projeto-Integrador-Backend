const service = require('../services/CarService');

exports.create = async function (req, res) {
    await service.registerCar(req, res);
};

exports.findAll = async function (req, res) {
    await service.findAll(req, res);
};

exports.findByLicensePlate = async function (req, res) {
    service.findByLicensePlate(req, res)
};

exports.update = (req, res) => {
    const id = req.params.carId;
    Car.update(req.body, {where: {id: req.params.carId}}).then(() => {
        res.status(200).send("updated successfully a car with id = " + id);
    });
};

exports.delete = (req, res) => {
    const id = req.params.customerId;
    Customer.destroy({
        where: {id: id},
    }).then(() => {
        res.status(200).send("deleted successfully a car with id = " + id);
    });
};
