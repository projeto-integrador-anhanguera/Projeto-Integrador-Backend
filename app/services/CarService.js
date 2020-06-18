const db = require("../config/db-config.js");
const Car = db.Car;

exports.registerCar = async function (req, res) {
    const {licensePlate} = req.body;
    let registeredCar = await findCarByLicensePlate({licensePlate})

    if (registeredCar) {
        return res.status(200).send({message: "Veículo já registrado!", success: false});
    }

    registeredCar = await Car.create(req.body);
    return res.json({
        data: {
            registeredCar
        },
        message: "Veículo cadastrado com sucesso!",
        success: true
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
        return res.json({success: true, car});
    }
    return res.status(200).send({success: false, message: "Veículo não encontrado!"});
}

exports.editRegisteredCar = async function (req, res) {
    const {licensePlate} = req.params;
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
    const {licensePlate} = req.params;
    let car = await findCarByLicensePlate({licensePlate});

    if (car) {
        await Car.destroy({
            where: {licensePlate}
        });

        return res.status(200).send({message: "Veículo excluído com sucesso!", success: true});
    }

    return res.status(200).send({message: "Veículo não encontrado!", success: false});
}

const findCarByLicensePlate = function (string) {
    return Car.findOne({
        where: string
    });
}
