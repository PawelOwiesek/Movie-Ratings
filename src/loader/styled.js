import styled from "styled-components";
import { ReactComponent as spinnerIcon } from "./spinner.svg";

export const Spinner = styled(spinnerIcon)`
  display: block;
  margin: 0 auto;
  margin-top: 120px;
  animation: spin 2s linear infinite;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
export const Container = styled.div``;

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h2`
  align-self: flex-start;
  margin: 56px 0 0 16px;
  font-size: 36px;
  font-weight: 600;
  line-height: 1.2;
  color: black;
`;
