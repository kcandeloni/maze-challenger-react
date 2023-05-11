import { useState } from "react";

import styled from "styled-components";
import { useEffect } from "react";

import getMaze from "./../../services/serviceMaze";
import RenderMaze from "./RenderMeze";
import { updateMaze } from "./updateMaze";
import Rules from "../common/Rules";
import Options from "../common/Options";
import Info from "../common/Info";
import Menu from "../common/Menu";
import Rank from "../common/Rank";
import { ContainerSelect } from "../common/ContainerSelect";

export default function Maze({ n }) {
  const maze = getMaze(n);
  const [mazeUpdated, setMazeUpdated] = useState(maze);
  const position = { line: 0, column: 0 };
  const [positionUpdated, setPositionUpdated] = useState(position);
  const [select, setSelect] = useState(false);

  function reset() {
    setMazeUpdated(maze);
    setPositionUpdated(position);
  }

  function move(direction = "left") {
    const position = positionUpdated;
    function isInvalid(value) {
      if(value < 0)return true;
      if(value >= mazeUpdated[0].length)return true;
      return false;
    }
    if(direction === "right") {
      if(isInvalid(position.column + 1))return;
      position.column++;
    }
    if(direction === "left") {
      if(isInvalid(position.column - 1))return;
      position.column--;
    }
    if(direction === "up") {
      if(isInvalid(position.line - 1))return;
      position.line--;
    }
    if(direction === "down") {
      if(isInvalid(position.line + 1))return;
      position.line++;
    }
    const newMaze = updateMaze(mazeUpdated);
    setMazeUpdated([ ...newMaze]);
    setPositionUpdated({ ...position });
  }

  function ControllerMove() {
    function handleKeyUp(event) {
      if (event.keyCode === 0x27) {
        event.preventDefault();
        move("right");
      }
      if (event.keyCode === 0x25) {
        event.preventDefault();
        move("left");
      }
      if (event.keyCode === 0x26) {
        event.preventDefault();
        move("up");
      }
      if (event.keyCode === 0x28) {
        event.preventDefault();
        move("down");
      }
      if(event.keyCode === 0x20) {
        event.preventDefault();
        reset();
      }
    }
    useEffect(() => {
      window.addEventListener("keyup", handleKeyUp);
      return () => {
        window.removeEventListener("keyup", handleKeyUp);
      };
    }, []);
    return (
      <ContainerController>
        <button onClick={() => move("up")}>up</button>
        <span>
          <button onClick={() => move("left")}>left</button>
          <button onClick={() => move("right")}>right</button>
        </span>
        <button onClick={() => move("down")}>donw</button>
      </ ContainerController>
    );
  }

  function endGame() {
    const state = mazeUpdated[positionUpdated.line][positionUpdated.column];
    if( state === 1 || state === 4) {
      return true;
    }
    return false;
  }
  function Result() {
    function handleReset(event) {
      if (event.keyCode === 0x0D || event.keyCode === 0x20 || event.keyCode === 0x1B) {
        event.preventDefault();
        reset();
      }
    }
    useEffect(() => {
      window.addEventListener("keyup", handleReset);
      return () => {
        window.removeEventListener("keyup", handleReset);
      };
    }, []);
    const state = mazeUpdated[positionUpdated.line][positionUpdated.column];
    if(state === 4) {
      return (<ContainerController>
        <>Win</>
        <button onClick={() => reset()}>
          Reset
        </button>
      </ContainerController>);
    }
    return (
      <ContainerController>
        <>Lose</>
        <button onClick={() => reset()}>
          Reset
        </button>
      </ContainerController>);
  }

  return (
    <div>
      <Menu>
        <Options select={select} setSelect={setSelect}/>
        <div className="minimenu">
          <Rules setSelect={setSelect}/>
          <Rank setSelect={setSelect}/>
          <Info setSelect={setSelect}/>
        </div>
      </Menu>
      {select ? <ContainerSelect onClick={() => setSelect(false)}>{ select }</ ContainerSelect> : ""}
      <RenderMaze maze={mazeUpdated} position={positionUpdated} >  
        { endGame() ? <Result /> : <ControllerMove />}
      </ RenderMaze>

    </div>
  );
}

const ContainerController = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  height: 142px;
  width: 142px;
  background-color: aliceblue;
  opacity: 0.5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  button{
    margin: 8px;
  }
`;
