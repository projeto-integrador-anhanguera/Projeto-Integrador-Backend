const service = require("../services/CardsService");

exports.findAllByStateAndDate = async function (req, res) {
    await service.findAllByStateAndDate(req, res);
};

exports.findAllByStatus = async function (req, res) {
    await service.findAllByStatus(req, res);
};