import { configureStore } from '@reduxjs/toolkit';
import countriesSlice from '../feature/countries/countriesSlice';
import filterSlice from '../feature/filter/filterSlice';

const store = configureStore({
    reducer: {
        countries:countriesSlice,
        filters:filterSlice,
    },
});

export default store