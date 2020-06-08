const UserService = require('../services/UserServices'); 
const { User } = require('../models/index');
const jwt = require('jsonwebtoken');

exports.register = async function (req, res) {
    try {
        var users = await UserService.register(req, res);
        return res.status(200).json({ status: 200, data: users, message: "Success" });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}

exports.authenticate = function(req, res){
    const { name, password } = req.body;
    // console.log(req.body);
    if (!name || !password){
        res.json({ success: false, message: 'Usuário ou senha não informados. '});
    }
    User.findAll({
        where: {
            name: name,
            password: password
        }}).then((usuario) => {
            // console.log('Usuário authenticate', usuario);
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
};