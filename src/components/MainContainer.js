import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'

const MainContainer = () => {

    const movies = useSelector(store=>store.movies?.nowPlayingMovies)
    if(!movies) return;
    const mainMovie= movies[0]
    console.log(mainMovie)

    const {original_title,overview , id}= mainMovie;
  return (
    <div>
        <VideoTitle overview={overview} originalTitle={original_title}/>
        <VideoBackground id={id}/>
    </div>
  )
}

export default MainContainer