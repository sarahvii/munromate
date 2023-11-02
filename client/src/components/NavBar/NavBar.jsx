import { Link } from "react-router-dom";
import styled from "styled-components";

const NavBar = () => {
  return (
    <Wrapper>
      <Title>Munro Mate</Title>
      <Nav>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/munros">Munros</StyledLink>
        <StyledLink to="/tohikelist">To Hike</StyledLink>
      </Nav>
    </Wrapper>
  );
};

export default NavBar;

const Title = styled.h1`
  font-size: 2em;
  color: #ffffff;
  margin: 0;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;

const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em 2em;
  background: #333;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  box-sizing: border-box;
`;

const Nav = styled.nav`
  display: flex;
  gap: 1em;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #ffffff;
  font-weight: bold;
  transition: color 0.3s;

  &:hover {
    color: #BF4F74;
    text-decoration: none;
  }
`;

