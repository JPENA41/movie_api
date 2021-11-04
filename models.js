// Import mongoose
const mongoose = require('mongoose');

// Import bcrypt module from terminal
const bcrypt = require('bcrypt');

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

// Compare submitted hashed passwords with the hashed passwords stored
userSchema.statics.hashPassword = (password) => {
  return bcrypt.hashSync(password, 10);
};

userSchema.methods.validatePassword = function(password) {
  return bcrypt.compareSync(password, this.Password);
};

// Created collections
let Movie = mongoose.model('Movie', movieSchema);
let User = mongoose.model('User', userSchema);

// Export modules onto “index.js” file
module.exports.Movie = Movie;
module.exports.User = User;
