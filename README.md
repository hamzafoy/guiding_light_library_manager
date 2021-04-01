
## Table of Contents
1. [Installation Instructions](#id-section1)
2. [Capstone Requirements](#id-section2)
3. [General Information about the App](#id-section3)
4. [Miscellaneous](#id-section4)

<hr>

<div id='id-section1'/>

### Installation Instructions

*The following are instructions, in accordance with the Code Louisville's Fullstack JavaScript Capstone Project requirements, on how to install this application.*

* Go to the **Code** menu in the repository, find the green button labelled **Code** and either clone the repository or download the files as a *zipped* folder.
* Open the cloned or downloaded repository with Visual Studio Code or whichever code editor you use.
* Run `npm install` in your terminal to install all required dependencies.
* Run `npm start` in your terminal to run the app. Bear in mind that the app will be running on `http://localhost:3000/`.
	* If you want to take a peak at the records in the database, install [**SQLite DB Browser**](https://sqlitebrowser.org/).
* Run `npm test` in your terminal to run and see the results of the unit tests.

<hr>

<div id='id-section2'/>

### Capstone Requirements

*The following is a detailed section indicating where project requirements are met in the repository & application.*


| Requirement     | Reference to Location | HTTP Method |
| ----------- | ----------- | ---------- |
|1st Route - READ *all*|Lines 25-32 in<br>`routes/index.js` | GET |
|2nd Route - CREATE *single record*| Lines 36-54 in<br>`routes/index.js`| POST |
|3rd Route - READ *specific record by id*| Lines 58-67 in<br>`routes/index.js`| GET |
|Unit Test for GET `/` endpoint|Lines 42-57 in<br>`test/readOp_test.js`||
|Unit Test for GET `/:id` endpoint|Lines 59-77 in<br>`test/readOp_test.js`||
|Unit Test for POST `/` endpoint|Lines 78-97 in<br>`test/readOp_test.js`||
|Repository has more than **5 commits**|||
|Full `README.md` file uploaded in the repo|||

<hr>

<div id='id-section3'/>

### General Information about the Application

![Work in Progress](/public/img/wip.svg)

*This application is intended for the use of Guiding Light Islamic Center, a local mosque and community center in Louisville, Kentucky.  The intended use is as a tool to help maintain & manage the large library of books kept at the center's library. This is also a capstone project for the Code Louisville Fullstack JavaScript course in early 2021.*

This application's backend is programmed with the **Express.js** framework whose routes use the **Sequelize** *ORM* to communicate with a **SQLite3** database. **Pug** is the HTML template engine of choice to create the front-end that users can communicate with to *READ* a list of book records, *READ* a specific book's data based on `id`, & *CREATE* a book record to add to what will be a vast list of books kept at Guiding Light Islamic Center.

> **Room for Improvement**
> * Will need to move the database's seed data out of `app.js`.
> * Create **UPDATE** & **DELETE** routes.
> * Explore the possibility for *pagination* of the book-records for front-end viewing.
> * Explore hosting options.
> * Explore user authorization/authentication.

<hr>

<div id='id-section4'/>

### Miscellaneous

You will find a number of terms potentially confusing such as *fiqh*. These terms are vernacular to Muslims and mostly originated from the Arabic language, *fiqh* for example is translated in English as *jurisprudence* and these terms are usually kinds of genre that Islamic literature fall under.