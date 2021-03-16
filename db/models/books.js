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
        },
        author: {
            type: Sequelize.STRING(200),
            allowNull: false,
        },
        genre: {
            type: Sequelize.STRING(200),
            allowNull: false,
        },
        language: {
            type: Sequelize.STRING(100),
            allowNull: false,
        }
    }, {sequelize});

    return Book;
};