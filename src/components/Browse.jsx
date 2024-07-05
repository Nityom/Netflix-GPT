import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';

const Browse = () => {

useNowPlayingMovies();
  
  return (
    <div>
     <Header/>
     <MainContainer/>
     <SecondaryContainer/>
     {/* Main Container
      - Videp Background
      - Video Title
      Secondary Container
      - Movie List * n
         - Cards * n */}
    </div>
  )
}

export default Browse
