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



//This route handles the initial load of the app, the root route, & will draw data from each row in the database & display it on the homepage.
//This route is a READ operation distinctly a READ ALL operation.
router.get('/', asyncHandler(async (req, res) => {
    const bookList = await Book.findAll();
    //The use of .render() method ensures that the `index.pug` template is rendered when user visits the root directory.
    //{ bookList } is an object containing data from each row in the database to be used in the Pug template.
    res.render('index', {bookList});
}));



//This route handles adding a book to the app's database by rendering the newBook.pug template which contains a form to collect the column data for the database.
//This route is the beginning of the CREATE operation for this app.
router.get('/new', (req, res) => {
    res.render('newBook', { book: {}});
});

//This route handles the data collected by newBook.pug's form. It creates the database entry and posts the data.
//This route is the closure for the CREATE operation for this app.
router.post('/', asyncHandler(async (req, res) => {
    console.log(req.body);
    let book;
    try {
        book = await Book.create(req.body);
        res.redirect('/');
    } catch (error) {
        throw error;
    }
}));



//This route handles rendering found data for each book that would be clicked on in the index.pug template.
//This route is another distinct READ operation that is reading an entry's data based on the primary key ID selected on index.pug.
router.get("/:id", asyncHandler(async (req, res) => {
    const book = await Book.findByPk(req.params.id);
    if(book) {
      res.render("bookViewing", { book });  
    } else {
      res.sendStatus(404);
    }
  })); 



//Ensures that all routes written in this folder can be used in the root's `app.js` file.
module.exports = router;