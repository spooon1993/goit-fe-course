const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;
chai.use(chaiHttp);

describe('--> POST --> /sportsman/', () => {
    it('Server is responsed!', (done) => {
        chai.request('http://localhost:9999')
            .post('/sportsman/')
            .send()
            .then((response) => {
                expect(response.statusCode).to.not.equal(404);
                done()
            })
            .catch((e) => {
                done(e)
            })
    });
    it('Should create new user', (done) => {
        chai.request('http://localhost:9999')
            .post('/sportsman/')
            .send({
                name: 'name1'
            })
            .then((response) => {
                expect(response.body.status).to.equal(200);
                expect(response.body.data).to.have.property('_id');
                done();
            })
            .catch((e) => {
                done(e);
            })
    });
    it('Should return status 400', (done) => {
        chai.request('http://localhost:9999')
            .post('/sportsman/')
            .send()
            .then((response) => {
                expect(response.body.status).to.equal(400);
                done();
            })
            .catch((e) => {
                done(e);
            })
    });
});

describe('--> GET --> /sportsman/', () => {
    it('Server is responsed!', (done) => {
        chai.request('http://localhost:9999')
            .get('/sportsman/')
            .send()
            .then((response) => {
                expect(response.statusCode).to.not.equal(404);
                done()
            })
            .catch((e) => {
                done(e)
            })
    });
    it('Should get all users', (done) => {
        chai.request('http://localhost:9999')
            .get('/sportsman/')
            .send()
            .then((response) => {
                expect(response.body.status).to.equal(200);
                expect(response.body.data).to.have.property('length').gt(0);
                done();
            })
            .catch((e) => {
                done(e);
            })
    });
    it('Should get all users for find current', (done) => {
        chai.request('http://localhost:9999')
            .get('/sportsman/')
            .send()
            .then((response) => {
                let id = response.body.data[0]._id;
                console.log(id);

                // expect(response.body.status).to.equal(400);
                done();
            })
            .catch((e) => {
                done(e);
            })
    });
});