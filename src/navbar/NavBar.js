import { LogoContainer, NavContainer, Results, Search } from "./styled";

function NavBar() {
  return (
    <NavContainer>
      <LogoContainer>
        <img style={{ width: "40px" }} src="/images/favicon.svg" alt="logo" />
        <h2>Movies Ratings</h2>
      </LogoContainer>
      <Search type="text" placeholder="Search movie..." />
      <Results>Found X results</Results>
    </NavContainer>
  );
}

export default NavBar;
