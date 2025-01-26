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
export const Container = styled.div`
  padding-top: 150px;
`;
