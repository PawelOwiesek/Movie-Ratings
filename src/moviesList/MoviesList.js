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
                    {" "}
                    <button
                      onClick={() => removeFromList(movie.imdbID)}
                      style={{
                        position: "absolute",
                        right: "40px",
                        top: "-60px",
                        border: "none",
                        height: "30px",
                        width: "30px",
                        borderRadius: "100%",
                        backgroundColor: "crimson",
                        color: " #ffffff",
                        fontSize: "18px",
                      }}
                    >
                      x
                    </button>
                    <Rating>
                      <span style={{ fontSize: "25px" }}>⭐</span>
                      Imdb rating {movie.imdbRating}
                    </Rating>
                    <Rating>
                      <span style={{ fontSize: "25px" }}>🌟</span>
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
