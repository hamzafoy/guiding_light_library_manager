const Sequelize = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'library.db',
    logging: false,
});

const database = {
    sequelize,
    Sequelize,
    models: {},
};

database.models.Book = require('./models/books')(sequelize);

module.exports = database;