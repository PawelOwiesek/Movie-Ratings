import { useEffect, useState } from "react";
import { Movies } from "../moviesList/styled";
import { KEY } from "../apiData";

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
    <Movies style={{ position: "fixed", maxWidth: "800px", right: "120px" }}>
      <div style={{ padding: "10px", display: "flex" }}>
        <button
          style={{
            width: "50px",
            height: "50px",
            borderRadius: "100%",
            margin: "5px",
            fontSize: "30px",
          }}
          onClick={handleCloseMovie}
        >
          &larr;
        </button>
        <img
          style={{ width: "275px", height: "275px", margin: "20px" }}
          src={selectedMovie.Poster}
          alt={selectedMovie.Title}
        />
        <div>
          <p style={{ color: "#fff" }}>{selectedMovie.Title}</p>
          <p style={{ color: "#fff" }}>Runtime: {selectedMovie.Runtime}</p>
          <p style={{ color: "#fff" }}>Director: {selectedMovie.Director}</p>
          <p style={{ color: "#fff" }}>Genre: {selectedMovie.Genre}</p>
          <p style={{ color: "#fff" }}>
            imdbRating: {selectedMovie.imdbRating}
          </p>
          <p style={{ color: "#fff" }}>imdbVotes: {selectedMovie.imdbVotes}</p>
          <p style={{ color: "#fff" }}> {selectedMovie.Plot}</p>
        </div>
      </div>
    </Movies>
  );
};
