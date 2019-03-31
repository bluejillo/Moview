const express = require('express');
const request = require('request');
const apiKey = require('../assets/apikey');

const router = express.Router();

router.get('/genre', (req, res) => {
    request({
        uri:`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US
        `
    }).pipe(res);
});

module.exports = router;

//poster https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg