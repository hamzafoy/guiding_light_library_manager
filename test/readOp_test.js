let chai = require('chai');
let chaiHTTP = require('chai-http');
let application = require('../app');
let expect = require('chai').expect;
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