const models = require('./../models')
const service = require('./../services')

module.exports = {
    criarUsuario: (usuario) => {
        return new Promise((resolve) => {
            models.Usuario.create({
                email: usuario.email,
                senha: service.encriptar(usuario.senha)
            }).then(resposta => {
                resolve({
                    status: "sucesso",
                    mensagem: service.gerarToken(resposta.id)
                })
            }).catch(erro => {
                console.log("Erro na criação do usuário => " + erro)
                resolve({
                    status: "erro",
                    mensagem: "Erro durante a criação do usuário"
                })
            })
        })
    },
    recuperarUsuarioEmail: (email) => {
        return new Promise((resolve) => {
            models.Usuario.findOne({
                where: {
                    email: email
                }
            }).then(resposta => {
                resolve({
                    status: "sucesso",
                    mensagem: resposta
                })
            }).catch(erro => {
                console.log("Erro na recuperação do usuário => " + erro)
                resolve({
                    status: "erro",
                    mensagem: "Erro durante a recuperação do usuário"
                })
            })
        })

    },
    login: (usuario) => {
        return new Promise((resolve) => {
            models.Usuario.findOne({
                where: {
                    email: usuario.email
                }
            }).then(resposta => {
                if (!resposta) {
                    resolve({
                        status: "warning",
                        mensagem: "Usuário não existe"
                    })
                } else if (service.descriptar(resposta.senha) == usuario.senha) {
                    resolve({
                        status: "sucesso",
                        mensagem: service.gerarToken(resposta.id)
                    })
                } else {
                    resolve({
                        status: "warning",
                        mensagem: "Senha incorreta"
                    })
                }
            }).catch(erro => {
                console.log("Erro durante o login => " + erro)
                resolve({
                    status: "erro",
                    mensagem: "Erro durante o login"
                })
            })
        })
    }
}