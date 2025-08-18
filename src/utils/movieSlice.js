import { createSlice } from "@reduxjs/toolkit";

const movieSlice=createSlice({
    name:"movie",
    initialState:{
        playingmovie:null,
        videos:null
    },
    reducers:{
        addmovie:(state,action)=>
        {
            state.playingmovie=action.payload;
        },
        addPopularmovie:(state,action)=>
        {
            state.popularmovie=action.payload;
        },
        addVideos:(state,action)=>
        {
            state.videos=action.payload;
        }
    },
});
export const {addmovie,addVideos,addPopularmovie}=movieSlice.actions
export default movieSlice.reducer;