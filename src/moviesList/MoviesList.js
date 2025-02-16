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
  RemoveButton,
  StarIcon,
  Poster,
  RatingDescription,
} from "./styled";
import SummaryComponent from "./summaryElement/SummaryComponent";

function MoviesList({
  list,
  $rating,
  setSelectedId,
  rating,
  hover,
  setRating,
  setHover,
  isWatchedList,
  removeFromList,
  averageImdbRating,
  averageUserRating,
}) {
  const [open, setOpen] = useState(true);
  const onListOpen = () => {
    setOpen((open) => !open);
  };

  return (
    <Movies>
      <Button onClick={onListOpen}>{open ? "Close" : "Open"}</Button>
      {$rating && (
        <SummaryComponent
          list={list}
          $open={open}
          hover={hover}
          setHover={setHover}
          rating={rating}
          setRating={setRating}
          averageImdbRating={averageImdbRating}
          averageUserRating={averageUserRating}
        />
      )}
      <List $open={open}>
        {list?.map((movie) => {
          return (
            <ListItem
              onClick={isWatchedList ? null : () => setSelectedId(movie.imdbID)}
              key={movie.imdbID}
            >
              {" "}
              <Poster src={movie.Poster} alt={movie.Title} />
              <MovieDescription>
                <MovieTitle>{movie.Title}</MovieTitle>

                <span>📅 {movie.Year}</span>
                {$rating && (
                  <MovieRatingContainer>
                    {" "}
                    <RemoveButton onClick={() => removeFromList(movie.imdbID)}>
                      x
                    </RemoveButton>
                    <Rating>
                      <StarIcon>⭐</StarIcon>
                      <RatingDescription>Imdb rating</RatingDescription>{" "}
                      {movie.imdbRating}
                    </Rating>
                    <Rating>
                      <StarIcon>🌟</StarIcon>
                      <RatingDescription>My rating:</RatingDescription>{" "}
                      {movie.userRating}
                    </Rating>
                    <Rating>{movie.runtime} </Rating>
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
