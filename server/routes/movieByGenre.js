const express = require('express');
const request = require('request');
const router = express.Router();
const apiKey = require('../assets/apikey');

router.get('/bygenre', (req, res) => {
    let pageCount = 1;
    if(!req.query.genreId){
        return res.status(400).send('Missing genreId parameter');
    }
    if(req.query.page){
        pageCount = req.query.page;
    }
    request({
        uri: `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${pageCount}&with_genres=${req.query.genreId}`
    }).pipe(res);
});
module.exports = router;