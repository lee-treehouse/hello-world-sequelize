const { Sequelize } = require('sequelize')
const sequelize = require('sequelize')
const sequelize = new Sequelize('hello_world_db', 'lee', 'leePass', {
    host: 'http://localhost',
    dialect: 'mysql',
})
