const UserService = require('../services/UserServices'); 

exports.login = async function (req, res) {
    try {
        var users = await UserService.login(req, res);
        return res.status(200).json({ status: 200, data: users, message: "Success" });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}

exports.register = async function (req, res) {
    try {
        var users = await UserService.register(req, res);
        return res.status(200).json({ status: 200, data: users, message: "Success" });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}