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
    return allCountries;
})

const countriesSlice = createSlice({
    name:"countries",
    initialState,
    reducers:{
    },
    extraReducers:(builders)=>{
        builders.addCase(getAllCountires.pending,(state)=>{
            state.isLoading = true;
            state.isError = false;
            state.error = ""
            state.countries = [];
        })
        .addCase(getAllCountires.fulfilled,(state,action)=>{
            state.isLoading = false;
            state.isError = false;
            state.error = ""
            state.countries = action.payload;
        })
        .addCase(getAllCountires.rejected,(state,action)=>{
            state.isLoading = false;
            state.isError = true;
            state.error = action.error;
            state.countries = []
        })
    }
})



export default countriesSlice.reducer