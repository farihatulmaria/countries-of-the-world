import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    countries:[],
    isLoading:false,
    isError:false,
    error:""
};

// const getAllCountries = createAsyncThunk("countries/getAll", )
export const countriesSlice = createSlice({
    name:"countries",
    initialState,
    reducers:{
        getAllCountries:(state,action)=>{
            state.countries = action.payload
        }
    },
    extraReducers:(builder)=>{

    }
})

export default countriesSlice.reducer