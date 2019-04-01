const expect = require('chai').expect;
const request = require('supertest');

const app = require('../../app.js');

describe('GET /movie', () => {

	it('GET, get movie details', (done) => {
		request(app).get('/movie?movieId=166428')
			.then((res) => {
				const body = res.body;
				expect(body).to.contain.property('id');
				done();
			})
			.catch((err) => done(err));
	});

});