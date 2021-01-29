const jwt = require('jsonwebtoken');

module.exports = {
    gerarToken: (usuario) => {
        const token = jwt.sign({ usuario }, "segredo do prototipo", {
            expiresIn: 1200 //10 min
        })
        return token
    },
}