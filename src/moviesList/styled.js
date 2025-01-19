import styled from "styled-components";

export const Movies = styled.div`
  background-color: #222121;
  border: 2px solid #ffd700;
  height: 660px;
  border-radius: 25px;
  position: relative;
`;

export const List = styled.ul`
  display: ${({ $open }) => ($open ? "block" : "none")};
  grid-row-start: 2;
  padding: 40px 0 0 20px;
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
  top: 20px;
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

export const Summary = styled.div`
  display: ${({ $open }) => ($open ? "flex" : "none")};
  flex-direction: column;
  text-align: center;
  padding: 10px;
  color: #ffffff;
  margin: 80px 30px -50px;
  width: 90%;
  border-radius: 25px;
  background-color: rgb(83, 77, 77);
  box-shadow: 16px 13px 14px 11px #00000066;
`;
