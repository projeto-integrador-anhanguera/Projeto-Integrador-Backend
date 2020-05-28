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

exports.update = async function (req, res) {
    service.editRegisteredCar(req, res);
};

exports.delete = async function (req, res) {
    service.removeCar(req, res);
};
