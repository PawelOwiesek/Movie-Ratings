import styled from "styled-components";

export const NavContainer = styled.header`
  margin: 0 auto;
  padding: 15px;
  background-color: rgb(18, 30, 126);
  display: flex;
  justify-content: space-around;
  align-items: center;
  max-width: 90vw;
  border-radius: 15px;
  border: 2px solid #ffd700;

  @media (max-width: 1024px) {
    flex-direction: column;
  }

  @media (max-width: 767px) {
    max-width: 450px;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: #ffd700;
  gap: 20px;

  @media (max-width: 1024px) {
    margin: 10px;
  }
`;

export const Title = styled.h1`
  @media (max-width: 1024px) {
    display: none;
  }
`;

export const Search = styled.input`
  display: inline-block;
  padding: 10px;
  max-width: 400px;
  width: 100%;
  font-size: 20px;
  background-color: rgb(48, 58, 250);
  border: none;
  border-radius: 15px;
  border: 2px solid #ffd700;
  color: #ffffff;
  cursor: pointer;
  @media (max-width: 450px) {
    max-width: 450px;
  }
`;

export const Results = styled.p`
  color: #ffffff;
  font-size: 20px;
`;
