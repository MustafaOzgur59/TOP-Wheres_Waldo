import React, { useState } from "react";
import styled from "styled-components";
import ClickBox from "./ClickBox";
import dwight from "../assets/levels/level1/dwight.png";
import quagmire from "../assets/levels/level1/quagmire.png";
import louise from "../assets/levels/level1/louise.png";
import patrick from "../assets/levels/level1/patrick.png";
import waldo from "../assets/levels/level1/waldo.png";
import level1 from "../assets/levels/level1/level1.png";

const Level1 = ({
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
    <Level1Container>
      <CharImageContainer>
        <StyledCharImg src={dwight} isFound={handleFound("Dwight")} />
        <StyledCharImg src={louise} isFound={handleFound("Louise")} />
        <StyledCharImg src={patrick} isFound={handleFound("Patrick")} />
        <StyledCharImg src={quagmire} isFound={handleFound("Quagmire")} />
        <StyledCharImg src={waldo} isFound={handleFound("Waldo")} />
      </CharImageContainer>
      <StyledLevelImg src={level1} onClick={(e) => handleClick(e)} />
    </Level1Container>
  );
};

const Level1Container = styled.div`
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
export default Level1;
