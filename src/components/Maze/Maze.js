import styled from "styled-components";

import { Link } from "react-router-dom";
import getMaze from "./../../services/serviceMaze";

import { useState } from "react";

import Line from "./Line";

function RenderMaze({ maze }) {
  return (
    <ContainerMaze>
      {maze.map(l => <Line key={Math.floor(Math.random() * 1000)} line={l}/>)}
    </ContainerMaze>
  );
}

export default function Maze({ n = 8 }) {
  const maze = getMaze(n);
  const [mazeUpdated, setMazeUpdated] = useState(maze);

  function updatedMaze(mazeN) {
    setMazeUpdated(getMaze(mazeN));
  }
  return (
    <div>
      <h1 onClick={() => updatedMaze(8)}>Maze 8</h1>
      <h1 onClick={() => updatedMaze(16)}>Maze 16</h1>
      <h1 onClick={() => updatedMaze(32)}>Maze 32</h1>
      <RenderMaze maze={mazeUpdated} />
      <Link to="/rank">Rank</Link>
    </div>
  );
}

const ContainerMaze = styled.div`
    margin: 0 auto;
    background: rgb(var(--background-maze-rgb));
    border-radius: 5px;
    padding: 2px;
`;
