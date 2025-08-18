import { useDispatch } from "react-redux";
import {addPopularmovie } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const usePopularmovie=()=>
{
    const dispatch=useDispatch();
  const PopularMovie= async ()=>
  {
    const data= await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1',API_OPTIONS);
    const json=await data.json();
    // console.log(json.results);
    dispatch(addPopularmovie(json.results));
  }
  useEffect(()=>
  {
    PopularMovie();
  },[]);
}
export default usePopularmovie;