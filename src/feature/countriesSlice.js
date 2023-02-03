import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    countries:[]
};



export const countriesSlice = createSlice({
    name:"countries",
    initialState,
    reducers:{
        findOneCountry:(state,action)=>{
            
        }
    },
    extraReducers:(builder)=>{

    }
})

export default countriesSlice.reducer