import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { database } from "../firebase";
import styled from "styled-components";

export const Scores = () => {
  const [levelOneScores, setLevelOneScores] = useState([]);
  const [levelTwoScores, setLevelTwoScores] = useState([]);
  const [levelThreeScores, setLevelThreeScores] = useState([]);

  const fetchScoresOne = async () => {
    const scoresCollection = collection(database, "level-one-Scores");
    const scoresSnapshot = await getDocs(scoresCollection);
    const fetchedScores = scoresSnapshot.docs.map((doc) => ({
      data: doc.data(),
      id: doc.id,
    }));
    setLevelOneScores(fetchedScores);
  };

  const fetchScoresTwo = async () => {
    const scoresCollection = collection(database, "level-two-Scores");
    const scoresSnapshot = await getDocs(scoresCollection);
    const fetchedScores = scoresSnapshot.docs.map((doc) => ({
      data: doc.data(),
      id: doc.id,
    }));
    setLevelTwoScores(fetchedScores);
  };

  const fetchScoresThree = async () => {
    const scoresCollection = collection(database, "level-three-Scores");
    const scoresSnapshot = await getDocs(scoresCollection);
    const fetchedScores = scoresSnapshot.docs.map((doc) => ({
      data: doc.data(),
      id: doc.id,
    }));
    setLevelThreeScores(fetchedScores);
  };

  useEffect(() => {
    fetchScoresOne();
    fetchScoresTwo();
    fetchScoresThree();
  }, []);

  return (
    <ScoresWrapper>
      <LevelScores className="level-one">
        <Header>Level One</Header>
        <NameTime>
          <h4 className="id">ID:</h4>
          <h4>Name:</h4>
          <h4 className="time">Time:</h4>
        </NameTime>
        {/* loop through database and return Scores */}
        {levelOneScores.map((entry, i) => {
          return (
            <NameTime className="entry" key={entry.id}>
              <div className="id">{i + 1}</div>
              <div>{entry.data.name}</div>
              <div className="time">{entry.data.time}</div>
            </NameTime>
          );
        })}
      </LevelScores>
      <LevelScores className="level-two">
        <Header>Level Two</Header>
        <NameTime>
          <h4 className="id">ID:</h4>
          <h4>Name:</h4>
          <h4 className="time">Time:</h4>
        </NameTime>

        {/* loop through database and return Scores */}
        {levelTwoScores.map((entry, i) => {
          return (
            <NameTime className="entry" key={entry.id}>
              <div className="id">{i + 1}</div>
              <div>{entry.data.name}</div>
              <div className="time">{entry.data.time}</div>
            </NameTime>
          );
        })}
      </LevelScores>
      <LevelScores className="level-three">
        <Header id="Scores-header">Level Three</Header>
        <NameTime>
          <h4 className="id">ID:</h4>
          <h4>Name:</h4>
          <h4 className="time">Time:</h4>
        </NameTime>
        {/* loop through database and return Scores */}
        {levelThreeScores.map((entry, i) => {
          return (
            <NameTime className="entry" key={entry.id}>
              <div className="id">{i + 1}</div>
              <div>{entry.data.name}</div>
              <div className="time">{entry.data.time}</div>
            </NameTime>
          );
        })}
      </LevelScores>
    </ScoresWrapper>
  );
};

const ScoresWrapper = styled.div`
  background-color: bisque;
  flex-grow: 1;
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 1rem;
  padding: 2rem;
`;

const LevelScores = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 50px;
  grid-auto-rows: 25px;
  text-align: center;
  border: 2px solid black;
  border-collapse: collapse;
`;

const Header = styled.h1`
  font-size: 5rem;
  border-bottom: 2px solid #000;
  font-family: JetBrains Mono, monospace;
  grid-column: span 2;
`;

const NameTime = styled.div`
  grid-column: span 2;
  border-bottom: 2px solid black;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;

  * {
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 40%;
  }

  .time {
    border-left: 2px solid black;
  }

  .id {
    width: 5rem;
    flex-grow: 0;
    border-right: 2px solid black;
    padding: 0 2rem;
  }
`;
export default Scores;
