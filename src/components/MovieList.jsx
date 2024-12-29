import React, { useEffect, useRef, useState } from 'react';
import GlobalApi from '../services/GlobalApi';
import MovieCard from './MovieCard';
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';
import HorizontalMovieCard from './HorizontalMovieCard';

function MovieList({ genreId, index_ }) {
    const elementRef = useRef(null);
    const [movieList, setMovieList] = useState([]);

    useEffect(() => {
        getMovieByGenreId();
    }, []);

    const getMovieByGenreId = () => {
        GlobalApi.getMovieByGenreId(genreId).then((resp) => {
            setMovieList(resp.data.results);
        });
    };

    const slideRight = (element) => {
        element.scrollLeft += 500;
    };

    const slideLeft = (element) => {
        element.scrollLeft -= 500;
    };

    return (
        <div className="relative flex items-center">
            {/* Left Button */}
            <IoChevronBackOutline
                onClick={() => slideLeft(elementRef.current)}
                className={`text-[50px] text-white p-2 z-10 cursor-pointer hidden md:block absolute left-[-50px] top-1/2 transform -translate-y-1/2`}
            />

            {/* Movie List */}
            <div
                ref={elementRef}
                className="flex overflow-x-auto gap-8 scrollbar-hide pt-5 px-3 pb-5 scroll-smooth"
            >
                {movieList.map((item, index) => (
                   <>
                    {index_%3==0?<HorizontalMovieCard key={index} movie={item} /> : <MovieCard key={index} movie={item} />}
                   </>
                ))}
            </div>

            {/* Right Button */}
            <IoChevronForwardOutline
                onClick={() => slideRight(elementRef.current)}
                className={`text-[50px] text-white p-2 z-10 cursor-pointer hidden md:block absolute right-[-50px] top-1/2 transform -translate-y-1/2`}
            />
        </div>
    );
}

export default MovieList;
