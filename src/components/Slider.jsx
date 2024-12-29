import React, { useEffect, useRef, useState } from 'react'
import GlobalApi from '../services/GlobalApi';
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
const screenWidth= window.innerWidth;
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2';

function Slider() {

  const [movieList, setMovieList] = useState([]);
  const elementRef = useRef();

    useEffect(() => {
        getTrendingMovies();
    }, []);

    const getTrendingMovies = () => {
        GlobalApi.getTrendingVideos.then(resp => {
            console.log(resp.data.results);
            setMovieList(resp.data.results);
        })
    }

    const scrollRight = (element) => {
      element.scrollLeft+=screenWidth-110
    }
    const scrollLeft = (element) => {
      element.scrollLeft-=screenWidth-110
    }

  return (
    <div className=" pb-5">
      <HiChevronLeft className=' hidden md:block text-white text-[30px] absolute mx-8 mt-[300px] cursor-pointer' onClick={() => scrollLeft(elementRef.current)}/>
      <HiChevronRight className='hidden md:block text-white text-[30px] absolute mx-8 mt-[300px] cursor-pointer right-0' onClick={() => scrollRight(elementRef.current)}/>

      <div className='flex overflow-x-auto w-full px-16 py-4 scrollbar-hide scroll-smooth' ref={elementRef}>

        {movieList.map((item) => (
          <img src={IMAGE_BASE_URL+item.backdrop_path}  
          className="min-w-full md:h-[600px] object-cover mr-5 rounded-md hover:border-[4px] border-gray-400 transition-all duration-100 ease-out"
          />
        ))}

      </div>
    </div>
  )
}

export default Slider;

// 53:47 on video