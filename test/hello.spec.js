/* eslint-disable global-require */
require('should');
const supertest = require('supertest');

let server = null;


describe('Hello Endpoint', () => {
    before((done) => {
        server = require('../server');
        require('../endpoints/hello');
        return done();
    });

    describe('GET /hello', () => {
        it('Should respond with a greeting', (done) => {
            supertest(server)
                .get('/hello')
                .expect(200)
                .end((err, res) => {
                    if (err) return done(err);

                    res.body.should.equal('Hello World!');
                    return done();
                });
        });
    });
});
