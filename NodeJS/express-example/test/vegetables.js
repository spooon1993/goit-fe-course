const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;
chai.use(chaiHttp);

const removeOdd = require('../removeOdd');
const removeNoll = require('../removeNoll');
const name = 'Abushit';

describe('---> text for testing', () => {
    it('Length of name more than 5', () => {
        expect(name).to.have
            .property('length').gt(5);
    });

    it('Should be without odd numbers', () => {
        const start = [1,2,3,4,5,6,7];
        const end = [1,3,5,7];
        const removed = removeOdd(start);
        expect(removed).to.deep.equal(end);
    });

    it('Should be without 0 number', () => {
        const start = [1,2,0,3,0,4,0,5];
        const end = [0,0,0];
        const removed = removeNoll(start);
        expect(removed).to.deep.equal(end);
    });
    it('GET ---> /vegetables/', () => {
        chai.request('http://localhost:9999')
            .get('/vegetables/').send()
            .then((response) => {
                expect(response.body.status).to.equal(200)
            })
    });
    it('POST ---> /vegetables/', (done) => {
        chai.request('http://localhost:9999')
            .post('/vegetables/')
            .send()
            .then((response) => {
                expect(response.body.status).to.equal(201);
                done()
            })
            .catch((e) => {
                done(e)
            })
    });
    it('GET ---> /users/', (done) => {
        chai.request('http://localhost:9999')
            .get('/users/5acdf72dc388113ab4e3b42c').send()
            .then((response) => {
                expect(response.body).to.have.status(200);
                expect(response.body.data).to.have.property('_id').with.equal('5acdf72dc388113ab4e3b42c');
                done()
            })
            .catch((e) => {
                done(e)
            })
    });

});
