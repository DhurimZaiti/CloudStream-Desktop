import React, { useState } from "react";
import GlobalApi from "../services/GlobalApi";
import { useConfig } from "../context/ConfigContext";

function Search() {
  const { movieDBUrl, api_key } = useConfig();
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [similarMovies, setSimilarMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingSimilar, setIsLoadingSimilar] = useState(false);

  const fetchSearchResults = async (query) => {
    setIsLoading(true);
    try {
      const response = await GlobalApi.searchMulti(movieDBUrl, api_key, query);
      const filteredResults = response.data.results.filter((item) => item.poster_path);
      setSearchResults(filteredResults);

      if (filteredResults.length > 0) {
        const contentId = filteredResults[0].id;
        const contentType = filteredResults[0].media_type;
        fetchSimilarContent(contentId, contentType);
      }
    } catch (error) {
      console.error("Error fetching search results:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchSimilarContent = async (contentId, contentType) => {
    setIsLoadingSimilar(true);
    try {
      let response;
      if (contentType === "movie") {
        response = await GlobalApi.getSimilarMovies(contentId, movieDBUrl, api_key);
      } else if (contentType === "tv") {
        response = await GlobalApi.getSimilarTvShows(contentId, movieDBUrl, api_key);
      }

      const filteredSimilarContent = response.data.results.filter((item) => item.poster_path);
      setSimilarMovies(filteredSimilarContent);
    } catch (error) {
      console.error("Error fetching similar content:", error);
    } finally {
      setIsLoadingSimilar(false);
    }
  };

  const handleSearch = (event) => {
    event.preventDefault();
    const value = event.target.search.value.trim();
    if (value) {
      fetchSearchResults(value);
    }
  };

  return (
    <div className="p-4">
      <form onSubmit={handleSearch}>
        <div className="flex items-center px-64 gap-4 mb-4">
          <input
            type="text"
            value={searchTerm}
            name="search"
            placeholder="Search for movies/tv series..."
            className="border border-gray-400 rounded-lg p-2 flex-1 bg-[#242424] text-white"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="px-3 py-2.5 bg-blue-700 rounded-lg text-lg hover:bg-blue-600" type="submit">
            Search
          </button>
        </div>
      </form>

      {isLoading && <div className="text-center">Loading search results...</div>}
      {!isLoading && searchResults.length === 3 && (
        <div className="text-center text-gray-400">No results found.</div>
      )}

      {searchResults.length > 4 && (
        <div className="px-16">
          <h1 className="text-4xl text-center font-bold my-8">Search Results:</h1>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {searchResults.map((item) => (
              <div key={item.id} className="text-center">
                <div className="group relative">
                  <img
                    src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
                    alt={item.title || item.name}
                    className="w-[200px] rounded-lg group-hover:scale-110 transition-all duration-150 ease-in group-hover:border-gray-600 group-hover:border-4 cursor-pointer"
                  />
                  <p className="text-lg text-center w-[200px] font-bold mt-2">
                    {item.title || item.name}
                  </p>
                  <p className="text-sm text-center w-[200px] text-gray-400">
                    {item.media_type === "movie" ? "Movie" : "TV Series"}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {isLoadingSimilar && <div className="text-center">Loading similar content...</div>}
      {similarMovies.length > 0 && (
        <div className="mt-8 px-16">
          <h1 className="text-4xl text-center font-bold my-8">Similar Content:</h1>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {similarMovies.map((item) => (
              <div key={item.id} className="text-center">
                <div className="group relative">
                  <img
                    src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
                    alt={item.title || item.name}
                    className="w-[200px] rounded-lg group-hover:scale-110 transition-all duration-150 ease-in group-hover:border-gray-600 group-hover:border-4 cursor-pointer"
                  />
                  <p className="text-lg font-bold w-[200px] text-center mt-2">
                    {item.title || item.name}
                  </p>
                  <p className="text-sm text-center w-[200px] text-gray-400">
                    {item.media_type === "movie" ? "Movie" : "TV Series"}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Search;
