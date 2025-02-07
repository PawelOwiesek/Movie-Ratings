import styled from "styled-components";

export const Movies = styled.article`
  position: fixed;
  max-width: 800px;
  right: 120px;
  background-color: #534d4d;
  border: 2px solid #ffd700;
  border-radius: 25px;
`;

export const FlexContainer = styled.div`
  display: flex;
  padding: 10px;
`;

export const Description = styled.div`
  color: #ffffff;
  padding-top: 10px;
  font-size: 20px;
`;

export const MovieTitle = styled.h2``;

export const Genre = styled.ul`
  list-style-type: none;
  display: flex;
  gap: 20px;
  padding: 0;
  flex-wrap: wrap;
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
`;

export const Image = styled.img`
  width: 275px;
  height: 275px;
  margin: 20px;
`;
