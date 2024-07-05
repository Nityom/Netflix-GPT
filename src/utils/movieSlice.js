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
    addTeaserVideo: (state, action) => {
      state.teaserVideo = action.payload.length ? action.payload[0] : null;
    },
  },
});

export const { addNowPlayingMovies, addTeaserVideo } = movieSlice.actions;
export default movieSlice.reducer;