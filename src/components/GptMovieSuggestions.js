import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from "./MovieList"

const GptMovieSuggestions = () => {

  const {movieNames, movieResults}= useSelector(store=>store.gpt)
  if(!movieNames) return null;
  return (
    <div className="p-4 m-4 bg-black text-white">
      
      {movieNames.map((movie,idx)=><MovieList key={movie} title={movie} movies={movieResults[idx]}/>)}
    </div>
  )
}

export default GptMovieSuggestions