import React, { useState, useEffect } from 'react';
import GlobalApi from '../services/GlobalApi';

function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [similarMovies, setSimilarMovies] = useState([]);

  useEffect(() => {
    if (searchTerm) {
      fetchSearchResults(searchTerm);
    }
  }, [searchTerm]);

  const fetchSearchResults = async (query) => {
    try {
      // Use searchMulti API to search for both movies and TV shows
      const response = await GlobalApi.searchMulti(query);

      // Filter out results that do not have a poster
      const filteredResults = response.data.results.filter((item) => {
        return item.poster_path; // Keep only results with a poster
      });

      setSearchResults(filteredResults);

      // Fetch similar content if there are results (taking the first one as an example)
      if (filteredResults.length > 0) {
        const contentId = filteredResults[0].id;
        const contentType = filteredResults[0].media_type;
        fetchSimilarContent(contentId, contentType);
      }
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  const fetchSimilarContent = async (contentId, contentType) => {
    try {
      // Check if the content is a movie or a TV show, then call the appropriate similar content API
      let response;
      if (contentType === 'movie') {
        response = await GlobalApi.getSimilarMovies(contentId);
      } else if (contentType === 'tv') {
        response = await GlobalApi.getSimilarTvShows(contentId);
      }

      // Filter out content without a poster
      const filteredSimilarContent = response.data.results.filter(
        (item) => item.poster_path
      );

      setSimilarMovies(filteredSimilarContent);
    } catch (error) {
      console.error('Error fetching similar content:', error);
    }
  };

  return (
    <div className="p-4">
      {/* Search Bar */}
      <div className="flex items-center px-64 gap-4 mb-4">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for movies/tv series..."
          className="border border-gray-400 rounded-lg p-2 flex-1 bg-[#242424] text-white"
        />
      </div>

      {/* Search Results */}
      {searchResults.length > 0 && (
        <div className='px-16'>
          <h1 className="text-4xl text-center font-bold my-8">Search Results:</h1>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {searchResults.map((item) => (
              <div key={item.id} className="text-center">
                <div className="group relative">
                  <img
                    src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
                    alt={item.title || item.name} // Use title for movies and name for TV shows
                    className="w-[200px] rounded-lg group-hover:scale-110 transition-all duration-150 ease-in group-hover:border-gray-600 group-hover:border-4 cursor-pointer"
                  />
                  <p className="text-lg text-center w-[200px] font-bold mt-2">
                    {item.title || item.name}
                  </p>
                  <p className="text-sm text-center w-[200px] text-gray-400">
                    {item.media_type === 'movie' ? 'Movie' : 'TV Series'}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Similar Content */}
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
                    {item.media_type === 'movie' ? 'Movie' : 'TV Series'}
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
