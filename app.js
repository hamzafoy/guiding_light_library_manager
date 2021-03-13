const express = require('express');
const Sequelize = require('sequelize');
const application = express();
const mainRoutes = require('./routes');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'library.db',
    logging: false,
});

application.use(mainRoutes);

application.listen(3000, () => {
    console.log('We are tuning into Localhost 3000, the hottest station in town!');
});

(async () => {

    try {
        await sequelize.authenticate();
        console.log('Airlock to Database is secure. . .100%');
    } catch (error) {
        console.error('Unfortunately, the airlock is not air tight and our connection to the database has failed', error);
    }

})();