const service = require("../services/CardsService");

exports.findAllByStateAndDate = async function (req, res) {
    service.loadCardOne(req, res);
};

exports.findAllByState = async function (req, res) {
    service.loadCardTwo(req, res);
}