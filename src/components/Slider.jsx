import React, { useEffect, useRef, useState } from "react";
import GlobalApi from "../services/GlobalApi"; // Import the API functions
import { useConfig } from "../context/ConfigContext"; // Import the custom hook for context
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";

const screenWidth = window.innerWidth;

function Slider() {
  const { api_key, movieDBUrl, IMAGE_BASE_URL } = useConfig(); // Use the config context
  const [movieList, setMovieList] = useState([]);
  const elementRef = useRef();

  useEffect(() => {
    getTrendingMovies(); // Fetch trending movies on mount
  }, []);

  const getTrendingMovies = async () => {
    try {
      // Pass required parameters to the API function
      const response = await GlobalApi.getTrendingVideos(movieDBUrl, api_key);
      setMovieList(response.data.results); // Update state with the results
    } catch (error) {
      console.error("Error fetching trending movies:", error);
    }
  };

  const scrollRight = () => {
    elementRef.current.scrollLeft += screenWidth - 110;
  };
  const scrollLeft = () => {
    elementRef.current.scrollLeft -= screenWidth - 110;
  };

  return (
    <div className="pb-5 relative">
      {/* Chevron buttons */}
      <HiChevronLeft
        className="hidden md:block text-white text-[30px] absolute mx-8 mt-[300px] cursor-pointer"
        onClick={scrollLeft}
      />
      <HiChevronRight
        className="hidden md:block text-white text-[30px] absolute mx-8 mt-[300px] cursor-pointer right-0"
        onClick={scrollRight}
      />

      {/* Movie list slider */}
      <div
        className="flex overflow-x-auto w-full px-16 py-4 scrollbar-hide scroll-smooth"
        ref={elementRef}
      >
        {movieList.map((item) => (
      <div
        key={item.id}
        className="relative min-w-full md:h-[600px] mr-5 rounded-lg overflow-hidden"
      >
        {/* Movie Image */}
        <img
          src={`${IMAGE_BASE_URL}${item.backdrop_path}`} // Use IMAGE_BASE_URL from context
          alt={item.title || item.name}
          className="w-full h-full object-cover hover:border-[4px] border-gray-400 transition-all duration-100 ease-out"
        />

        {/* Movie Title */}
        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent text-white p-4">
          <h2 className="text-lg font-bold">{item.title || item.name}</h2>
        </div>
      </div>
    ))}

      </div>
    </div>
  );
}

export default Slider;
