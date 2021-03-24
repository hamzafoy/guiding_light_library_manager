// Requiring Sequelize to enable access to the ORM's methods, properties, & other tools.
const Sequelize = require('sequelize');

module.exports = (sequelize) => {
    class Book extends Sequelize.Model {}
    Book.init({
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        title: {
            type: Sequelize.STRING(1000),
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: 'You must provide a value for the title!',
                }
            }
        },
        author: {
            type: Sequelize.STRING(200),
            allowNull: false,
            notEmpty: true
        },
        genre: {
            type: Sequelize.STRING(200),
            allowNull: false,
            notEmpty: true
        },
        language: {
            type: Sequelize.STRING(100),
            allowNull: false,
            notEmpty: true
        }
    }, {sequelize});

    return Book;
};