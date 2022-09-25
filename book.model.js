const { Sequelize, DataTypes } = require('sequelize');

require('dotenv').config();

const sequelize = new Sequelize(process.env.DB_URL, {
    dialectOptions: {
        charset: 'utf8',
    },
    logging: true,
});

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch((error) => {
        console.error('Unable to connect to the database: ', error);
    });

const Book = sequelize.define('books', {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    author: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    release_date: {
        type: DataTypes.DATEONLY,
    },
    subject: {
        type: DataTypes.INTEGER,
    },
});

sequelize
    .sync()
    .then(() => {
        console.log('Book table created successfully!');
    })
    .catch((error) => {
        console.error('Unable to create table : ', error);
    });
