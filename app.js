const express = require('express');
const Sequelize = require('sequelize');
const application = express();

application.get('/', (req, res) => {
    res.send('<em>This is one funky test.</em>');
});

application.listen(3000, () => {
    console.log('We are tuning into Localhost 3000, the hottest station in town!');
});