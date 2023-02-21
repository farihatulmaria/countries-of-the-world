import { createSlice } from "@reduxjs/toolkit";


const initialState ={
    countries:[],
    isLoading:false,
    isError:false,
    error:""
}



const countriesSlice = createSlice({
    name:"countries",
    initialState,
    extraReducers:
})