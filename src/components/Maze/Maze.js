import { Link } from "react-router-dom";
import { useState } from "react";

import getMaze from "./../../services/serviceMaze";
import RenderMaze from "./RenderMeze";

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
    setMazeUpdated([...mazeUpdated]);
    setPositionUpdated({ ...position });
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
