import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title,movies}) => {
  return (
    <div className='p-2 ml-4'>
      <h2 className='text-2xl font-bold p-2 ml-3 text-white'>{title}</h2>

      {/* flex row, scrollable, scrollbar hidden */}
      <div
        className="flex overflow-x-scroll space-x-4"
        style={{
          scrollbarWidth: "none",   // Firefox
          msOverflowStyle: "none"   // IE/Edge
        }}
      >
        {/* Hide scrollbar for Chrome/Safari */}
        <style>
          {`
            div::-webkit-scrollbar {
              display: none;
            }
          `}
        </style>

        {movies?.map(movie => (
          <MovieCard key={movie.id} poster={movie.poster_path} />
        ))}
      </div>
    </div>
  )
}

export default MovieList
