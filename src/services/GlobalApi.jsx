import axios from "axios";

const movieDBUrl = "https://api.themoviedb.org/3";
const api_key = "b34186573421baaa297b271caf096018";

export const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

// Get trending content (movies, TV shows, etc.)
const getTrendingVideos = axios.get(
  `${movieDBUrl}/trending/all/day?api_key=${api_key}`
);

// Get movies by genre
const getMovieByGenreBaseUrl =
  "https://api.themoviedb.org/3/discover/movie?api_key=" + api_key;

const getMovieByGenreId = (id) =>
  axios.get(getMovieByGenreBaseUrl + "&with_genres=" + id);

// Search for both movies and TV shows (multi-search)
const searchMulti = (query) =>
  axios
    .get(`${movieDBUrl}/search/multi?api_key=${api_key}&query=${query}`)
    .then((response) => {
      // Filter results to include only those with posters
      const filteredResults = response.data.results.filter((item) => {
        return item.poster_path; // Keep only results with a poster
      });
      return { ...response, data: { results: filteredResults } };
    });

// Get similar movies
const getSimilarMovies = (movieId) =>
  axios.get(`${movieDBUrl}/movie/${movieId}/similar?api_key=${api_key}`);

// Get similar TV shows
const getSimilarTvShows = (tvId) =>
  axios.get(`${movieDBUrl}/tv/${tvId}/similar?api_key=${api_key}`);

export default {
  getTrendingVideos,
  getMovieByGenreId,
  searchMulti, // Updated function for multi-search (movies & TV)
  getSimilarMovies,
  getSimilarTvShows, // New function for similar TV shows
  IMAGE_BASE_URL,
};
