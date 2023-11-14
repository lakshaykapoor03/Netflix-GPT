import React, { useEffect } from "react";
import { Link } from "react-router-dom";


const MovieCard = ({ posterPath }) => {
 
  if (!posterPath) return;
  return (
    // <Link to="/movieDetails">
    <div
      onClick={() => {
        console.log("first");
      }}
      className="w-36 md:w-48 pr-4 cursor-pointer"
    >
      <img
        src={"https://image.tmdb.org/t/p/w500" + posterPath}
        alt="Movie Card"
      />
    </div>
    // </Link>
  );
};

export default MovieCard;
