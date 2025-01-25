import React from 'react'
import { useConfig } from '../context/ConfigContext';


function HorizontalMovieCard({movie}) {
    const { IMAGE_BASE_URL } = useConfig();
  
  return (
    <div className="flex flex-col hover:scale-110 transition-all duration-150 ease-in">
      <img src={IMAGE_BASE_URL+movie.backdrop_path} 
        className='w-[260px] rounded-lg hover:border-[3px] border-gray-400 cursor-pointer hover:scale-110 transition-all duration-175 ease-in' alt="" />
      <h2 className='w-[260px] text-white mt-2'>{movie.title}</h2>
    </div>
  )
}

export default HorizontalMovieCard
