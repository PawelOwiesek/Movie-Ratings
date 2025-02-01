import { useEffect } from "react";
import { fetchMovieDetails } from "../apiData";
import { Movies } from "../moviesList/styled";

export const MovieDetails = ({ selectedId, handleCloseMovie }) => {
  useEffect(() => {
    // fetchMovieDetails(selectedId);
  });
  return (
    <Movies>
      <button
        style={{ width: "50px", height: "50px" }}
        onClick={handleCloseMovie}
      >
        &larr;
      </button>
      <p style={{ color: "#fff" }}>{selectedId}</p>{" "}
    </Movies>
  );
};
