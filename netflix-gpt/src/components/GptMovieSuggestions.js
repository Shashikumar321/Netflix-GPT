import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestions = () => {
  const { movieResults, movieNames } = useSelector((store) => store.gpt);

  if (!movieNames) return null;

  return (
    <div className="m-4 p-4 bg-opacity-85 bg-black rounded-lg">
        {
            movieNames.map((movie, index) => (
                <MovieList key={movie} title={movie} movies={movieResults[index]} />

            ))
        }
    </div>
  );
};

export default GptMovieSuggestions;
