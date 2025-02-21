import styled from "styled-components";

export const Movies = styled.section`
  background-color: #222121;
  border: 2px solid #ffd700;
  height: fit-content;
  border-radius: 25px;
  position: relative;

  @media (max-width: 1240px) {
    max-width: 600px;
    font-size: 18px;
  }

  @media (max-width: 767px) {
    max-width: 300px;
    font-size: 18px;
  }

  @media (max-width: 450px) {
    max-width: 150px;
    font-size: 16px;
  }
`;

export const List = styled.ul`
  display: ${({ $open }) => ($open ? "block" : "none")};
  grid-row-start: 2;
  padding: 40px 0 0 20px;
  list-style: none;
  color: #ffffff;
  margin-top: 40px;

  @media (max-width: 1080px) {
    display: ${({ $open }) => ($open ? "flex" : "none")};
    flex-direction: column;
  }
  @media (max-width: 768px) {
    max-width: 340px;
    padding: 0;
    margin-top: 80px;
  }
  @media (max-width: 650px) {
    padding: 40px 0 20px;
    max-width: 220px;
  }
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  margin: 30px;
  gap: 25px;
  font-size: 18px;
  margin-bottom: 25px;
  border-radius: 30px;
  position: relative;

  &:hover {
    box-shadow: 16px 13px 14px 11px #00000066;
  }

  @media (max-width: 1080px) {
    max-width: 420px;
    border: 2px solid #ffd700;
    border-radius: 0;
  }
  @media (max-width: 768px) {
    margin: 5px;
    padding: 5px;
  }
  @media (max-width: 450px) {
    flex-direction: column;
    gap: 5px;
    margin: 5px;
  }
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

  @media (max-width: 1080px) {
    right: 5px;
    top: 10px;
    font-size: 16px;
  }
`;

export const MovieDescription = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 1080px) {
    max-width: 300px;
  }
  @media (max-width: 768px) {
    max-width: 250px;
  }
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
  background-color: #534d4d;
  box-shadow: 16px 13px 14px 11px #00000066;

  @media (max-width: 1080px) {
    max-width: 450px;
    margin: 50px 30px -60px;
  }

  @media (max-width: 768px) {
    margin: 50px 7px -60px;
  }
`;

export const MovieTitle = styled.h3`
  padding: 0;
  margin: 0;

  @media (max-width: 1240px) {
    font-size: 18px;
    word-wrap: break-word;
    max-width: 240px;
  }

  @media (max-width: 1080px) {
    font-size: 18px;
    word-wrap: break-word;
    max-width: 200px;
  }
  @media (max-width: 768px) {
    font-size: 14px;
    max-width: 160px;
  }
`;

export const MovieRatingContainer = styled.p`
  display: grid;
  grid-template-columns: repeat(3, 180px);
  gap: 20px;

  @media (max-width: 1240px) {
    display: flex;
    font-size: 16px;
    gap: 8px;
  }

  @media (max-width: 1024px) {
    display: flex;
    font-size: 16px;
    gap: 8px;
  }

  @media (max-width: 767px) {
    display: flex;
    font-size: 12px;
    gap: 4px;
  }

  @media (max-width: 450px) {
    display: flex;
    font-size: 8px;
    gap: 4px;
  }
`;

export const Rating = styled.span`
  display: flex;
  align-items: center;
`;

export const RatingDescription = styled.span`
  @media (max-width: 1080px) {
    display: none;
  }
`;

export const RemoveButton = styled.button`
  position: absolute;
  right: 7px;
  top: 7px;
  border: none;
  height: 30px;
  width: 30px;
  border-radius: 100%;
  background-color: crimson;
  color: #ffffff;
  font-size: 18px;

  @media (max-width: 1080px) {
    right: 2px;
    top: 2px;
    font-size: 14px;
    height: 25px;
    width: 25px;
  }
  @media (max-width: 768px) {
    font-size: 10px;
    height: 20px;
    width: 20px;
  }
`;

export const StarIcon = styled.span`
  font-size: 25px;
  @media (max-width: 1080px) {
    font-size: 14px;
  }
`;

export const Poster = styled.img`
  max-width: 175px;

  @media (max-width: 1240px) {
    max-width: 90px;
  }

  @media (max-width: 1080px) {
    max-width: 80px;
    margin: 5px;
  }

  @media (max-width: 768px) {
    max-width: 50px;
  }
`;
