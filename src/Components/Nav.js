import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { AiFillHome } from "react-icons/ai";

const Nav = () => {
  return (
    <NavWrapper>
      <StyledLink to={"/"}>
        <AiFillHome />
      </StyledLink>
      <StyledLink to={"/about"}>
        <h3>About</h3>
      </StyledLink>
      <StyledLink to={"/leaderboard"}>
        <h3>Scores</h3>
      </StyledLink>
    </NavWrapper>
  );
};

const NavWrapper = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 3rem;
  background-color: black;
  font-size: 2.5rem;
`;

const StyledLink = styled(Link)`
  color: white;
  :hover,
  :clicked,
  :checked {
    color: white;
  }
`;

export default Nav;
