const { sequelize, DataTypes } = require('./../configs')

const Usuario = sequelize.define("usuario", {
    email: DataTypes.STRING(45),
    senha: DataTypes.STRING(45),
})

sequelize.sync();
module.exports = Usuario