import { configureStore } from "@reduxjs/toolkit";
import MovieSlice from './MovieSlice'

const appStore = configureStore({
    reducer:{
        movies:MovieSlice

    }
});

export default appStore;

