import React from 'react'
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

function MovieCard({movie}) {
  return (
    <>
        <img src={IMAGE_BASE_URL+movie.poster_path} 
        className='w-[200px] rounded-lg hover:border-[3px] border-gray-400 cursor-pointer hover:scale-110 transition-all duration-175 ease-in' alt="" />
    </>
  )
}

export default MovieCard