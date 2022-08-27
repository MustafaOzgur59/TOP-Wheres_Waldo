import React from "react";
import styled from "styled-components";

const LevelSelect = ({ levels }) => {
  return (
    <Wrapper>
      {levels.map((level) => {
        return (
          <LevelWrapper key={level.name}>
            <h3>{level.name}</h3>
            <StyledImage src={level.src} alt="levelImage" />
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
`;

const LevelWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;

const StyledImage = styled.img`
  height: 50rem;
  width: 35rem;
`;

export default LevelSelect;
