import styled from "styled-components";

export const Movies = styled.article`
  position: fixed;
  max-width: 800px;
  right: 120px;
  background-color: #534d4d;
  border: 2px solid #ffd700;
  border-radius: 25px;
  @media (max-width: 1080px) {
    position: static;
    right: 70px;
    max-width: 420px;
    max-height: 1260px;
    text-align: center;
  }
  @media (max-width: 768px) {
    max-width: 300px;
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  padding: 10px;
  @media (max-width: 1080px) {
    flex-direction: column;
    padding: 0 30px;
  }
`;

export const Description = styled.div`
  color: #ffffff;
  padding-top: 10px;
  font-size: 20px;
  @media (max-width: 1080px) {
    display: flex;
    flex-direction: column;
    font-size: 18px;
  }
  @media (max-width: 768px) {
    max-width: 300px;
  }
`;

export const MovieTitle = styled.h2`
  @media (max-width: 1080px) {
    max-width: 300px;
    font-size: 18px;
    word-wrap: break-word;
  }
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const Genre = styled.ul`
  list-style-type: none;
  display: flex;
  gap: 20px;
  padding: 0;
  flex-wrap: wrap;
  @media (max-width: 1080px) {
    font-size: 18px;
  }
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const GenreItem = styled.li`
  background-color: #222121;
  border: 2px solid #ffd700;
  border-radius: 25px;
  padding: 5px 20px;
`;

export const Button = styled.button`
  width: ${({ $addMovie }) => ($addMovie ? "250px" : "90px")};
  height: 40px;
  border-radius: 25px;
  margin: 15px;
  font-size: ${({ $addMovie }) => ($addMovie ? " 20px" : "30px")};
  border: 2px solid #ffd700;
  color: #fff;
  background-color: rgb(18, 30, 126);
  align-self: center;
`;

export const Image = styled.img`
  width: 275px;
  height: 275px;
  margin: 20px;

  @media (max-width: 1080px) {
    width: 280px;
    height: 360px;
    align-self: center;
  }

  @media (max-width: 768px) {
    width: 170px;
    height: 170px;
  }
`;

export const StarContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  @media (max-width: 1080px) {
    display: flex;
    flex-direction: column;
    gap: 5px;
    font-size: 18px;
  }
  @media (max-width: 768px) {
    max-width: 300px;
  }
`;
