const express = require('express');
const Sequelize = require('sequelize');
const application = express();
const mainRoutes = require('./routes');
const db = require('./db');
const { Book } = db.models;


application.use(mainRoutes);

application.listen(3000, () => {
    console.log('We are tuning into Localhost 3000, the hottest station in town!');
});

(async () => {
    await db.sequelize.sync({ force: true });

    try {
        await db.sequelize.authenticate();
        console.log('Airlock to Database is secure. . .100%');
        
    } catch (error) {
        console.error('Unfortunately, the airlock is not air tight and our connection to the database has failed', error);
    }

})();