import styled from "styled-components";

export const NavContainer = styled.div`
  margin: 0 auto;
  padding: 15px;
  background-color: rgb(18, 30, 126);
  display: flex;
  justify-content: space-around;
  align-items: center;
  max-width: 90vw;
  border-radius: 15px;
  border: 2px solid #ffd700;
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: #ffffff;
  gap: 20px;
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
`;

export const Results = styled.p`
  color: #ffffff;
  font-size: 20px;
`;
