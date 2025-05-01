// Key we'll use to store favorites in localStorage
const FAVORITES_KEY = "favoriteMovies";

// Get all favorite movies from localStorage
export const getFavorites = () =>
  JSON.parse(localStorage.getItem(FAVORITES_KEY)) || []; // if nothing is there, return empty array

// Add a new movie to favorites
export const addFavorite = (movie) => {
  const updated = [...getFavorites(), movie]; // get current list, add new movie
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(updated)); // save updated list back
};

// Remove a movie from favorites using its imdbID
export const removeFavorite = (id) => {
  const updated = getFavorites().filter((movie) => movie.imdbID !== id); // remove the matching movie
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(updated)); // save new list
};

// Check if a movie is already in favorites
export const isFavorite = (id) =>
  getFavorites().some((movie) => movie.imdbID === id); // returns true if movie is found
