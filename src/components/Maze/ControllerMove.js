import styled from "styled-components";
import { useEffect } from "react";

export default function ControllerMove({ move }) {
  useEffect(() => {
    window.addEventListener("keyup", function(event) {
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
    });}, []);
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
