import React, {useEffect} from 'react'
import { useSelector } from "react-redux";
import Header from './Header';


const MovieDetails = () => {

    const movieData = useSelector((store) => store?.movies?.nowPlayingMovies);
    // const {original_title, overview,poster_path,release_date,original_language, backdrop_path
    // }= movieData[1]
    useEffect(() => {

    }, []);
  return (
 movieData.map(movie=> <div className="bg-black flex justify-around">
     
 <img
   className="h-screen"
    src={"https://image.tmdb.org/t/p/w500" + movie.poster_path
}
    alt="Movie background"
  />
  
<div className=" w-[50vw]  text-white py-[30vh]" >
    <h1 className="text-5xl font-bold mb-10">{movie.original_title}</h1>
    <h2 className="text-gray-300 mb-5">Date-{movie.release_date} | Language- {movie.original_language}</h2>
    <p className="text-lg">{movie.overview}</p>
    </div>

  
   
   

</div>)
  )
}

export default MovieDetails