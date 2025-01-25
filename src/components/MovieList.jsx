import React, { useEffect, useRef, useState } from "react";
import { useConfig } from "../context/ConfigContext"; // Import useConfig
import GlobalApi from "../services/GlobalApi";
import MovieCard from "./MovieCard";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
import HorizontalMovieCard from "./HorizontalMovieCard";

function MovieList({ genreId, index_ }) {
    const { api_key, movieDBUrl } = useConfig(); // Get API config
    const elementRef = useRef(null);
    const [movieList, setMovieList] = useState([]); // Initialize as an empty array to avoid undefined
  
    useEffect(() => {
      if (genreId) {
        getMoviesByGenre();
      }
    }, [genreId]); // Fetch movies when the genreId changes
  
    const getMoviesByGenre = async () => {
      const response = await GlobalApi.getMovieByGenreId(movieDBUrl, api_key, genreId);
      setMovieList(response.data.results); // Update state or fallback to an empty array
    };
  
    const slideRight = () => {
      elementRef.current.scrollLeft += 500;
    };
  
    const slideLeft = () => {
      elementRef.current.scrollLeft -= 500;
    };
  
    return (
      <div className="relative flex items-center">
        {/* Left Button */}
        <IoChevronBackOutline
          onClick={slideLeft}
          className="text-[50px] text-white p-2 z-10 cursor-pointer hidden md:block absolute left-[-50px] top-1/2 transform -translate-y-1/2"
        />
  
        {/* Movie List Container */}
        <div
          ref={elementRef}
          className="flex overflow-x-auto gap-8 scrollbar-hide pt-5 px-3 pb-5 scroll-smooth whitespace-nowrap"
        >
          {movieList.map((item) => (
            <React.Fragment key={item.id}>
              {index_ % 3 === 0 ? (
                // Horizontal movie card for index % 3 === 0
                <HorizontalMovieCard movie={item} />
              ) : (
                // Vertical movie card for other indexes
                <MovieCard movie={item} />
              )}
            </React.Fragment>
          ))}
        </div>
  
        {/* Right Button */}
        <IoChevronForwardOutline
          onClick={slideRight}
          className="text-[50px] text-white p-2 z-10 cursor-pointer hidden md:block absolute right-[-50px] top-1/2 transform -translate-y-1/2"
        />
      </div>
    );
  }
  
  export default MovieList;
  
  