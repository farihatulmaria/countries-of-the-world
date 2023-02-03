import { configureStore } from '@reduxjs/toolkit';
import { countriesApi } from '../feature/api/apiSlice';
import countriesSlice from '../feature/countries/countriesSlice';
import filterSlice from '../feature/filter/filterSlice';

const store = configureStore({
    reducer: {
        countries:countriesSlice,
        filters:filterSlice,
        [countriesApi.reducerPath]:countriesApi.reducer
    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(countriesApi.middleware)
});

export default store