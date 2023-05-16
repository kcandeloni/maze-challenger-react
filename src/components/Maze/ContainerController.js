import styled from "styled-components";

export const ContainerController = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  height: 112px;
  width: 112px;
  background-color: aliceblue;
  opacity: 0.5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  gap: 0px;
  .buttonController{
    margin: 2px;
    border-radius: 5px;
    background-color: rgb(var(--active-bloc-maze-rgb));
    &:hover{
      scale: 1.1;
    }
    cursor: pointer;
  }
  .mid{
    display: flex;
    gap: 22px;
  }
  .reset{
    font-size: 52px;
    &:hover{
      scale: 1.1;
    }
    cursor: pointer;
  }
`;
