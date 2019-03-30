const express = require('express');
const router = express.Router();
const request = require('request');
const apiKey = require('../assets/apikey');
// const urlify = require('../js/urlify');

router.get('/movies/search', (req, res) => {
	let pageCount = 1
	if(!req.query.search){
		return res.status(400).send('Missing search parameter');
	}
	if(req.query.page){
		pageCount = req.query.page;
	}
	const searchString = req.query.search;
	request({
		uri: `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${searchString}&page=${pageCount}&include_adult=false`
	}).pipe(res);
});

module.exports = router;