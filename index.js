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

app.use(morgan('common'));

app.get('/', (req, res) => {
    res.send('Welcome to myFlix App!');
});

app.get('/documentation', (req, res) => {
	res.sendFile('public/documentation.html', { root: __dirname });
});

// Get a list of every movie
app.get('/movies', (req, res) => {
    res.json(topTenMovies);
});

// Get a particular movie by title.
app.get('/movies/:title', (req, res) => {
    res.send('Successful GET request retuning movie by title');
});

// Get data about a specific movie genre
app.get('/genres/:genre', (req, res) => {
    res.send('Successful GET request retuning movie by genre');
});

// Get data about a director by name
app.get('/directors/:directorsName', (req, res) => {
    res.send('Successful GET request of directors information.');
});

// Allow registation
app.post('/register', (req, res) => {
    res.send('Successful POST to the server a new user registeration.');
});

// Allow user to update their username
app.put('/users/:id/:infoToUpdate/:newValue', (req, res) => {
    res.send('Successful PUT to the server a user information.');
});

// Allow user to add a movie to the list of favorites
app.post('/users/:id/:favorites/:newFavorite', (req, res) => {
    res.send('Successful POST to the server a favorite movie on the user list.');
});

// Remove a favorite movie from the user's favorites
app.delete('/users/:id/favorites/:deleteFavorite', (req, res) => {
    res.send('Successful DELETE to the server a favorite movie on the user list.');
});

// Unregister a existing user from the database
app.delete('/users/:id/unregister', (req, res) => {
    res.send('Successful DELETE a user!');
});

// Error handling
app.use((err, req, res,next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
  });

// Listen for requests
app.listen(8080, () => {
    console.log('Your app is listening on port 8080.');
});
