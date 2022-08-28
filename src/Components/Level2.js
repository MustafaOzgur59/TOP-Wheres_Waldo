import React, { useState } from "react";
import styled from "styled-components";
import ClickBox from "./ClickBox";

import wizard from "../assets/levels/level2/wizard.png";
import odlaw from "../assets/levels/level2/odlaw.png";
import waldo from "../assets/levels/level1/waldo.png";
import level2 from "../assets/levels/level2/level2.png";

const Level2 = ({
  levelSelections,
  toggleDropdownMenu,
  handleClick,
  levelItemsFound,
}) => {
  console.log("LevelItemsFound: ", levelItemsFound);
  const handleFound = (id) => {
    return levelItemsFound.indexOf(id) !== -1;
  };
  return (
    <Level2Container>
      <CharImageContainer>
        <StyledCharImg src={odlaw} isFound={handleFound("Odlaw")} />
        <StyledCharImg src={waldo} isFound={handleFound("Waldo")} />
        <StyledCharImg src={wizard} isFound={handleFound("Wizard")} />
      </CharImageContainer>
      <StyledLevelImg src={level2} onClick={(e) => handleClick(e)} />
    </Level2Container>
  );
};

const Level2Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const CharImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

const StyledCharImg = styled.img`
  flex-shrink: 1;
  width: 12rem;
  height: 12rem;
  border: 4px solid ${(props) => (props.isFound ? "green" : "red")};
`;

const StyledLevelImg = styled.img`
  width: 100%;
  height: auto;
`;
export default Level2;
