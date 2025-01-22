import { useState } from "react";
import { Button, List, ListItem, MovieDescription, Movies } from "./styled";
import SummaryComponent from "./summaryElement/SummaryComponent";

function MoviesList({ list, $rating }) {
  const [open, setOpen] = useState(true);

  const onListOpen = () => {
    setOpen((open) => !open);
  };

  return (
    <Movies>
      <Button onClick={onListOpen}>{open ? "Close" : "Open"}</Button>
      {$rating && <SummaryComponent list={list} $open={open} />}
      <List $open={open}>
        {list.map((movie) => {
          return (
            <ListItem key={movie.imdbID}>
              {" "}
              <img
                style={{ width: "100px" }}
                src={movie.Poster}
                alt="movie.Title"
              />
              <MovieDescription>
                <span>{movie.Title}</span>
                <span>📅 {movie.Year}</span>
                {$rating && (
                  <p>
                    <span> {movie.imdbRating}</span>
                    <span> {movie.userRating}</span>{" "}
                    <span>{movie.runtime} min </span>
                  </p>
                )}
              </MovieDescription>
            </ListItem>
          );
        })}
      </List>
    </Movies>
  );
}

export default MoviesList;
