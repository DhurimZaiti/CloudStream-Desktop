// globalApi.jsx
import axios from "axios";

// Get trending content (movies, TV shows, etc.)
const getTrendingVideos = (movieDBUrl, api_key) =>
  axios.get(`${movieDBUrl}/trending/all/day?api_key=${api_key}`);

// Get movies by genre
const getMovieByGenreId = (movieDBUrl, api_key, genreId) => {
  return axios.get(`${movieDBUrl}/discover/movie?api_key=${api_key}&with_genres=${genreId}`);
};

// Search for both movies and TV shows (multi-search)
const searchMulti = (movieDBUrl, api_key, query) =>
  axios
    .get(`${movieDBUrl}/search/multi?api_key=${api_key}&query=${query}`)
    .then((response) => {
      const filteredResults = response.data.results.filter((item) => item.poster_path);
      return { ...response, data: { results: filteredResults } };
    });


// Get similar movies
const getSimilarMovies = (movieId, movieDBUrl, api_key) =>
  axios.get(`${movieDBUrl}/movie/${movieId}/similar?api_key=${api_key}`);

// Get similar TV shows
const getSimilarTvShows = (tvId, movieDBUrl, api_key) =>
  axios.get(`${movieDBUrl}/tv/${tvId}/similar?api_key=${api_key}`);

export default {
  getTrendingVideos,
  getMovieByGenreId,
  searchMulti,
  getSimilarMovies,
  getSimilarTvShows,
};
