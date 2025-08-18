import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MovieCard = ({ poster }) => {
  return (
    <div className="w-40 flex-shrink-0 hover:opacity-60">
      <img
        className="w-full h-60 object-cover rounded-lg"
        src={IMG_CDN_URL+poster}
        alt="movie poster"
      />
    </div>
  );
};


export default MovieCard
