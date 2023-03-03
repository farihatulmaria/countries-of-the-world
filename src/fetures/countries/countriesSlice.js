import axios from "../../utils/axios.config";
const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
    countries:[],
    isLoading:false,
    isError:false,
    error:""
}

export const getAllCountries = createAsyncThunk("countries/getAll", async ()=>{
    const countries = await axios.get('/all');
    return countries
})

const countriesSlice = createSlice({
    name:"countries",
    initialState,
    extraReducers:(builder)=>{
        builder
        .addCase(getAllCountries.pending,(state,)=>{
            state.isLoading =true
            state.isError= false
            state.error= ""
        })
        .addCase(getAllCountries.fulfilled,(state,action)=>{
            state.isLoading = false
            state.isError = false
            state.error =""
            state.countries = action.payload;
        })
        .addCase(getAllCountries.rejected,(state,action)=>{
            state.countries = [];
            state.isLoading = false
            state.isError = true
            state.error = action.error.message
            console.log(action.error.code);
        })
    }
})

export default countriesSlice.reducer