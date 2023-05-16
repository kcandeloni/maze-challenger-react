import { useState } from "react";
import { useEffect } from "react";
import { 
  BsCaretDownSquareFill,
  BsCaretUpSquareFill,
  BsCaretLeftSquareFill,
  BsCaretRightSquareFill
} from "react-icons/bs";
import { IoIosRefreshCircle } from "react-icons/io";
import { BsWhatsapp } from "react-icons/bs";

import getMaze from "./../../services/serviceMaze";
import RenderMaze from "./RenderMeze";
import { updateMaze } from "./updateMaze";
import Rules from "../common/Rules";
import Options from "../common/Options";
import Info from "../common/Info";
import Menu from "../common/Menu";
import Rank from "../common/Rank";
import { ContainerSelect } from "../common/ContainerSelect";
import { ContainerController } from "./ContainerController";
import TopBar from "../common/TopBar";
import ResultGame from "./ResultGame";

export default function Maze({ n }) {
  const maze = getMaze(n);
  const [mazeUpdated, setMazeUpdated] = useState(maze);
  const position = { line: 0, column: 0 };
  const [positionUpdated, setPositionUpdated] = useState(position);
  const [select, setSelect] = useState(false);

  function reset() {
    setMazeUpdated(maze);
    setPositionUpdated(position);
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
      if(event.keyCode === 0x20) {
        event.preventDefault();
        reset();
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
        <div className="buttonController">
          <BsCaretUpSquareFill onClick={() => move("up")} />
        </div>
        
        <div className="mid">
          <div className="buttonController">
            <BsCaretLeftSquareFill onClick={() => move("left")} />
          </div>
          <div className="buttonController">
            <BsCaretRightSquareFill onClick={() => move("right")} />
          </div>
        </div>
        <div className="buttonController">
          <BsCaretDownSquareFill onClick={() => move("down")} />
        </div>
        
      </ ContainerController>
    );
  }

  function endGame() {
    const state = mazeUpdated[positionUpdated.line][positionUpdated.column];
    if( state === 1 || state === 4) {
      return true;
    }
    return false;
  }
  function Result() {
    const [resultView, setResultView] = useState(true);
    function handleReset(event) {
      if (event.keyCode === 0x0D || event.keyCode === 0x20 || event.keyCode === 0x1B) {
        event.preventDefault();
        reset();
      }
    }
    useEffect(() => {
      window.addEventListener("keyup", handleReset);
      return () => {
        window.removeEventListener("keyup", handleReset);
      };
    }, []);
    const state = mazeUpdated[positionUpdated.line][positionUpdated.column];
    if(state === 4) {
      return(
        <>
          {resultView ? 
            <ResultGame setResultView={setResultView}> 
              <>
                <p>Congratulations!</p> 
                <p>You Win!!</p> 
                <div className="compartilhar">
                  <BsWhatsapp onClick={() => window.open("https://api.whatsapp.com/send?text=https://maze-challenger.vercel.app/")}/>
                  <p onClick={() => window.open("https://api.whatsapp.com/send?text=https://maze-challenger.vercel.app/")}>
                Desafie os amigos!
                  </p>
                </ div>       
                <div className="reset" onClick={() => reset()}>
                  <IoIosRefreshCircle />
                </div>
              </> 
            </ ResultGame> : 
            <ContainerController>
              <div className="reset" onClick={() => reset()}>
                <IoIosRefreshCircle />
              </div>
            </ContainerController>}
        </>);
    }
    return (
      <>
        {resultView ? 
          <ResultGame setResultView={setResultView}> 
            <>
              <>Lose</>
              <div className="reset" onClick={() => reset()}>
                <IoIosRefreshCircle />
                <p>reset</p>
              </div>
            </> 
          </ ResultGame> : 
          <ContainerController>
            <div className="reset" onClick={() => reset()}>
              <IoIosRefreshCircle />
            </div>
          </ContainerController>}
      </>);
  }

  return (
    <div>
      <TopBar />
      <Menu>
        <Options select={select} setSelect={setSelect}/>
        <div className="minimenu">
          <Rules select={select} setSelect={setSelect}/>
          <Rank select={select} setSelect={setSelect}/>
          <Info select={select} setSelect={setSelect}/>
        </div>
      </Menu>
      {select ? <ContainerSelect setSelect={setSelect}>{ select }</ ContainerSelect> : ""}
      <RenderMaze maze={mazeUpdated} position={positionUpdated} >  
        { endGame() ? <Result /> : <ControllerMove />}
      </ RenderMaze>

    </div>
  );
}
