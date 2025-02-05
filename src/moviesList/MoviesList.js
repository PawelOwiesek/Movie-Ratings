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
import { Star } from "../star/star";

function MoviesList({
  list,
  $rating,
  setSelectedId,
  rating,
  hover,
  setRating,
  setHover,
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
        />
      )}
      <List $open={open}>
        {list?.map((movie) => {
          return (
            <ListItem
              onClick={() => setSelectedId(movie.imdbID)}
              key={movie.imdbID}
            >
              {" "}
              <img
                style={{ width: "175px" }}
                src={movie.Poster}
                alt="movie.Title"
              />
              <MovieDescription>
                <MovieTitle>{movie.Title}</MovieTitle>
                <span>📅 {movie.Year}</span>
                {$rating && (
                  <MovieRatingContainer>
                    <Rating>
                      <Star full={true} width={40} />
                      Imdb rating {movie.imdbRating}
                    </Rating>
                    <Rating>
                      <Star full={true} width={40} />
                      My rating: {movie.userRating}
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
