import { Warning, Container, Title, Info } from "./styled";

export const Error = () => {
  return (
    <>
      <Container>
        <Title>Ooops! Something went wrong... </Title>
        <Info>Please check your network connection and try again</Info>{" "}
        <Warning />
      </Container>
    </>
  );
};
