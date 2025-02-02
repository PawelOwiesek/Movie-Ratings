import { useEffect, useState } from "react";
import { KEY } from "../apiData";
import { Button, Description, FlexContainer, Image, Movies } from "./styled";

export const MovieDetails = ({ selectedId, handleCloseMovie }) => {
  const [selectedMovie, setSelectedMovie] = useState("");

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const res = await fetch(
        `https://www.omdbapi.com/?apikey=${KEY}&i=${selectedId}`
      );

      const data = await res.json();
      setSelectedMovie(data);
    };
    fetchMovieDetails();
  }, [selectedId]);

  return (
    <Movies>
      <Button onClick={handleCloseMovie}>&larr;</Button>{" "}
      <FlexContainer>
        <Image src={selectedMovie.Poster} alt={selectedMovie.Title} />
        <Description>
          <p>{selectedMovie.Title}</p>
          <p>Runtime: {selectedMovie.Runtime}</p>
          <p>Director: {selectedMovie.Director}</p>
          <p>Genre: {selectedMovie.Genre}</p>
          <p>imdbRating: {selectedMovie.imdbRating}</p>
          <p>imdbVotes: {selectedMovie.imdbVotes}</p>
          <p> {selectedMovie.Plot}</p>
        </Description>
      </FlexContainer>
    </Movies>
  );
};
