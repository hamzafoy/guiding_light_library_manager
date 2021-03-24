let chai = require('chai');
let chaiHTTP = require('chai-http');
let expect = require('chai').expect;
let assert = require('chai').assert;
let application = require('../app');

chai.use(chaiHTTP);
chai.should();

// Unit Test Suite
describe('Unit Tests for Endpoints to meet Code Louisville Project Requirements', () => {
    //Test Spec for READ ALL operation
    it('should pull data from all rows in the database', (done) => {
        chai.request(application)
            .get('/')
            .end((err, res) => {
                res.body.should.be.a('object');
                done();
            })
    });
    //Test Spec for specified READ operation
    it('should pull data from specific id in the database', (done) => {
        chai.request(application)
            .get('/:id')
            .end((err, res) => {
                res.body.should.be.a('object');
                done();
            })
    });
});