const db = require("../config/db-config.js");
const Sequelize = require('sequelize');
const op = Sequelize.Op;
const Car = db.Car;

exports.findAllByStateAndDate = async function (req, res) {
    const {startDate, endDate, city} = req.params;

    let total = await Car.count({
        where: {
            robberyDate: {
                [op.between]: [startDate, endDate]
            },
            city: {
                [op.eq]: city
            }
        }
    });

    return res.status(200).json({
        total: total
    });
}

exports.findAllByStatus = async function (req, res) {
    const {startDate, endDate, city, status} = req.params;

    const total = await Car.count({
        where: {
            robberyDate: {
                [op.between]: [startDate, endDate]
            },
            city: {
                [op.eq]: city
            },
            status: {
                [op.eq]: status
            }
        }
    });

    return res.status(200).json({
        total: total
    });
}
