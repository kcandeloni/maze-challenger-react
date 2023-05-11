import styled from "styled-components";
import { GiBookmarklet } from "react-icons/gi";
import { ContainerIconMenu } from "./ContainerIconMenu";

export default function Rules({ setSelect }) {
  function ResumeRules() {
    return (
      <ContainerRules>
        <div>1 - Se você ocupar uma casa ativa(verde) você perde. (morre x_x)</div>
        <div>2 - A cada moviemento o cenário se altera.</div>
        <div>3 - A propagação das casas verdes consiste em que as células inativas transformam-se em ativas, se possuírem número de células adjacentes ativas maior do que 1 e menor do que 5. Do contrário, permanecem inativas.</div>
        <div>4 - Você ganha se chegar na última casa(laranja) do labirinto. (*.*)</div>
      </ContainerRules>);
  }
  return (
    <ContainerIconMenu onClick={() => setSelect(ResumeRules())}>
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
`;
