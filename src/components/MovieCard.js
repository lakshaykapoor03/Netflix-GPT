import React from 'react'

const MovieCard = ({posterPath}) => {
  return (
    <div className="w-36 md:w-48 pr-4" >
        <img src={"https://image.tmdb.org/t/p/w500"+posterPath} alt="Movie Card" />

    </div>
  )
}

export default MovieCard