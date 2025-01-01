import React from 'react'
import Slider from '../components/Slider'
import ProductionHouse from '../components/ProductionHouse'
import GenreMovieList from '../components/GenreMovieList'

function Home() {
  return (
    <div>
        <div> <Slider /> </div>
        <div> <ProductionHouse /> </div>
        <div> <GenreMovieList /> </div>
    </div>
  )
}

export default Home