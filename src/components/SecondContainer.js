import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondContainer = () => {
  const movies = useSelector(store => store.movie);
  if (!movies) return null;

  return (
    <div className="relative z-10 -mt-32">
      {/* Gradient overlay (sits on top of video, fades into black) */}
      <div className="absolute top-0 left-0 w-full h-80 bg-gradient-to-b from-transparent via-black/95 to-black z-10 pointer-events-none" />

      {/* Lists section — NOTICE: no bg-black here */}
      <div className="relative z-20">
        <MovieList title="Trending" movies={movies.playingmovie} />
        <MovieList title="Popular" movies={movies.popularmovie} />
        <MovieList title="Horror Movies" movies={movies.playingmovie} />
        <MovieList title="Comedy Movies" movies={movies.playingmovie} />
        <MovieList title="Rom-Com" movies={movies.playingmovie} />
        <MovieList title="Action Movies" movies={movies.playingmovie} />
      </div>

      {/* Solid black block after fade (ensures deep scroll stays black) */}
      <div className="absolute top-80 left-0 w-full h-full bg-black -z-10" />
    </div>
  )
}

export default SecondContainer
