import styled from "styled-components";

export const MoviesContainer = styled.main`
  padding: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  max-width: 1600px;
  gap: 40px;
  margin: 0 auto;

  @media (max-width: 450px) {
    gap: 10px;
    padding: 5px;
  }
`;
