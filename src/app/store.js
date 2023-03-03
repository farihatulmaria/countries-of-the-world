import { configureStore } from "@reduxjs/toolkit";
import countriesSlice from "../fetures/countries/countriesSlice";

export const store = configureStore({
    devTools:true,
    reducer:{
        countries: countriesSlice
    },
})