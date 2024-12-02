import { createSlice } from "@reduxjs/toolkit";

const MovieSlice = createSlice({
  name: "MovieList",
  initialState: {
    Items: [],
  },

  reducers: {
    addMovieList: (state, action) => {
      state.Items.push(action.payload);
    },
  },
});

export const {addMovieList} = MovieSlice.actions;
export default MovieSlice.reducer;