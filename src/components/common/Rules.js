import styled from "styled-components";
import { useState } from "react";

export default function Rules() {
  const [rulesState, setRulesState] = useState(false);
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
    <div onClick={() => setRulesState(!rulesState)}>
      <p>Rules</p>
      {rulesState ? <ResumeRules /> : ""}
    </div>
  );
}

const ContainerRules = styled.div`
  max-width: 372px;
  font-size: 12px;
  background-color: aliceblue;
  opacity: 0.5;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  gap: 6px;
  padding: 5px;
  word-break: normal;
`;
