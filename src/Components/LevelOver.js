import { addDoc, collection } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { database } from "../firebase";
import Scores from "./Scores";
import styled from "styled-components";
import { Link } from "react-router-dom";

const LevelOver = (props) => {
  const { level, time } = props;
  const [inputValue, setInputValue] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setSubmitted(false);
  }, []);

  const convertTime = () => {
    let minutes = Math.floor(time / 60000);
    let seconds = ((time % 60000) / 1000).toFixed(0);
    return seconds === 60
      ? minutes + 1 + ":00"
      : minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
  };

  let correctTime = convertTime(time);
  let game;

  const update = (e) => {
    e.preventDefault();
    let levelCollection;
    if (inputValue === "") {
      return;
    }
    if (level === "Level 1") {
      levelCollection = "level-one-Scores";
    } else if (level === "Level 2") {
      levelCollection = "level-two-Scores";
    } else {
      levelCollection = "level-three-Scores";
    }
    const levelScores = collection(database, levelCollection);
    addDoc(levelScores, { name: inputValue, time: correctTime })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error.message);
      });

    setInputValue("");
    setSubmitted(true);
  };

  if (level === "Level 1") {
    game = "level one";
  } else if (level === "Level 2") {
    game = "level two";
  } else {
    game = "level three";
  }

  if (submitted) {
    return <Scores />;
  } else {
    return (
      <Wrapper className="endgame-container">
        <LevelOverContainer className="form-container">
          <h1>
            You finished {game}, with a time of {correctTime}!
          </h1>
          <div className="input-text">
            If you want to publish your time to the leaderboard please enter
            your name below
          </div>
          <FormContainer onSubmit={update}>
            <input
              placeholder="Enter name"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button id="publish-button" type="submit">
              Publish
            </button>
          </FormContainer>
          <LinkContainer>
            <Link to="/">Play</Link>
            <Link to="/scores">Go to Scores</Link>
          </LinkContainer>
        </LevelOverContainer>
      </Wrapper>
    );
  }
};

const Wrapper = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #c8c9c8;
  position: relative;
`;

const LevelOverContainer = styled.div`
  position: absolute;
  top: 10%;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  width: 50%;
  padding: 3rem;
  border: 2px solid black;
  background-color: white;

  h1 {
    font-size: 5rem;
    font-weight: 900;
  }

  .input-text {
    font-size: 3rem;
    font-weight: 400;
  }
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  input {
    border: 1px solid black;
    border-radius: 4px;
    padding: 0.5rem;
  }

  button {
    background-color: black;
    color: white;
    border-radius: 8px;
    padding: 1rem;
  }
`;

const LinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;

  a {
    color: white;
    background-color: black;
    padding: 1rem 2.5rem;
    border-radius: 8px;
  }
`;

export default LevelOver;
