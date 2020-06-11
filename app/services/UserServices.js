const { User } = require('../models/index');
const jwt = require('jsonwebtoken');

exports.authenticate = async function (req, res) {
    const { name, password } = req.body;
    
    if (!name || !password){
        res.json({ success: false, message: 'Usuário ou senha não informados. '});
    }

    User.findAll({
        where: {
            name: name,
            password: password
        }
    }).then((usuario) => {
        if (usuario.length === 0){
            res.json({ success: false, message: 'Usuário ou senha inválidos. ' + name });
        } else {
            var token = jwt.sign(usuario[0].toJSON(), 'segredoJwt', {
                expiresIn: '1 day'// expira em 1 dia
            });

            return res.json({
                success: true,
                message: 'Sucesso ao fazer o login!',
                token: token,
                userId: usuario.id,
                name: usuario.name,
                nome: usuario.nome
            });
        }
    });
}

exports.register = async function (req, res) {
    const user = await User.create(req.body);
    
    res.json({user, message: 'Usuário cadastrado com sucesso'});
}