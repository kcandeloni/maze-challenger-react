import styled from "styled-components";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { Link } from "react-router-dom";

import { ContainerIconMenu } from "./ContainerIconMenu";

export default function Options({ select, setSelect }) {
  function OptionsMaze() {
    return (
      <ContainerOp>
        <div><Link to="/maze/8">8x8</Link></div> 
        <div onClick={() => setSelect("Em breve...")}>16x16</div>
        <div onClick={() => setSelect("Em breve...")}>32x32</div>
        <div onClick={() => setSelect("Em breve...")}>random maze</div>
      </ContainerOp>
    );
  }
  return (
    <ContainerIconMenu onClick={() => { !select ? setSelect(OptionsMaze) : setSelect(false);}}>
      {select ? <FiChevronUp /> : <FiChevronDown />}
    </ContainerIconMenu>);
}

const ContainerOp = styled.div`
  text-decoration: none;
  font-size: 12px;
  display: flex;
  flex-direction: row;
  gap: 6px;
  word-break: normal;
  font-size: 16px;
  div{
    cursor: pointer;
  }
`;
