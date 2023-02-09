import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchCountries } from './countriesAPI';

const initialState = {
    countries:[],
    isLoading:false,
    isError:false,
    error:""
};

export const getCountries = createAsyncThunk('countries/getCountries',async()=>{
    const countries = await fetchCountries();
    return countries
})

export const countriesSlice = createSlice({
    name:"countries",
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(getCountries.pending,(state)=>{
            
        })
    }
})
export default countriesSlice.reducer