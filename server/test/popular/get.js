const expect = require('chai').expect;
const request = require('supertest');

const app = require('../../app.js');

describe('GET /', () => {

	it('GET, getting popular movies', (done) => {
		request(app).get('/')
			.then((res) => {
				const body = res.body;
				expect(body).to.contain.property('results');
				done();
			})
			.catch((err) => done(err));
	});

});

