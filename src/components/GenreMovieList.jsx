import React from 'react';
import GenreList from '../Constant/GenreList';
import MovieList from './MovieList';

function GenreMovieList() {
    return (
        <div>
            {GenreList.genre.map((item, index) => index <= 8 && (
                <div key={item.id} className="p-8 px-16">
                    <h2 className="text-[20px] px-3 text-white font-bold">{item.name}</h2>
                    <MovieList genreId={item.id} index_={index}/>
                </div>
            ))}
        </div>
    );
}

export default GenreMovieList;
