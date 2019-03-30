const express = require('express');
const router = express.Router();
const request = require('request');

router.get('/movies/search', (req, res) => {
	if(!req.query.search){
		return res.status(400).send('Missing search parameter');
	}
	let searchString = req.query.search.split(" ");
	searchString.join("%20");
	request({
		uri: `https://api.themoviedb.org/3/search/movie?api_key=40136dd0a6975f8de286946ddf253c9d&language=en-US&query=${searchString}&page=1&include_adult=false`
	}).pipe(res);
});

module.exports = router;