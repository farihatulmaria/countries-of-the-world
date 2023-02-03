import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    sort: false,
    independent:false,
    area:false
}

export const filterSlice = createSlice({
    name:"filters",
    initialState,
    reducers:{
        toogleBySort:(state)=>{
            state.sort = !state.sort
        },
        toogleByIndependence :(state)=>{
            state.independent = !state.independence
        },
        toogleByArea:(state)=>{
            state.area= !state.area
        }
    }
})

export const { toogleBySort,toogleByIndependence,toogleByArea}= filterSlice.actions
export default filterSlice.reducer