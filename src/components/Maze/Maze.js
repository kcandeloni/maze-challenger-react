import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";
import { GiOctopus } from "react-icons/gi";

import getMaze from "./../../services/serviceMaze";
import Line from "./Line";
import ControllerMove from "./ControllerMove";

function RenderMaze({ maze, position, move }) {
  return (
    <ContainerMaze>
      {maze.map((l, index) => <Line key={index} line={l}/>)}
      <ContainerPosition {...position} ><GiOctopus /></ContainerPosition>
      <ControllerMove move={move}/>
    </ContainerMaze>
  );
}

export default function Maze({ n }) {
  const maze = getMaze(n);
  const [mazeUpdated, setMazeUpdated] = useState(maze);
  const position = { line: 0, column: 0 };
  const [positionUpdated, setPositionUpdated] = useState(position);
  function updatedMaze(mazeN) {
    setMazeUpdated(getMaze(mazeN));
    setPositionUpdated({ ...position });
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
    setMazeUpdated([...mazeUpdated]);
    setPositionUpdated({ ...position });
    console.log(position);
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
      <RenderMaze maze={mazeUpdated} position={positionUpdated} move={move}/>
      <Link to="/rank">Rank</Link>
    </div>
  );
}

const ContainerMaze = styled.div`
    position: relative;
    margin: 0 auto;
    background: rgb(var(--background-maze-rgb));
    border-radius: 5px;
    padding: 2px;
`;

const ContainerPosition = styled.div`
  font-size: 42px;
  position: absolute;
  ${props => {
    return `
    top: ${(props.line * 46) + 4}px;
    `;
  }}
  ${props => {
    return `
    left: ${(props.column * 46) + 4}px;
    `;
  }}
  width: 42px;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
