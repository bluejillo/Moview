const express = require('express');
const router = express.Router();
const request = require('request');

router.get('/movies/popular', (req, res) => {
	request({
		uri: `https://api.themoviedb.org/3/search/movie?api_key=40136dd0a6975f8de286946ddf253c9d&language=en-US&page=1`
	}).pipe(res);
});

module.exports = router;