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
      {$rating && <SummaryComponent $open={open} />}
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
                <span>{movie.Year}</span>
              </MovieDescription>
            </ListItem>
          );
        })}
      </List>
    </Movies>
  );
}

export default MoviesList;
