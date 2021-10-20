// Import express into my packages
const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');

app.use(express.static('public'));
app.use(morgan('common'));

// Return a JSON object containing data about my top 10 movies
let topTenMovies = [
    {
        title: 'Jaws 2',
        genre: ['Horror', 'Adventure', 'Thriller'],
        director: 'Jeannot Szwarc'
    },
    {
        title: 'Toy Story',
        genre: ['Family', 'Comedy'],
        director: 'John Lasseter'
    },
    {
        title: 'Tarzan (1999)',
        genre: ['Animation', 'Adventure', 'Comedy'],
        director: 'Chris Buck'
    },
    {
        title: 'The Hunger Games',
        genre: ['Adventure Fiction', 'Thriller', 'Sci-fi'],
        director: 'Gary Ross'
    },
    {
        title: 'Coraline',
        genre: ['Horror', 'Fantasy', 'Adventure'],
        director: 'Henry Selick'
    },
    {
        title: 'Spider-Man 2',
        genre: ['Action', 'Adventure', 'Sci-fi'],
        director: 'Sam Raimi'
    },
    {
        title: 'The Shining',
        genre: ['Horror', 'Mystery'],
        director: 'Stanley Kubrick'
    },
    {
        title: 'McFarland, USA',
        genre: ['Sports', 'Drama'],
        director: 'Niki Caro'
    },
    {
        title: 'The Incredibles',
        genre: ['Animation', 'Action', 'Adventure'],
        director: 'Brad Bird'
    },
    {
        title: 'Instructions Not Included',
        genre: ['Comedy', 'Drama'],
        director: 'Eugenio Derbez'
    }
];

app.get('/', (req, res) => {
    res.send('Welcome to myFlix App!');
});

app.get('/documentation', (req, res) => {
	res.sendFile('public/documentation.html', { root: __dirname });
});

// Get the list of all movies
app.get('/movies', (req, res) => {
    res.json(topTenMovies);
});

// Get data of a director's name
app.get('/directors/:name', (req, res) => {
    res.send('Welcome to the directors information.');
});

// Error handling
app.use((err, req, res,next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
  });
app.listen(8080, () => {
    console.log('Your app is listening on port 8080.');
});
