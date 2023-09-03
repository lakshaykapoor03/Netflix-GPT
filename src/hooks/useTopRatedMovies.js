
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../utils/moviesSlice";
import { useSelector } from "react-redux";

const useTopRatedMovies = () => {
  
    const dispatch = useDispatch()
    const topRatedMovies = useSelector((store) => store.movies.popularMovies);
    const getTopRatedMovies = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
        API_OPTIONS
      );
      const json = await data.json();
  
      dispatch(addTopRatedMovies(json.results))
    };
  
    useEffect(() => {
        !topRatedMovies &&  getTopRatedMovies();
    }, []);
}

export default useTopRatedMovies;


