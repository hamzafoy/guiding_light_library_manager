// Requiring Express to enable access to the framework's methods, properties, & other tools.
const express = require('express');
// Requiring Sequelize to enable access to the ORM's methods, properties, & other tools.
const Sequelize = require('sequelize');
// `application` is the variable that can be manipulated using Express.js' methods & properties.
const application = express();
// In order to make the app more modular, routes are contained in an appropriately titled folder.
const mainRoutes = require('./routes');
// The next two variables are related to the database & its models. This app is using SQLite3.
const db = require('./db');
const { Book } = db.models;

//This is a method giving `app.js` to the routes written in the `routes` directory.
application.use(mainRoutes);

//This method is using Port 3000 to listen to various HTTP requests.
application.listen(3000, () => {
    console.log('We are tuning into Localhost 3000, the hottest station in town!');
});

//Express.js relies on asynchronous JavaScript.
(async () => {
    //This ensures that all those models contained in the `db` directory are synced to the database
    await db.sequelize.sync({ force: true });

    try {
        //This tests that the app is connecting to the SQLite3 database.
        await db.sequelize.authenticate();
        console.log('Airlock to Database is secure. . .100%');
        //This is creating and storing a book entry into the database.
        await Book.create({
            title: 'Towards Sacred Activism',
            author: 'Imam Dawud Walid',
            genre: 'Political Essay',
        });
    } catch (error) {
        console.error('Unfortunately, the airlock is not air tight and our connection to the database has failed', error);
    }

})();