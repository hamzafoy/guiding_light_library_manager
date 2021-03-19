// Requiring Express to enable access to the framework's methods, properties, & other tools.
const express = require('express');
// Router handles HTTP requests.
const router = express.Router();
// These two variables are ensuring `routes/index.js` has access to the database & its models.
const db = require('../db');
const { Book } = db.models;

function asyncHandler(cb){
    return async(req, res, next) => {
        try {
        await cb(req, res, next)
        } catch(error){
        // Forward error to the global error handler
        next(error);
        }
    }
}

router.get('/', asyncHandler(async (req, res) => {
    const bookList = await Book.findAll();
    console.log(JSON.stringify(bookList, null, 2));
    //The use of .render() method ensures that the `index.pug` template is rendered when user visits the root directory.
    res.render('index', {bookList});
}));

router.get('/library', (req, res) => {
    res.send('<strong>Testing a separate route.</strong>');
});

//Ensures that all routes written in this folder can be used in the root's `app.js` file.
module.exports = router;