import React from 'react'
import useMovietrailer from '../Hooks/useMovietrailer'
import { useSelector } from 'react-redux';

const Videobg = ({movie_id}) => {
    useMovietrailer(movie_id);
    const videosKey=useSelector(store=>store.movie?.videos)
   // console.log(videosKey);
    if(!videosKey) return null
    
    // console.log(trailer);
  return (
  <iframe
  className="absolute inset-0 w-[177.78vh] h-[100vh] md:w-[100vw] md:h-[56.25vw] border-0 outline-none -z-10 pointer-events-none"
  src={`https://www.youtube.com/embed/${videosKey.key}?autoplay=1&mute=1&controls=0&loop=1&playlist=${videosKey.key}&rel=0&playsinline=1&modestbranding=1&showinfo=0`}
  title="YouTube video player"
  allow="autoplay"
  allowFullScreen
></iframe>
  )
}

export default Videobg
