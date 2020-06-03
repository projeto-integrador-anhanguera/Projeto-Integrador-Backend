const db = require("../config/db-config.js");
const carService = require("./CarService");
const Sequelize = require('sequelize');
const op = Sequelize.Op;
const Car = db.Car;

exports.findAllByStateAndDate = async function (req, res) {
    const {startDate, endDate, state} = req.body;

    let total = await Car.count({
        where: {
            robberyDate: {
                [op.between]: [startDate, endDate]
            },
            state: {
                [op.eq]: state
            }
        }
    });
    return res.status(200).json({
        total: total
    });
}

exports.findAllByState = function (req, res) {
    const {state} = req.body;

    const cars = Car.count({
        where: {
            state: {
                [op.eq]: state
            }
        }
    });
    return res.json(cars);
}
