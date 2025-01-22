import { useState } from "react";
import { Summary } from "../styled";
import { Star } from "./star";

function SummaryComponent({ $open, list, maxRating = 10 }) {
  const [hover, setHover] = useState(0);
  const [rating, setRating] = useState(0);

  const handleRating = (rating) => {
    setRating(rating);
  };

  return (
    <Summary $open={$open}>
      <h2>Movies You watched </h2>
      <div style={{ display: "flex", gap: "30px" }}>
        <p>💢 {list.length} movies</p>
        <p style={{ display: "flex", gap: "10px" }}>
          Rating{" "}
          <span style={{ display: "flex", width: "185px", cursor: "pointer" }}>
            {Array.from({ length: maxRating }, (_, i) => (
              <Star
                key={i}
                onClick={() => handleRating(i + 1)}
                onHoverIn={() => setHover(i + 1)}
                onHoverOut={() => setHover(0)}
                full={hover ? hover >= i + 1 : rating >= i + 1}
              />
            ))}
          </span>
          {hover || rating || ""}
        </p>
      </div>
    </Summary>
  );
}

export default SummaryComponent;
