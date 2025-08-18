import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants"
import { useDispatch } from "react-redux";
import { addVideos } from "../utils/movieSlice";

const useMovietrailer=(movie_id)=>
{
    const dispatch=useDispatch();
    const trailer=async()=>
    {
    const data= await fetch('https://api.themoviedb.org/3/movie/'+movie_id+'/videos?language=en-US',API_OPTIONS);
    const json=await data.json();
    const filterdata=json.results.filter((video)=>video.type==='Trailer');
    const trailer=filterdata.length?filterdata[0]:json.results[0];
  //  console.log(trailer);
    dispatch(addVideos(trailer));
    }

useEffect(()=>{
trailer();
},[])
}
export default useMovietrailer;