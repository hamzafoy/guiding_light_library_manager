const express = require('express');
const Sequelize = require('sequelize');
const application = express();
const mainRoutes = require('./routes');

application.use(mainRoutes);

application.listen(3000, () => {
    console.log('We are tuning into Localhost 3000, the hottest station in town!');
});