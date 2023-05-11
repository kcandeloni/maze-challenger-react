import styled from "styled-components";
import { BsInfo, BsGithub } from "react-icons/bs";
import { ContainerIconMenu } from "./ContainerIconMenu";

export default function Info({ setSelect }) {
  function Contacts() {
    return(
      <div>
        <GitLink onClick={() => window.open("https://github.com/kcandeloni", "_blank")}/> Kevin Candeloni 
      </div>
    );
  }
  return(
    <ContainerIconMenu onClick={() => setSelect(Contacts())}>
      <BsInfo />
    </ContainerIconMenu>
  );
}

const GitLink = styled(BsGithub)`
  font-size: 16px;
  cursor: pointer;
`;
