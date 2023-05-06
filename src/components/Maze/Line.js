import styled from "styled-components";
import Bloc from "./Bloc";

export default function Line({ line }) {
  return (
    <ContainerLine>
      {line.map(b => <Bloc key={Math.floor(Math.random() * 10000)} b={b} />)}
    </ContainerLine>
  );
}

const ContainerLine = styled.div`
    border-radius: 5px;
    display: flex;
    flex-direction: row;
`;
