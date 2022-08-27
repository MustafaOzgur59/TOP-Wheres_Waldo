import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const LevelSelect = ({ levels }) => {
  return (
    <Wrapper>
      {levels.map((level) => {
        return (
          <LevelWrapper key={level.name}>
            <h3>{level.name}</h3>
            <Link to={`/${level.name}`}>
              <StyledImage src={level.src} alt="levelImage" />
            </Link>
          </LevelWrapper>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding: 1rem;
  overflow-x: hidden;
`;

const LevelWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  transition: transform 500ms ease-in-out;
  &:hover {
    transform: scale(1.2);
  }
`;

const StyledImage = styled.img`
  height: 50rem;
  width: 35rem;
`;

export default LevelSelect;
