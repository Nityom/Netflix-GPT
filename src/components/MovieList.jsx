import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ title, movies }) => {
  console.log('Movies:', movies);

  if (!Array.isArray(movies) || movies.length === 0) {
    return <div>No movies available</div>;
  }

  return (
    <div className='px-6'>       
     <h1 className='text-3xl py-4 '>{title}</h1>
      <div className='flex overflow-x-scroll '>

        <div className='flex'>
          {movies.map((movie, index) => (
            <MovieCard 
              key={index}
              posterPath={movie.poster_path || 'default_poster_path.jpg'} 
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MovieList;
