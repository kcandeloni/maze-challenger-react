import styled from "styled-components";
import { BsX } from "react-icons/bs";

export default function ResultGame({ children, setResultView }) {
  return(
    <ContainerResult>
      <CustomCloseButton onClick={() => setResultView(false)}/>
      { children }
    </ContainerResult>
  );
}

export const ContainerResult = styled.div`
  position: absolute;
  top: calc(50% - 71px);
  left: calc(50% - 100px);
  width: 200px;
  height: 142px;
  background-color: rgb(var(--bloc-maze-rgb));
  border: 1px solid;
  border-image: linear-gradient(to bottom, #2af598, #009efd) 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 16px;
  .reset{
    font-size: 32px;
    opacity: 0.75;
    svg{
      cursor: pointer;
    }
    p{
      font-size: 12px;
      text-align: center;
      cursor: pointer;
    }
  }
  .compartilhar{
    display: flex;
    gap: 6px;
    font-size: 12px;
    cursor: pointer;
  }
`;

const CustomCloseButton = styled(BsX)`
  position: absolute;
  top: 6px;
  right: 6px;
  cursor: pointer;
`;
