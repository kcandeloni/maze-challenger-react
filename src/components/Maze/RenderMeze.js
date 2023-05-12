import styled from "styled-components";
import { GiOctopus } from "react-icons/gi";

import Line from "./Line";

export default function RenderMaze({ maze, position, children }) {
  return (
    <ContainerMaze>
      {maze.map((l, index) => <Line key={index} line={l}/>)}
      <ContainerPosition {...position} ><GiOctopus /></ContainerPosition>
      {children}
    </ContainerMaze>
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
