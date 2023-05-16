import styled from "styled-components";
import { GiOctopus } from "react-icons/gi";
import { GiPirateGrave } from "react-icons/gi";

import Line from "./Line";

export default function RenderMaze({ maze, position, children }) {
  let person = <GiOctopus />;
  if(maze[position.line][position.column] === 1) person = <DeadOctopus />;
  return (
    <ContainerMaze>
      {maze.map((l, index) => <Line key={index} line={l}/>)}
      <ContainerPosition {...position} >{person}</ContainerPosition>
      {children}
    </ContainerMaze>
  );
}

const DeadOctopus = styled(GiPirateGrave)`
  border-radius: 5px;
  transition: all 1s;
  font-size: 28px;
`;

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
