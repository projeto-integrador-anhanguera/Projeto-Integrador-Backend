const db = require("../config/db-config.js");
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

exports.findAllByStatus = async function (req, res) {
    const {startDate, endDate, uf, status} = req.params;

    const total = await Car.count({
        where: {
            robberyDate: {
                [op.between]: [startDate, endDate]
            },
            state: {
                [op.eq]: uf
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
