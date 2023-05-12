import styled from "styled-components";
import { BsFill0SquareFill, BsDice1, BsDice2, BsDice3, BsDice4 } from "react-icons/bs";
import { GiBookmarklet, GiQueenCrown, GiPodiumWinner, GiArrowed } from "react-icons/gi";
import { ContainerIconMenu } from "./ContainerIconMenu";

export default function Rules({ select, setSelect }) {
  function ResumeRules() {
    return (
      <ContainerRules>
        <div className="title-rules">Regras</div>
        <div><BsDice1 /> - Se polvo ocupar uma casa ativa <BsFill0SquareFill className="cube-green"/> (verde) você perde. <GiArrowed /></div>
        <div><BsDice2 /> - A cada moviemento o cenário se altera.</div>
        <div><BsDice3 /> - A propagação das casas verdes consiste em que as casas inativas transformam-se em ativas, se possuírem número de casas adjacentes ativas maior do que 1 e menor do que 5. Do contrário, permanecem ou se tornam inativas.</div>
        <div><BsDice4 /> - Você vence o desafio se o polvo chegar na última casa <BsFill0SquareFill className="cube-orange"/> (laranja) do labirinto. <GiPodiumWinner /> <GiQueenCrown className="cube-gold"/> </div>
      </ContainerRules>);
  }
  return (
    <ContainerIconMenu onClick={() => { !select ? setSelect(ResumeRules()) : setSelect(false);}}>
      <GiBookmarklet />
    </ContainerIconMenu>
  );
}

const ContainerRules = styled.div`
  font-size: 12px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  word-break: normal;
  font-size: 16px;
  .title-rules{
    display: flex;
    justify-content: center;
  }
  .cube-green{
    background-color: rgb(var(--active-bloc-maze-rgb));
    color: rgb(var(--active-bloc-maze-rgb));
    border-radius: 5px;
  }
  .cube-orange{
    background-color: rgb(var(--end-bloc-maze-rgb));
    color: rgb(var(--end-bloc-maze-rgb));
    border-radius: 5px;
  }
  .cube-gold{
    color: gold;
    border: 1px solid #0000;
  }
`;
