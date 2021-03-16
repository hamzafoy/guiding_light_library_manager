// Requiring Express to enable access to the framework's methods, properties, & other tools.
const express = require('express');
// Router handles HTTP requests.
const router = express.Router();

router.get('/', (req, res) => {
    //The use of .render() method ensures that the `index.pug` template is rendered when user visits the root directory.
    res.render('index');
});

router.get('/library', (req, res) => {
    res.send('<strong>Testing a separate route.</strong>');
});

//Ensures that all routes written in this folder can be used in the root's `app.js` file.
module.exports = router;