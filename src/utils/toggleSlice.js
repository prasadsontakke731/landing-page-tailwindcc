import { createSlice } from "@reduxjs/toolkit";

export const toggleSlice=createSlice({
    name:"toggle",
    initialState:false,
    reducers:{
        // eslint-disable-next-line no-unused-vars
        toggleMenu:(state,action)=>{
            return !state
        }
    }
})
export const {toggleMenu}=toggleSlice.actions
export default toggleSlice.reducer