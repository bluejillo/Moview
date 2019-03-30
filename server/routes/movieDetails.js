const express = require('express');
const request = require('request');
const router = express.Router();
const apiKey = require('../assets/apikey');

router.get('/movie', (req, res) => {
    let pageCount = 1;
    if(!req.query.movieId){
        return res.status(400).send('Missing movieId parameter');
    }
    if(req.query.page){
        pageCount = req.query.page;
    }
    request({
        uri: `https://api.themoviedb.org/3/movie/${req.query.movieId}?api_key=${apiKey}d&language=en-US&page=${pageCount}`
    }).pipe(res);
});

module.exports = router;