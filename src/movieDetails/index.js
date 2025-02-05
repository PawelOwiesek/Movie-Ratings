import { useEffect, useState } from "react";
import { KEY } from "../apiData";
import {
  Button,
  Description,
  FlexContainer,
  Genre,
  GenreItem,
  Image,
  Movies,
  MovieTitle,
} from "./styled";
import { Stars } from "../star/starComponent";
import { Loading } from "../asideActions/loader/loader";

export const MovieDetails = ({
  selectedId,
  handleCloseMovie,
  hover,
  setHover,
  rating,
  setRating,
  watched,
  addWatchedMovie,
}) => {
  const [selectedMovie, setSelectedMovie] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const fetchMovieDetails = async () => {
      const res = await fetch(
        `https://www.omdbapi.com/?apikey=${KEY}&i=${selectedId}`
      );

      const data = await res.json();
      setSelectedMovie(data);
    };
    fetchMovieDetails();
    setIsLoading(false);
  }, [selectedId]);

  const handleAddMovie = () => {
    const addedMovie = {
      imdbID: selectedId,
      Poster: selectedMovie.Poster,
      Title: selectedMovie.Title,
      runtime: selectedMovie.Runtime,
      Year: selectedMovie.Year,
      imdbRating: selectedMovie.imdbRating,
      userRating: rating,
    };
    if (watched.find((watch) => watch.imdbID === addedMovie.imdbID)) {
      handleCloseMovie();
      return;
    }
    addWatchedMovie(addedMovie);
    handleCloseMovie();
  };

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <Movies>
          <Button onClick={handleCloseMovie}>&larr;</Button>
          <FlexContainer>
            <Image src={selectedMovie.Poster} alt={selectedMovie.Title} />
            <Description>
              <MovieTitle>{selectedMovie.Title}</MovieTitle>
              <p>Runtime: {selectedMovie.Runtime}</p>
              <p>Director: {selectedMovie.Director}</p>
              <Genre>
                {selectedMovie.Genre?.split(",").map((genre) => (
                  <GenreItem key={genre}>{genre.trim()}</GenreItem>
                ))}
              </Genre>
              <div
                style={{ display: "flex", alignItems: "center", gap: "20px" }}
              >
                <Stars
                  hover={hover}
                  setHover={setHover}
                  rating={rating}
                  setRating={setRating}
                />
                Rating {hover || rating || ""}
              </div>
              {rating ? (
                <Button $addMovie onClick={handleAddMovie}>
                  Add movie to list
                </Button>
              ) : (
                ""
              )}
              <p>imdbRating: {selectedMovie.imdbRating}</p>
              <p>imdbVotes: {selectedMovie.imdbVotes}</p>
              <p> {selectedMovie.Plot}</p>
            </Description>
          </FlexContainer>
        </Movies>
      )}
    </>
  );
};
