import styled from "styled-components";
import { BsInfo, BsGithub, BsWhatsapp, BsShareFill, BsCheckCircle } from "react-icons/bs";
import copy from "copy-to-clipboard";
import { ContainerIconMenu } from "./ContainerIconMenu";

export default function Info({ select, setSelect }) {
  function CopyLink() {
    return (
      <ContainerLink>
        <BsCheckCircle />
        <p>Copied link to clipboard!</p>
      </ContainerLink>);
  };
  function Contacts() {
    return(
      <>
        <ContainerLink>
          <BsGithub onClick={() => window.open("https://github.com/kcandeloni", "_blank")}/> 
          <p onClick={() => window.open("https://github.com/kcandeloni", "_blank")}>Kevin Candeloni</p>
        </ContainerLink>
        <ContainerLink>
          <BsWhatsapp onClick={() => window.open("https://api.whatsapp.com/send?text=https://maze-challenger.vercel.app/")}/> 
          <p onClick={() => window.open("https://api.whatsapp.com/send?text=https://maze-challenger.vercel.app/")}>Desafie os amigos!</p>
        </ContainerLink>
        <ContainerLink >
          <BsShareFill onClick={() => {copy("https://maze-challenger.vercel.app/"); setSelect(CopyLink);}}/> 
          <p onClick={() => {copy("https://maze-challenger.vercel.app/"); setSelect(CopyLink);}}>Desafie os amigos!</p>
        </ContainerLink>
      </>
    );
  }
  return(
    <ContainerIconMenu onClick={() => { !select ? setSelect(Contacts()) : setSelect(false);}}>
      <BsInfo />
    </ContainerIconMenu>
  );
}

const ContainerLink = styled.div`
  display: flex;
  align-items: center;
  width: 220px;
  p{
   cursor: pointer;
  }
  svg{
    cursor: pointer;
  }
  gap: 6px;
`;
