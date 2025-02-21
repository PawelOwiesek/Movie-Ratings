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

  @media (max-width: 1240px) {
    gap: 45px;
    max-width: 400px;
    font-size: 20px;
  }

  @media (max-width: 1080px) {
    gap: 10px;
    max-width: 320px;
    font-size: 16px;
    margin-right: 10px;
  }
  @media (max-width: 767px) {
    flex-direction: column;
    max-width: 250px;
    gap: 5px;
    margin: 0 auto;
  }
  p {
    margin: 2px;
  }
`;
