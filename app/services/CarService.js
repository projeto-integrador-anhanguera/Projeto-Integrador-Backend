const db = require("../config/db-config.js");
const Car = db.Car;

exports.registerCar = async function (req, res) {
    const {licensePlate} = req.body;
    let message;
    let registeredCar = await findCarByLicensePlate({licensePlate})

    if (registeredCar) {
        message = "Veículo já registrado!"
    } else {
        registeredCar = await Car.create(req.body);
        message = "Veículo cadastrado com sucesso!"
    }

    return res.json({
        data: {
            registeredCar
        },
        message: message,
    });
}

exports.findAll = async function (req, res) {
    const cars = await Car.findAll();
    return res.json(cars);
}

exports.findByLicensePlate = async function (req, res) {
    const {licensePlate} = req.params.licensePlate;
    const message = "Veículo não encontrado!";
    let car = await findCarByLicensePlate(licensePlate)

    if (car) {
        return res.json(car);
    }
    return res.json(message);
}

const findCarByLicensePlate = function (string) {
    return Car.findOne({
        where: string
    });
}

