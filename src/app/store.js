import countriesSlice from "../features/countries/countriesSlice";

const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
    devTools: true,
    reducer:{
        countries:countriesSlice,
    }
})

export default store