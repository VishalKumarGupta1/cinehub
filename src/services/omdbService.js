const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = `https://www.omdbapi.com/?apikey=${API_KEY}`;

export const searchMovies = async (title) => {
  const res = await fetch(`${BASE_URL}&s=${title}`);
  return res.json();
};

export const getMovieDetails = async (id) => {
  const res = await fetch(`${BASE_URL}&i=${id}&plot=full`);
  return res.json();
};