import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Header from "./Header";
import { API_OPTIONS } from "../utils/constants";
import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import { LOGO } from "../utils/constants";

const MovieDetails = () => {
  const [searchParams] = useSearchParams();

  const [movieData, setMovieData] = useState(null);

  useEffect(() => {
    getMovieInfo();
  }, []);

  const getMovieInfo = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${searchParams.get(
        "v"
      )}?language=en-US`,
      API_OPTIONS
    );
    const json = await data.json();
    setMovieData(json);
    console.log(json);
  };
  return (
    movieData && (
   <>
    <div className="bg-black">
       
       <Link to="/browse">
       <img
          className="w-56 mx-auto md:mx-2"
          src={LOGO}
          alt="Logo"
        /></Link>
      </div>
      <div className="bg-black flex justify-around">
        <img
          className="h-screen"
          src={"https://image.tmdb.org/t/p/w500" + movieData?.poster_path}
          alt="Movie background"
        />

        <div className=" w-[50vw]  text-white py-[30vh]">
          <h1 className="text-5xl font-bold mb-10">
            {movieData.original_title}
          </h1>
          <h2 className="text-gray-300 mb-5">
            Date-{movieData.release_date} | Language-{" "}
            {movieData.original_language}
          </h2>
          <p className="text-lg">{movieData.overview}</p>
          <Link to={movieData.homepage} target="blank">
            <button className="bg-red-800 px-4 py-2 rounded my-4">
              Click for more details
            </button>
          </Link>
        </div>
      </div>
   </>
    )
  );
};

export default MovieDetails;
