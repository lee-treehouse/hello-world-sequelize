const { Sequelize, DataTypes } = require('sequelize');

require('dotenv').config();

const sequelize = new Sequelize(process.env.DB_URL, {
    dialectOptions: {
        charset: 'utf8',
    },
    logging: console.log,
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
        Book.destroy({
            where: {
                id: 2,
            },
        })
            .then(() => {
                console.log('Successfully deleted record.');
            })
            .catch((error) => {
                console.error('Failed to delete record : ', error);
            });
    })
    .catch((error) => {
        console.error('Unable to create table : ', error);
    });

export const findSpecificBook = () => {
    Book.findOne({
        where: {
            id: '1',
        },
    })
        .then((res) => {
            console.log(res);
        })
        .catch((error) => {
            console.error('Failed to retrieve data : ', error);
        });
};

export const findAllBooks = () => {
    Book.findAll()
        .then((res) => {
            console.log(res);
        })
        .catch((error) => {
            console.error('Failed to retrieve data : ', error);
        });
};

export const createBook = () => {
    Book.create({
        title: 'Clean Code',
        author: 'Robert Cecil Martin',
        release_date: '2021-12-14',
        subject: 3,
    })
        .then((res) => {
            console.log(res);
        })
        .catch((error) => {
            console.error('Failed to create a new record : ', error);
        });
};
