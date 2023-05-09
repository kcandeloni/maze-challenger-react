import { checkPosition } from "./checkPosition";

export function updateMaze(maze) {
  const newMaze = [];
  let newLine = [];
  for(let i = 0; i < maze.length; i++) {
    newLine = [];
    for(let j = 0; j < maze[i].length; j++) {
      newLine.push(checkPosition({ i, j, maze }));
    }
    newMaze.push(newLine);
  }
  return newMaze;
}
