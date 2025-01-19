import { LogoContainer } from "./styled";

function NavLogo() {
  return (
    <LogoContainer>
      <img style={{ width: "40px" }} src="/images/favicon.svg" alt="logo" />
      <h2>Movies Ratings</h2>
    </LogoContainer>
  );
}

export default NavLogo;
