import styled from "styled-components";

export const Title = styled.h2`
  @media (max-width: 1080px) {
    font-size: 18px;
  }
`;

export const RatingContainer = styled.div`
  display: flex;
  gap: 110px;
  align-items: center;
  font-size: 22px;

  @media (max-width: 1080px) {
    gap: 20px;
    max-width: 300px;
    font-size: 16px;
  }
`;
