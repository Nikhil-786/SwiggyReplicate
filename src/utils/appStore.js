import { configureStore } from "@reduxjs/toolkit";
import MovieSlice from './MovieSlice';
import cartReducer from './cartSlice';

const appStore = configureStore({
    reducer:{
        movies:MovieSlice,
        cart:cartReducer

    }
});

export default appStore;

