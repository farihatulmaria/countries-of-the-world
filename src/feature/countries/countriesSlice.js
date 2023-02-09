import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchCountries } from './countriesAPI';

const initialState = {
    countries:[],
    isLoading:false,
    isError:false,
    error:""
};

export const getCountries = createAsyncThunk('countries/getCountries',async()=>{
    const countries = fetchCountries();
    return countries
})

export const countriesSlice = createSlice({
    name:"countries",
    initialState,
    reducers:{
        addCountries:(state,{payload})=>{
            state.countries = payload
        },
        findOneCountry:(state,{payload})=>{
           state.countries = state.countries.find(country=>country.name === payload)
        }
    },
    extraReducers:(builder)=>{
        builder
            .addCase(getCountries.pending,(state)=>{
                state.isLoading = true;
                state.isError = false;
                state.error = "";
                state.countries = [];
            })
            .addCase(getCountries.fulfilled,(state,action)=>{
                state.isLoading = false;
                state.isError = false;
                state.error = "";
                state.countries = action.payload;
            })
            .addCase(getCountries.rejected,(state,action)=>{
                state.isLoading = false;
                state.isError = true;
                state.error= action.error.message;
            })
    }
})

export default countriesSlice.reducer