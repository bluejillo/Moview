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
        uri: `https://api.themoviedb.org/3/movie/${req.query.movieId}?api_key=${apiKey}&language=en-US&append_to_response=credits`
    }).pipe(res);
});

module.exports = router;