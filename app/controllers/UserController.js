const UserService = require('../services/UserServices');

exports.register = async function (req, res) {
    try {
        var users = await UserService.register(req, res);
        return res.status(200).json({status: 200, data: users, message: "Success"});
    } catch (e) {
        return res.status(400).json({status: 400, message: e.message});
    }
}

exports.authenticate = async function (req, res) {
    await UserService.authenticate(req, res);
};

exports.getUserById = async function (req, res) {
    await UserService.getUserById(req, res);
}

exports.findAll = async function (req, res) {
    await UserService.findAll(req, res);
}
