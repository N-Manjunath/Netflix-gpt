import { useDispatch } from "react-redux";
import { addmovie } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const useMovielist=()=>
{
    const dispatch=useDispatch();
  const Movielist= async ()=>
  {
    const data= await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1',API_OPTIONS);
    const json=await data.json();
    // console.log(json.results);
    dispatch(addmovie(json.results));
  }
  useEffect(()=>
  {
    Movielist();
  },[]);
}
export default useMovielist;