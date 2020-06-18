const Sequelize = require('sequelize');
const op = Sequelize.Op;
const {User} = require('../models/index');
const jwt = require('jsonwebtoken');

exports.authenticate = async function (req, res) {
    const {name, password} = req.body;
    
    if (!name || !password) {
        res.json({success: false, message: 'Usuário ou senha não informados. '});
    }

    User.findAll({
        where: {
            name: name,
            password: password
        }
    }).then((usuario) => {
        if (usuario.length === 0) {
            res.json({success: false, message: 'Usuário ou senha inválidos. ' + name});
        } else {
            var token = jwt.sign(usuario[0].toJSON(), 'segredoJwt', {
                expiresIn: '1 day'// expira em 1 dia
            });

            return res.json({
                success: true,
                message: 'Sucesso ao fazer o login!',
                token: token,
                name: name
            });
        }
    });
}

exports.register = async function (req, res) {
    const user = await User.create(req.body);

    res.json({user, message: 'Usuário cadastrado com sucesso'});
}

exports.getUserById = async function (req, res) {
    const {id} = req.params;
    const user = await User.findOne({
        where: {
            id: {
                [op.eq]: id
            }
        }
    });

    return res.status(200).send({
        userId: user.id,
        name: user.name,
        email: user.email
    });
}

exports.findAll = async function (req, res) {
    const users = await User.findAll();
    return res.json(users);
}