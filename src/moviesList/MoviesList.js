import { useState } from "react";
import {
  Button,
  List,
  ListItem,
  MovieDescription,
  MovieRatingContainer,
  Movies,
  MovieTitle,
  Rating,
} from "./styled";
import SummaryComponent from "./summaryElement/SummaryComponent";
import { Star } from "./summaryElement/star";

function MoviesList({ list, $rating, setSelectedId }) {
  const [open, setOpen] = useState(true);

  const onListOpen = () => {
    setOpen((open) => !open);
  };

  return (
    <Movies>
      <Button onClick={onListOpen}>{open ? "Close" : "Open"}</Button>
      {$rating && <SummaryComponent list={list} $open={open} />}
      <List $open={open}>
        {list?.map((movie) => {
          return (
            <ListItem
              onClick={() => setSelectedId(movie.imdbID)}
              key={movie.imdbID}
            >
              {" "}
              <img
                style={{ width: "75px" }}
                src={movie.Poster}
                alt="movie.Title"
              />
              <MovieDescription>
                <MovieTitle>{movie.Title}</MovieTitle>
                <span>📅 {movie.Year}</span>
                {$rating && (
                  <MovieRatingContainer>
                    <Rating>
                      <Star full={true} width={40} /> {movie.imdbRating}
                    </Rating>
                    <Rating>
                      <Star full={true} width={40} /> {movie.userRating}
                    </Rating>
                    <Rating>{movie.runtime} min </Rating>
                  </MovieRatingContainer>
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
