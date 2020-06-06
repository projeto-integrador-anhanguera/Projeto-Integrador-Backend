const db = require("../config/db-config.js");
const Car = db.Car;

exports.registerCar = async function (req, res) {
    const {licensePlate} = req.body;
    let registeredCar = await findCarByLicensePlate({licensePlate})

    if (registeredCar) {
        return res.status(200).send("Veículo já registrado!");
    }

    registeredCar = await Car.create(req.body);
    return res.json({
        data: {
            registeredCar
        },
        message: "Veículo cadastrado com sucesso!",
    });
}

exports.findAll = async function (req, res) {
    const cars = await Car.findAll();
    return res.json(cars);
}

exports.findByLicensePlate = async function (req, res) {
    const {licensePlate} = req.params;
    const car = await findCarByLicensePlate({licensePlate})

    if (car) {
        return res.json(car);
    }
    return res.status(404).send("Veículo não encontrado!");
}

exports.editRegisteredCar = async function (req, res) {
    const {licensePlate} = req.body;
    let car = await findCarByLicensePlate({licensePlate});

    if (car) {
        Car.update(req.body,
            {
                where: {licensePlate}
            });

        return res.json({
            data: car,
            message: "As informações do veículo foram editadas com sucesso!"
        });
    }
    return res.status(404).send("Veículo não encontrado!");
}

exports.removeCar = async function (req, res) {
    const {licensePlate} = req.body;
    let car = await findCarByLicensePlate({licensePlate});

    if (car) {
        await Car.destroy({
            where: {licensePlate}
        });
        return res.status(200).send("Veículo excluído com sucesso!");
    }
    return res.status(404).send("Veículo não encontrado!");
}

const findCarByLicensePlate = function (string) {
    return Car.findOne({
        where: string
    });
}
