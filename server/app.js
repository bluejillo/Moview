const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const moviesRoute = require('./routes/movies');
const moviesSearchRoute = require('./routes/searchMovies');
const movieDetailsRoute = require('./routes/movieDetails');
const movieGenreRoute = require('./routes/movieGenre');

const app = express();

// --- Middleware ---

app.use(cors());
app.use(bodyParser.json());


// --- Routes ---

app.use(moviesRoute);
app.use(moviesSearchRoute);
app.use(movieDetailsRoute);
app.use(movieGenreRoute);

// --- Server ---
const PORT = 4000;
module.exports = app.listen(PORT, () => {
	console.log(`listening on ${PORT}`);
});