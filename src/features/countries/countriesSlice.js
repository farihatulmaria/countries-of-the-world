import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchAllCountries } from "./countriesApi";


const initialState ={
    countries:[],
    isLoading:false,
    isError:false,
    error:""
}

export const getAllCountires = createAsyncThunk('countries/getAllCountires', async ()=>{
    const allCountries = await fetchAllCountries();
    return allCountries
})

const countriesSlice = createSlice({
    name:"countries",
    initialState,
    extraReducers:(builders)=>{
    }
})



export default countriesSlice.reducer