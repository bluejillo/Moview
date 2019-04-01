# Moview

View and search movies in the MovieDB.<br>
Add your movie API key to a file called apikey.js in the Moview/server/assets directory.

## Starting API Server

The Moview APIs were created using Node.js and Express.<br>
Be sure that you have the latest Node.js and NPM installed on your machine.<br>
Open a terminal in the server (Moview/server) root directory and install the application using: ```npm install``` (if you have not already done so).<br>
To start the server, run (must be in the server root directory): ```node app.js```<br>
If you have nodemon installed, run: ```nodemon app.js```

## API Routes

Moview is configured to run locally on port 4000.<br>
Popular movies: ```localhost:4000/?page=<page number>``` (page query is optional)<br>
Movie details: ```localhost:4000/movie?movieId=<movie id>``` (movieId is required)<br>
Genre list: ```localhost:4000/genre```<br>
Movies by genre: ```localhost:4000/bygenre?genreId=<genre id>&page=<page number>``` (genreId is required, page is optional)<br>

## Unit Testing API Routes

Moview uses Mocha, Chai and Supertest for unit testing.<br>
Open a terminal in the server root directory (Moview/server) and run: ```npm run test```

## Starting the UI

The Moview UI was created using React.<br>
Open a terminal in the ui (Moview/ui) root directory and install the application using ```npm install``` (if you have not already done so).<br>
To start the UI, run: ```npm start```

