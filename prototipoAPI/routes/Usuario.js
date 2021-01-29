const { express, bodyParser } = require('../configs')
const { Usuario } = require('./../controllers')

express.use(bodyParser.urlencoded({ extended: true })).use(bodyParser.json())

module.exports = {
    criar: () => {
        express.post('/criar/usuario', (req, res) => {
            Usuario.recuperarUsuarioEmail(req.body.usuario.email).then(usuario => {
                if (usuario.mensagem == null) {
                    Usuario.criarUsuario(req.body.usuario).then(usuario => {
                        res.json(usuario)
                    }).catch(erro => {
                        res.json({
                            status: "erro",
                            mensagem: "Erro na rota de criar usuário"
                        })
                    })
                } else {
                    res.json({
                        status: "warning",
                        mensagem: "Usuário ja existe"
                    })
                }
            }).catch(erro => {
                res.json({
                    status: "erro",
                    mensagem: "Erro na rota de criar usuário"
                })
            })
        })
    },
    login: () => {
        express.post('/login', (req, res) => {
            Usuario.login(req.body.usuario).then(usuario => {
                res.json(usuario)
            }).catch(erro => {
                res.json({
                    status: "erro",
                    mensagem: "Erro no processo de login"
                })
            })
        })
    }
}