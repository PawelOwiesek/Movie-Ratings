import { useEffect, useState } from "react";
import { tempWatchedData } from "./tempWatchedData";
import MoviesList from "./moviesList/MoviesList";
import NavBar from "./navbar/NavBar";
import SearchComponent from "./navbar/SearchComponent";
import SearchResult from "./navbar/SearchResult";
import NavLogo from "./navbar/NavLogo";
import MoviesListsContainer from "./moviesListsContainer/MoviesListsContainer";
import { API } from "./apiData";
import { Loading } from "./loader/loader";

export default function App() {
  const [movies, setMovies] = useState([]);
  const [ratings, setRatings] = useState(tempWatchedData);
  const [query, setQuery] = useState("transformers");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    API({ setMovies, query, setIsLoading });
  }, [query]);

  return (
    <>
      <NavBar>
        <NavLogo />
        <SearchComponent movies={movies} query={query} setQuery={setQuery} />
        <SearchResult movies={movies} />
      </NavBar>
      <MoviesListsContainer>
        {isLoading ? <Loading /> : <MoviesList list={movies} query={query} />}
        <MoviesList $rating="rating " list={ratings} />
      </MoviesListsContainer>
    </>
  );
}
