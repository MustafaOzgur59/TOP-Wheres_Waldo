import React from "react";
import styled from "styled-components";
import LevelSelect from "./LevelSelect";
import Level1 from "../assets/levels/game1crop.jpg";
import Level2 from "../assets/levels/game2crop.jpg";
import Level3 from "../assets/levels/game3crop.jpg";

const Home = () => {
  const levels = [
    { src: Level1, name: "Level 1" },
    { src: Level2, name: "Level 2" },
    { src: Level3, name: "Level 3" },
  ];

  return (
    <HomeWrapper>
      <LevelSelect levels={levels} />
    </HomeWrapper>
  );
};

const HomeWrapper = styled.div`
  flex: 1;
  display: flex;
  min-height: 100%;
`;

export default Home;
