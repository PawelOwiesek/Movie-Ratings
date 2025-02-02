import { Stars } from "../../star/starComponent";
import { Summary } from "../styled";

import { RatingContainer, Title } from "./styled";

function SummaryComponent({ $open, list, hover, rating, setHover, setRating }) {
  return (
    <Summary $open={$open}>
      <Title>Movies You watched </Title>
      <RatingContainer>
        <p>💢 {list?.length} movies</p>
        <Stars
          hover={hover}
          setHover={setHover}
          rating={rating}
          setRating={setRating}
        />
        Rating {hover || rating || ""}
      </RatingContainer>
    </Summary>
  );
}

export default SummaryComponent;
