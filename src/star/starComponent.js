import { StarContainer } from "./styled";
import { Star } from "./star";

export const Stars = ({ rating, setHover, hover, setRating }) => {
  const handleRating = (rating) => {
    setRating(rating);
  };

  return (
    <StarContainer>
      {Array.from({ length: 10 }, (_, i) => (
        <Star
          key={i}
          onClick={() => handleRating(i + 1)}
          onHoverIn={() => setHover(i + 1)}
          onHoverOut={() => setHover(0)}
          full={hover ? hover >= i + 1 : rating >= i + 1}
        />
      ))}
    </StarContainer>
  );
};
