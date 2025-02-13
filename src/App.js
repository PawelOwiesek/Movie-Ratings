import { useEffect, useState } from "react";
import MoviesList from "./moviesList/MoviesList";
import NavBar from "./navbar/NavBar";
import SearchComponent from "./navbar/SearchComponent";
import SearchResult from "./navbar/SearchResult";
import NavLogo from "./navbar/NavLogo";
import MoviesListsContainer from "./moviesListsContainer/MoviesListsContainer";
import { API } from "./apiData";
import { Loading } from "./asideActions/loader/loader";
import { Error } from "./asideActions/error/error";
import { MovieDetails } from "./movieDetails";
import { useLocalStorageState } from "./useLocalStorageState";

export default function App() {
  const [movies, setMovies] = useState([]);

  const [query, setQuery] = useState("Superman");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [noData, setNoData] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [hover, setHover] = useState(0);
  const [rating, setRating] = useState(0);
  const [averageImdbRating, setAverageImdbRating] = useState(0);
  const [averageUserRating, setAverageUserRating] = useState(0);
  const [watched, setWatched] = useLocalStorageState([], "watched");

  useEffect(() => {
    if (!query) return;
    handleCloseMovie();
    const controller = new AbortController();
    const signal = controller.signal;
    API({ setMovies, query, setIsLoading, setError, setNoData, signal });
    return () => {
      controller.abort();
    };
  }, [query]);

  useEffect(() => {
    if (watched.length === 0) {
      setAverageImdbRating(0);
      setAverageUserRating(0);
      return;
    }

    const { totalImdb, totalUser } = watched.reduce(
      (acc, movie) => {
        acc.totalImdb += Number(movie.imdbRating === "N/A")
          ? 0
          : Number(movie.imdbRating);
        acc.totalUser += Number(movie.userRating);
        return acc;
      },
      { totalImdb: 0, totalUser: 0 }
    );
    setAverageImdbRating((totalImdb / watched.length).toFixed(1));
    setAverageUserRating((totalUser / watched.length).toFixed(1));
  }, [watched]);

  const handleSelectMovie = (id) => {
    selectedId === id ? setSelectedId(null) : setSelectedId(id);
  };

  const handleCloseMovie = () => {
    setSelectedId(null);
  };

  const addWatchedMovie = (movie) => {
    setWatched((watched) => [...watched, movie]);
    setRating(0);
  };

  const removeFromList = (id) => {
    setWatched([...watched.filter((movie) => movie.imdbID !== id)]);
  };

  return (
    <>
      <NavBar>
        <NavLogo />
        <SearchComponent movies={movies} query={query} setQuery={setQuery} />
        <SearchResult movies={movies} />
      </NavBar>
      <MoviesListsContainer>
        {error ? (
          <Error />
        ) : isLoading ? (
          <Loading />
        ) : noData ? (
          noData
        ) : (
          <MoviesList
            list={movies}
            query={query}
            setSelectedId={handleSelectMovie}
            closeMovieDetails={handleCloseMovie}
            hover={hover}
            setHover={setHover}
            rating={rating}
            setRating={setRating}
          />
        )}

        {selectedId ? (
          <MovieDetails
            selectedId={selectedId}
            handleCloseMovie={handleCloseMovie}
            hover={hover}
            setHover={setHover}
            rating={rating}
            setRating={setRating}
            watched={watched}
            addWatchedMovie={addWatchedMovie}
          />
        ) : (
          <MoviesList
            $rating="rating "
            list={watched}
            hover={hover}
            setHover={setHover}
            rating={rating}
            setRating={setRating}
            isWatchedList={true}
            removeFromList={removeFromList}
            averageImdbRating={averageImdbRating}
            averageUserRating={averageUserRating}
          />
        )}
      </MoviesListsContainer>
    </>
  );
}
