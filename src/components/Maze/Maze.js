import { Link } from "react-router-dom";
import { useState } from "react";

import styled from "styled-components";
import { useEffect } from "react";

import getMaze from "./../../services/serviceMaze";
import RenderMaze from "./RenderMeze";
import { updateMaze } from "./updateMaze";

export default function Maze({ n }) {
  const maze = getMaze(n);
  const [mazeUpdated, setMazeUpdated] = useState(maze);
  const position = { line: 0, column: 0 };
  const [positionUpdated, setPositionUpdated] = useState(position);

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

  return (
    <div>
      <Link to="/maze/8">
        <h1>Maze 8</h1>
      </Link>
      <Link to="/maze/16">
        <h1>Maze 16</h1>
      </Link>
      <Link to="/maze/32">
        <h1>Maze 32</h1>
      </Link>
      <RenderMaze maze={mazeUpdated} position={positionUpdated} >
        <ControllerMove />  
      </ RenderMaze>
      <Link to="/rank">Rank</Link>
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
`;
