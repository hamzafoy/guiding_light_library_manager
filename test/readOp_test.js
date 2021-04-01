let chai = require('chai');
let chaiHTTP = require('chai-http');
let chaiPromised = require('chai-as-promised');
let application = require('../app');
let expect = require('chai').expect;
const { assert } = require('chai');
const db = require('../db');
const { Book } = db.models;
let router = require('../routes');
chai.use(chaiHTTP);
chai.use(chaiPromised);
chai.should();

// Unit Test Suite
describe('Unit Tests for Endpoints to meet Code Louisville Project Requirements', () => {
    //Test Spec for READ ALL operation
    before(function(done) {
        this.timeout(6000);
        setTimeout(done, 5000); //wait for database to initialize
      });

      /* it('should pull data from all rows in the database', async() => {
        let books = await Book.findAll();
        expect(books).to.be.an('array')
        expect(books.length).to.equal(6)
        console.log(books[0].dataValues);
        expect(books[0].dataValues).to.have.property('genre');

    }); */ 

    /* it('should pull data from all rows in the database', (done) => {
        chai.request(application)
            .get('/')
            .end((err, res) => {
                expect(res.text).to.include('Towards Sacred Activism')
                expect(res.text).to.include('Being Muslim: A Practical Guide')
                expect(res.text).to.include('Ser Musulmana: Una Guia Practica')
                done();
            })
    }); */

    it('should pull data from all rows in the database', (done) => {
        chai.request(application)
            .get('/')
            .end(async(err, res) => {
                let bookList = await Book.findAll();
                expect(bookList).to.be.an('array')
                bookList.forEach((book) => {
                    expect(book).to.be.an('object')
                    let entry = book.dataValues;
                    console.log(res.text)
                    expect(res.text).to.include(entry.title);
                    expect(entry).to.include.all.keys('id', 'title', 'author')
                })
                done();
            })
    });
    
    //Test Spec for READ-by-id operation
    it('should pull data from the below id', (done) => {
        const id = 2;
        chai.request(application)
            .get(`/${id}`)
            .end((err, res) => {
                res.body.should.be.a('object');
                done();
            })
    });
    it('should return status 404 when READING the below id which is not in the database', (done) => {
        const id = 12;
        chai.request(application)
            .get(`/${id}`)
            .end((err, res) => {
                res.should.have.status(404);
                done();
            })
    });
    //Test Spec for CREATE operation
    it('shouldnt POST the below book entry since the title value is an empty string.', async() => {
        let res = await chai
        .request(application)
        .post('/')
        .type('form')
        .send({title: '', author: "al-Gibber", genre: "Math", language: "Arabic"})

        expect(res.status).to.equal(500)
    });
    it('should POST the below book entry since all properties contain actual string values.', async() => {
        let res = await chai
        .request(application)
        .post('/')
        .type('form')
        .send({title: 'Gibberish', author: "al-Gibber", genre: "Math", language: "Arabic"})

        expect(res.status).to.equal(200)
    });
});