import { configureStore } from '@reduxjs/toolkit';
import filterSlice from '../feature/filter/filterSlice';

const store = configureStore({
    reducer: {
        filters:filterSlice,
    },
});

export default store