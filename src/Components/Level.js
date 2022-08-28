import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { database } from "../firebase";
import ClickBox from "./ClickBox";
import Level1 from "./Level1";
import Level2 from "./Level2";
import Level3 from "./Level3";
import LevelOver from "./LevelOver";

const Level = () => {
  const params = useParams();
  const [level, setLevel] = useState("");
  const [shown, setShown] = useState(false);
  const [location, setLocation] = useState([0, 0]);
  const [levelCoordinates, setLevelCoordinates] = useState([]);
  const [clickCoordinates, setClickCoordinates] = useState([]);
  const [levelItemsFound, setLevelItemsFound] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [startTimer, setStartTimer] = useState(null);

  const fetchGameCoords = async (level) => {
    console.log("fetch started");
    let collectionName;
    if (level === "Level 1") {
      collectionName = "Level 1";
    } else if (level === "Level 2") {
      collectionName = "Level 2";
    } else {
      collectionName = "Level 3";
    }
    const levelCoordsCollection = collection(database, collectionName);
    const coordsSnapshot = await getDocs(levelCoordsCollection);
    const fetchedLevelCoordinates = coordsSnapshot.docs.map((doc, index) => {
      console.log("Index: ", index, "Name: ", doc.id);
      return {
        data: doc.data(),
        id: doc.id,
      };
    });
    setLevelCoordinates(fetchedLevelCoordinates);
    console.log("fetch ended");
  };

  useEffect(() => {
    setLevel(params.id);
    fetchGameCoords(params.id);
    setGameOver(false);
    setLevelItemsFound([]);
    setStartTimer(new Date());
  }, []);

  useEffect(() => {
    if (level === "Level 1" && levelItemsFound.length === 5) {
      setGameOver(true);
    } else if (level === "Level 2" && levelItemsFound.length === 3) {
      setGameOver(true);
    } else if (level === "Level 3" && levelItemsFound.length === 3) {
      setGameOver(true);
    }
  }, [levelItemsFound]);

  useEffect(() => {
    console.log(`click coords updated ${clickCoordinates}`);
  }, [clickCoordinates]);

  const levelOneSelections = [
    "Waldo",
    "Quagmire",
    "Louise",
    "Patrick",
    "Dwight",
  ];
  const levelTwoSelections = ["Waldo", "Odlaw", "Wizard"];
  const levelThreeSelections = ["Waldo", "Odlaw", "Wizard"];

  const getClickCoordinates = (e) => {
    const y = Math.round(
      (e.nativeEvent.offsetY / e.nativeEvent.target.offsetHeight) * 100
    );
    const x = Math.round(
      (e.nativeEvent.offsetX / e.nativeEvent.target.offsetWidth) * 100
    );
    setClickCoordinates([x, y]);
    console.log(clickCoordinates);
    return { x, y };
  };

  const toggleDropdownMenu = (e) => {
    console.log("From toggleDropdownMenu");
    console.log(e.pageX, e.pageY);
    console.log("Shown: ", shown);
    if (shown === false) {
      setLocation([e.pageY, e.pageX]);
      setShown(true);
    } else {
      setLocation([e.pageY, e.pageX]);
      setShown(false);
    }
  };

  const checkMatch = (selection) => {
    let index;

    if (level === "Level 1") {
      switch (selection) {
        case "Dwight":
          index = 0;
          break;
        case "Louise":
          index = 1;
          break;
        case "Patrick":
          index = 2;
          break;
        case "Quagmire":
          index = 3;
          break;
        case "Waldo":
          index = 4;
          break;
        default:
          index = null;
      }
    } else {
      switch (selection) {
        case "Odlaw":
          index = 0;
          break;
        case "Waldo":
          index = 1;
          break;
        case "Wizard":
          index = 2;
          break;
        default:
          index = null;
      }
    }

    if (
      clickCoordinates[0] - levelCoordinates[index].data.x < 2 &&
      clickCoordinates[1] - levelCoordinates[index].data.y < 2
    ) {
      console.log("match");
      setLevelItemsFound((state) => [...state, levelCoordinates[index].id]);
      console.log(`${levelCoordinates[index].id} found`);
    } else {
      console.log("not match");
    }
  };

  const handleImageClick = (e) => {
    console.log("clicked the image");
    getClickCoordinates(e);
    toggleDropdownMenu(e);
    console.log(levelCoordinates[0].data.x);
  };

  if (gameOver) {
    const elapsedTime = new Date() - startTimer;
    return <LevelOver level={level} time={elapsedTime} />;
  }

  if (level === "Level 1")
    return (
      <>
        <Level1
          levelSelections={levelOneSelections}
          toggleDropdownMenu={toggleDropdownMenu}
          handleClick={handleImageClick}
          levelItemsFound={levelItemsFound}
        />
        <ClickBox
          top={location[0]}
          left={location[1]}
          coordinates={clickCoordinates}
          selections={levelOneSelections}
          onClickHandler={checkMatch}
          setShown={setShown}
          shown={shown}
        />
      </>
    );
  else if (level === "Level 2")
    return (
      <>
        <Level2
          levelSelections={levelTwoSelections}
          toggleDropdownMenu={toggleDropdownMenu}
          handleClick={handleImageClick}
          levelItemsFound={levelItemsFound}
        />
        <ClickBox
          top={location[0]}
          left={location[1]}
          coordinates={clickCoordinates}
          selections={levelTwoSelections}
          onClickHandler={checkMatch}
          setShown={setShown}
          shown={shown}
        />
      </>
    );
  else if (level === "Level 3")
    return (
      <>
        <Level3
          levelSelections={levelThreeSelections}
          toggleDropdownMenu={toggleDropdownMenu}
          handleClick={handleImageClick}
          levelItemsFound={levelItemsFound}
        />
        <ClickBox
          top={location[0]}
          left={location[1]}
          coordinates={clickCoordinates}
          selections={levelThreeSelections}
          onClickHandler={checkMatch}
          setShown={setShown}
          shown={shown}
        />
      </>
    );
};

export default Level;
