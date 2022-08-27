import React from "react";
import styled from "styled-components";

const ClickBox = (props) => {
  const {
    top,
    left,
    coordinates,
    selections,
    onClickHandler,
    setShown,
    shown,
  } = props;
  console.log(window.outerHeight);
  return (
    <BoxWrapper shown={shown} top={top} left={left}>
      {selections.map((selection) => {
        return (
          <SelectionBtn
            key={selection}
            onClick={() => {
              console.log(selection, coordinates[0], coordinates[1]);
              onClickHandler(selection);
              setShown(!shown);
            }}
          >
            {selection}
          </SelectionBtn>
        );
      })}
    </BoxWrapper>
  );
};

const BoxWrapper = styled.div`
  display: grid;
  position: absolute;
  width: 25rem;
  font-size: 2rem;
  top: ${(props) =>
    props.top > window.innerHeight - window.innerHeight / 5
      ? props.top - window.innerHeight / 7
      : props.top}px;
  left: ${(props) =>
    props.left > window.innerWidth - window.innerWidth / 10
      ? props.left - window.innerWidth / 7
      : props.left}px;
  border: 2px solid black;
  background: black;
  display: ${(props) => (props.shown ? "block" : "none")};
`;

const SelectionBtn = styled.button`
  padding: 0.5rem;
  border: 0;
  font-weight: 700;
  width: 100%;
  color: black;
  display: block;
  &:hover {
    color: white;
    background: black;
  }
`;
export default ClickBox;
