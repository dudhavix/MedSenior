require('cors');
const express = require('express')
const bodyParser = require('body-parser');

//Configuração Bando de Dados
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize({
    host: 'localhost',
    username: "root",
    password: "caxixe07",
    database: "medsenior",
    dialect: 'mysql',
    storage: 'path/to/database.mysql',
});

try {
    sequelize.authenticate();
    console.log('Conexão estabelecida');
} catch (error) {
    console.error('Erro ao conectar ao banco de dados:', error);
}


module.exports = {
    express: express(),
    sequelize: sequelize,
    DataTypes: DataTypes,
    bodyParser: bodyParser
}