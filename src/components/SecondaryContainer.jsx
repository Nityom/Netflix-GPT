import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {


const movies= useSelector((store)=>store.movies);




  return (
    <div className='bg-black text-white'>
      <div className='-mt-32 pl-12 relative z-20'>
  <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Top Rated"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovies}/>
      <MovieList title={"Popular"} movies={movies.popularMovies}/>
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>

      </div>
    

    </div>
  )
}

export default SecondaryContainer
