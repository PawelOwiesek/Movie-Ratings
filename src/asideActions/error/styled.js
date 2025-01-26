import styled from "styled-components";
import { ReactComponent as warningIcon } from "./warning.svg";

export const Container = styled.div`
  display: flex;
  gap: 24px;
  margin-top: 24px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
`;

export const Warning = styled(warningIcon)`
  display: block;
  margin: 0 auto;
  margin-top: 110px;
`;

export const Title = styled.h2`
  font-size: 36px;
  font-weight: 600;
  line-height: 1.2;
`;

export const Info = styled.p`
  font-size: 22px;
  font-weight: 500;
  line-height: 1.3;
  margin: 0px;
`;
