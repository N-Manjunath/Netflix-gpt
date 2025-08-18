import { createSlice } from "@reduxjs/toolkit";

const gptSlice=createSlice({
    name:'gpt',
    initialState:{
        searchgpt:false,
    },
    reducers:{
        togglesearchgpt:(state)=>
        {
            state.searchgpt=!state.searchgpt;
        }
    }
});
export const{togglesearchgpt}=gptSlice.actions;
export default gptSlice.reducer;