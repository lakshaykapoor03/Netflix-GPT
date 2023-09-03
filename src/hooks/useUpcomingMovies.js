
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../utils/moviesSlice";
import { useSelector } from "react-redux";

const useUpcomingMovies = () => {
  
    const dispatch = useDispatch()
    const upcomingMovies = useSelector((store) => store.movies.addUpcomingMovies);
    const getUpcomingMovies = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
        API_OPTIONS
      );
      const json = await data.json();
  
      dispatch(addUpcomingMovies(json.results))
    };
  
    useEffect(() => {
        !upcomingMovies &&  getUpcomingMovies();
    }, []);
}

export default useUpcomingMovies;


