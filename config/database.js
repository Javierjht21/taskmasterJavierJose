const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('taskmaster', 'root', 'password', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelize;
