import { configureStore } from '@reduxjs/toolkit';
import { countriesSlice } from '../feature/countriesSlice';

const store = configureStore({
    reducer: {
        countries:countriesSlice
    },
});

export default store