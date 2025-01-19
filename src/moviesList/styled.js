import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-width: 1600px;
  gap: 40px;
  margin: 45px auto;
`;

export const Movies = styled.div`
  background-color: #222121;
  border-radius: 15px;
  border: 2px solid #ffd700;
  width: 100%;
  height: 660px;
  border-radius: 25px;
`;
export const MoviesContainer = styled.div`
  padding: 20px;
  margin: 0 30px;
  position: relative;
`;

export const List = styled.ul`
  grid-row-start: 2;
  padding: 25px 0;
  list-style: none;
  color: #ffffff;
  margin-top: 40px;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  margin: 10px;
  gap: 25px;
  font-size: 22px;
  margin-bottom: 25px;
`;

export const Button = styled.button`
  display: flex;
  position: absolute;
  right: 15px;
  padding: 5px 20px;
  text-align: center;
  border: 2px solid #ffd700;
  border-radius: 15px;
  background-color: rgb(18, 30, 126);
  color: #ffffff;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
`;

export const MovieDescription = styled.div`
  display: flex;
  flex-direction: column;
`;
