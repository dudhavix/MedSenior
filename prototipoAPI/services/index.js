const tratamentoSenha = require('./tratamentoSenha')
const token = require('./token')

module.exports = {
    encriptar: tratamentoSenha.encriptar,
    descriptar: tratamentoSenha.descriptar,
    gerarToken: token.gerarToken,
    validarToken: token.validarToken
}