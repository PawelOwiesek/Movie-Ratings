import { tempMovieData } from "../tempMovieData";

function MoviesList() {
  return (
    <div>
      {tempMovieData.map((movie) => {
        return (
          <li key={movie.imdbID}>
            {movie.Title}
            {movie.Year}
            <img src={movie.Poster} alt="movie.Title" />
          </li>
        );
      })}
    </div>
  );
}

export default MoviesList;
