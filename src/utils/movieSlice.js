import { createSlice } from '@reduxjs/toolkit';

const movieSlice = createSlice({
  name: 'movies',
  initialState: {
    nowPlayingMovies: null,
    teaserVideo: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addUpcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    },
    addTeaserVideo: (state, action) => {
      state.teaserVideo = action.payload.length ? action.payload[0] : null;
    },
  },
});

export const { addNowPlayingMovies,addPopularMovies, addTeaserVideo, addUpcomingMovies ,addTopRatedMovies } = movieSlice.actions;
export default movieSlice.reducer;
