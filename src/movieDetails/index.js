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
}) => {
  const [selectedMovie, setSelectedMovie] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      setIsLoading(true);
      const res = await fetch(
        `https://www.omdbapi.com/?apikey=${KEY}&i=${selectedId}`
      );

      const data = await res.json();
      setSelectedMovie(data);
    };
    fetchMovieDetails();
    setIsLoading(false);
  }, [selectedId]);

  return (
    <Movies>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Button onClick={handleCloseMovie}>&larr;</Button>
          <FlexContainer>
            <Image src={selectedMovie.Poster} alt={selectedMovie.Title} />
            <Description>
              <MovieTitle>{selectedMovie.Title}</MovieTitle>
              <p>Runtime: {selectedMovie.Runtime}</p>
              <p>Director: {selectedMovie.Director}</p>
              <Genre>
                {selectedMovie.Genre?.split(",").map((genre) => (
                  <GenreItem>{genre.trim()}</GenreItem>
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
              <p>imdbRating: {selectedMovie.imdbRating}</p>
              <p>imdbVotes: {selectedMovie.imdbVotes}</p>
              <p> {selectedMovie.Plot}</p>
            </Description>
          </FlexContainer>
        </>
      )}
    </Movies>
  );
};
