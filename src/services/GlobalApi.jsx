import axios from "axios";

const movieDBUrl="https://api.themoviedb.org/3";
const api_key = "b34186573421baaa297b271caf096018";

// https://api.themoviedb.org/3/trending/all/day?api_key=879f035d4754531dac404ebea30b5a40

const getTrendingVideos= axios.get(movieDBUrl+"/trending/all/day?api_key="+api_key)
const getMovieByGenreBaseUrl='https://api.themoviedb.org/3/discover/movie?api_key=b34186573421baaa297b271caf096018';

const getMovieByGenreId=(id)=> 
    axios.get(getMovieByGenreBaseUrl+"&with_genres="+id)

export default{
    getTrendingVideos,
    getMovieByGenreId
}