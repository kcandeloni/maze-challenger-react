import styled from "styled-components";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { Link } from "react-router-dom";

import { ContainerIconMenu } from "./ContainerIconMenu";

export default function Options({ select, setSelect }) {
  function OptionsMaze() {
    return (
      <ContainerOp>
        <div><Link to="/maze/8">8x8</Link></div> 
        <div><Link to="/maze/16">16x16</Link></div>
        <div><Link to="/maze/32">32x32</Link></div>
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
`;
