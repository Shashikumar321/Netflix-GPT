import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";


const useNowPlayingMovies = () => {
    const dispatch = useDispatch();
    const getNowPlayingMovies = async () => {
      try {
        const data = await fetch(
          "https://api.themoviedb.org/3/movie/now_playing?page=1",
          API_OPTIONS
        );
        const json = await data.json();
        dispatch(addNowPlayingMovies(json.results));
      }
      catch(error) {
        console.log(error)
      }

    };
  
    useEffect(() => {
      getNowPlayingMovies();
    }, []);
}

export default useNowPlayingMovies;