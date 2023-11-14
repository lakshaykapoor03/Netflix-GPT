import React from "react";
import MovieCard from "./MovieCard";
import { Link } from "react-router-dom";


const MovieList = ({ title, movies }) => {
  
  return (
    <div className="px-6 overflow-x-auto ">
      <h1 className="text-lg md:text-3xl py-4 text-white">{title}</h1>
      <div className="flex ">
        <div className="flex">
          {movies?.map((movie) => (
           <Link to={"/movieinfo?v="+movie.id}> <MovieCard key={movie.id} id={movie.id} posterPath={movie.poster_path} />
           </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
