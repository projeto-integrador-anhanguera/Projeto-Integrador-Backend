const service = require("../services/CardsService");

exports.findAllByStateAndDate = async function (req, res) {
    service.findAllByStateAndDate(req, res);
};

exports.findAllByState = async function (req, res) {
    service.findAllByState(req, res);
}