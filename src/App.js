import { useEffect, useState } from "react";
import { tempWatchedData } from "./tempWatchedData";
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

export default function App() {
  const [movies, setMovies] = useState([]);
  const [ratings, setRatings] = useState(tempWatchedData);
  const [query, setQuery] = useState("Resident Evil");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [noData, setNoData] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    API({ setMovies, query, setIsLoading, setError, setNoData });
  }, [query]);

  const handleSelectMovie = (id) => {
    selectedId === id ? setSelectedId(null) : setSelectedId(id);
  };

  const handleCloseMovie = () => {
    setSelectedId(null);
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
          />
        )}

        {selectedId ? (
          <MovieDetails
            selectedId={selectedId}
            handleCloseMovie={handleCloseMovie}
          />
        ) : (
          <MoviesList $rating="rating " list={ratings} />
        )}
      </MoviesListsContainer>
    </>
  );
}
