import { useState } from "react";
import { Summary } from "../styled";
import { Star } from "./star";
import { RatingContainer, StarContainer, Title } from "./styled";

function SummaryComponent({ $open, list, maxRating = 5 }) {
  const [hover, setHover] = useState(0);
  const [rating, setRating] = useState(0);

  const handleRating = (rating) => {
    setRating(rating);
  };

  return (
    <Summary $open={$open}>
      <Title>Movies You watched </Title>
      <RatingContainer>
        <p>💢 {list.length} movies</p>
        Rating{" "}
        <StarContainer>
          {Array.from({ length: maxRating }, (_, i) => (
            <Star
              key={i}
              onClick={() => handleRating(i + 1)}
              onHoverIn={() => setHover(i + 1)}
              onHoverOut={() => setHover(0)}
              full={hover ? hover >= i + 1 : rating >= i + 1}
            />
          ))}
        </StarContainer>
        {hover || rating || ""}
      </RatingContainer>
    </Summary>
  );
}

export default SummaryComponent;
