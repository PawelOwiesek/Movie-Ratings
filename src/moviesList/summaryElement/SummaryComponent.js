import { Summary } from "../styled";
import { RatingContainer, Title } from "./styled";

function SummaryComponent({
  $open,
  list,
  averageImdbRating,
  averageUserRating,
}) {
  return (
    <Summary $open={$open}>
      <Title>Movies You watched </Title>
      <RatingContainer>
        <p>🎬 {list?.length} movies watched</p>
        <p>⭐{averageImdbRating}</p>
        <p>🌟{averageUserRating}</p>
      </RatingContainer>
    </Summary>
  );
}

export default SummaryComponent;
