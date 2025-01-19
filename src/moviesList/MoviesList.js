import { useState } from "react";
import { tempMovieData } from "../tempMovieData";
import { tempWatchedData } from "../tempWatchedData";
import {
  Button,
  Container,
  List,
  ListItem,
  MovieDescription,
  Movies,
  MoviesContainer,
} from "./styled";

function MoviesList() {
  const [open, setOpen] = useState(true);
  const [open2, setOpen2] = useState(true);
  const onListOpen = () => {
    setOpen((open) => !open);
  };
  const onListOpen2 = () => {
    setOpen2((open2) => !open2);
  };
  return (
    <Container>
      <Movies>
        <MoviesContainer>
          {" "}
          <Button onClick={onListOpen}>{open ? "Close" : "Open"}</Button>
          <List $open={open} style={{ display: `${open ? "block" : "none"}` }}>
            {tempMovieData.map((movie) => {
              return (
                <ListItem key={movie.imdbID}>
                  {" "}
                  <img
                    style={{ width: "100px" }}
                    w
                    src={movie.Poster}
                    alt="movie.Title"
                  />
                  <MovieDescription>
                    <span>{movie.Title}</span>
                    <span>{movie.Year}</span>
                  </MovieDescription>
                </ListItem>
              );
            })}
          </List>
        </MoviesContainer>{" "}
      </Movies>

      <Movies>
        <MoviesContainer>
          {" "}
          <Button onClick={onListOpen2}>{open2 ? "Close" : "Open"}</Button>
          <List
            $open2={open2}
            style={{ display: `${open2 ? "block" : "none"}` }}
          >
            {tempWatchedData.map((movie) => {
              return (
                <ListItem key={movie.imdbID}>
                  {" "}
                  <img
                    style={{ width: "100px" }}
                    w
                    src={movie.Poster}
                    alt="movie.Title"
                  />
                  <MovieDescription>
                    <span>{movie.Title}</span>
                    <span>{movie.Year}</span>
                  </MovieDescription>
                </ListItem>
              );
            })}
          </List>
        </MoviesContainer>{" "}
      </Movies>
    </Container>
  );
}

export default MoviesList;
