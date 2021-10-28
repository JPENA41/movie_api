// Import mongoose
const mongoose = require('mongoose');

// Define the “schema" for documents in the “Movies” collection
let movieSchema = mongoose.Schema({
  Title: {type: String, required: true},
  Description: {type: String, required: true},
  Genre: {
    Name: String,
    Description: String,
  },
  Director: {
    Name: String,
    Bio: String,
  },
  Actors: [String],
  ImagePath: String,
  Featured: Boolean
});

// Define the “schema" for documents in the "Users" collection
let userSchema = mongoose.Schema({
  Username: {type: String, required: true},
  Password: {type: String, required: true},
  Email: {type: String, required: true},
  Birthday: Date,
  FavoriteMovies: [{ type: mongoose.Schema.Types.ObjectID, ref: 'Movie' }]
});

//  Define the “schema" for documents in the "Genre" collection
let genreSchema = mongoose.Schema({
    Name: {type: String, required: true},
    Description: {type: String, required: true}
})

//  Define the “schema" for documents in the "Director" collection
let directorSchema = mongoose.Schema({
    Name: {type: String, required: true},
    Bio: {type: String, required: true},
    Birth: {type: Date, required: true},
    Death: {type: String}
});

// Created collections
let Movie = mongoose.model('Movie', movieSchema);
let User = mongoose.model('User', userSchema);
let Genre = mongoose.model('Genre', genreSchema);
let Director = mongoose.model('Director', directorSchema);

// Export modules onto “index.js” file
module.exports.Movie = Movie;
module.exports.User = User;
module.exports.Genre = Genre;
module.exports.Director = Director;
