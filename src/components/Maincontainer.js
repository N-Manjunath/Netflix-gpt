import React from 'react'
import Videotitle from './Videotitle'
import Videobg from './Videobg'
import { useSelector } from 'react-redux'

const Maincontainer = () => {
    const movie=useSelector(store=>store.movie?.playingmovie);
    if(!movie) return;
    const mainmovie=movie[1];
    // console.log(mainmovie);
    const {title,overview,id}=mainmovie;
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* Background video - only fills Maincontainer */}
      <Videobg movie_id={id} />

      {/* Floating title */}
         <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black to-transparent z-10"></div>
      <div className="absolute top-0 left-0 z-10 w-full h-full flex items-center">
        <Videotitle title={title} dsc={overview} />
      </div>
    </div>
  );
};

export default Maincontainer
