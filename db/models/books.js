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
        genre: {
            type: Sequelize.STRING(200),
            allowNull: false,
        },
    }, {sequelize});

    return Book;
};