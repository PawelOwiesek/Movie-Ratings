import { LogoContainer, Title } from "./styled";

function NavLogo() {
  return (
    <LogoContainer>
      <img style={{ width: "40px" }} src="/images/favicon.svg" alt="logo" />
      <Title>Movies Ratings</Title>
    </LogoContainer>
  );
}

export default NavLogo;
