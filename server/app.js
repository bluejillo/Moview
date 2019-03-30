const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const moviesRoute = require('./routes/movies');
const moviesSearchRoute = require('./routes/searchMovies');

const app = express();

// --- Middleware ---

app.use(cors());
app.use(bodyParser.json());


// --- Routes ---

app.use(moviesRoute);
app.use(moviesSearchRoute);

// --- Server ---
const PORT = 3000;
app.listen(PORT, () => {
	console.log(`listening on ${PORT}`);
});