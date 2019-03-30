const express = require('express');
const router = express.Router();
const request = require('request');
const apiKey = require('../assets/apikey');

router.get('/', (req, res) => {
	let pageCount = 1;
	if(req.query.page){
		pageCount = req.query.page;
	}
	request({
		uri: `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=${pageCount}`
	}).pipe(res);
});

module.exports = router;