const service = require("../services/CardsService");

exports.findAllByStateAndDate = async function (req, res) {
    service.findAllByStateAndDate(req, res);
};

exports.findAllByStatus = async function (req, res) {
    service.findAllByStatus(req, res);
};