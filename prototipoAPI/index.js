const { express } = require('./configs')
const rotas = require('./routes')

express.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})

rotas.Usuario.criar()
rotas.Usuario.login()

express.listen(3001, () => console.log(`Conectado na porta ${ 3001 }`))