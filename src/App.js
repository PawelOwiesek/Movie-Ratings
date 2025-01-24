import { useEffect, useState } from "react";
import { tempWatchedData } from "./tempWatchedData";
import MoviesList from "./moviesList/MoviesList";
import NavBar from "./navbar/NavBar";
import SearchComponent from "./navbar/SearchComponent";
import SearchResult from "./navbar/SearchResult";
import NavLogo from "./navbar/NavLogo";
import MoviesListsContainer from "./moviesListsContainer/MoviesListsContainer";
import { API } from "./apiData";

export default function App() {
  const [movies, setMovies] = useState([]);
  const [ratings, setRatings] = useState(tempWatchedData);

  useEffect(() => {
    API({ setMovies });
  }, []);

  return (
    <>
      <NavBar>
        <NavLogo />
        <SearchComponent movies={movies} />
        <SearchResult movies={movies} />
      </NavBar>
      <MoviesListsContainer>
        <MoviesList list={movies} />
        <MoviesList $rating="rating " list={ratings} />
      </MoviesListsContainer>
    </>
  );
}
