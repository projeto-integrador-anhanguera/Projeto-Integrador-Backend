const { User } = require('../models/index');

exports.login = async function (req, res) {
    const { name, password } = req.body;

    const userFind = await User.findAll({
        attributes: ['name', 'password'],
        where: {
            name: name,
            password: password
        }
    });

    res.json(userFind);
}

exports.register = async function (req, res) {
    const user = await User.create(req.body);
    
    res.json(user);
}