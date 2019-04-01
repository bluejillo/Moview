const expect = require('chai').expect;
const request = require('supertest');

const app = require('../../app.js');

describe('GET /bygenre', () => {

	it('GET, getting by results', (done) => {
		request(app).get('/bygenre?genreId=35')
			.then((res) => {
				const body = res.body;
				expect(body).to.contain.property('results');
				done();
			})
			.catch((err) => done(err));
	});

});

