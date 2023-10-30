import { Link } from "react-router-dom";
import styled from "styled-components";

const NavBar = () => {
  return (
    <Wrapper>
      <Title>Munro Mate</Title>
      <Nav>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/munros">View All Munros</StyledLink>
        <StyledLink to="/tohikelist">View Munros to Hike</StyledLink>
      </Nav>
    </Wrapper>
  );
};

export default NavBar;

const Title = styled.h1`
  font-size: 2.5em;
  text-align: center;
  color: #BF4F74;
  margin-bottom: 0.5em;
`;

const Wrapper = styled.section`
  padding: 1em;
  background: black;
  text-align: center;
`;

const Nav = styled.nav`
  display: inline-block;
`;

const StyledLink = styled(Link)`
  margin: 0 1em;
  text-decoration: none;
  color: white;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;
