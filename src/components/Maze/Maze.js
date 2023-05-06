import styled from "styled-components";
import { Link } from "react-router-dom";
import getMaze from "./../../services/serviceMaze";
import { useState } from "react";
import Line from "./Line";

function RenderMaze({ maze, position }) {
  return (
    <ContainerMaze>
      {maze.map(l => <Line key={Math.floor(Math.random() * 1000)} line={l}/>)}
      <ContainerPosition {...position} >@</ContainerPosition>
    </ContainerMaze>
  );
}

export default function Maze({ n = 8 }) {
  const maze = getMaze(n);
  const [mazeUpdated, setMazeUpdated] = useState(maze);
  let position = { line: 0, column: 0 };
  const [positionUpdated, setPositionUpdated] = useState(position);
  function updatedMaze(mazeN) {
    setMazeUpdated(getMaze(mazeN));
  }

  function move(direction = "left") {
    position = positionUpdated;
    function validMove(value) {
      if(value < 0)return false;
      if(value >= mazeUpdated[0].length)return false;
      return true;
    }
    if(direction === "right") {
      if(validMove(position.column + 1)) {
        position.column++;
      }
    }
    if(direction === "left") {
      if(validMove(position.column - 1)) {
        position.column--;
      }
    }
    if(direction === "up") {
      if(validMove(position.line - 1)) {
        position.line--;
      }
    }
    if(direction === "down") {
      if(validMove(position.line + 1)) {
        position.line++;
      }
    }
    setMazeUpdated([...mazeUpdated]);
    setPositionUpdated(position);
  }
  return (
    <div>
      <h1 onClick={() => updatedMaze(8)}>Maze 8</h1>
      <h1 onClick={() => updatedMaze(16)}>Maze 16</h1>
      <h1 onClick={() => updatedMaze(32)}>Maze 32</h1>
      <RenderMaze maze={mazeUpdated} position={positionUpdated} />
      <button onClick={() => move("right")}>move test</button>
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
