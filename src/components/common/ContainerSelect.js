import styled from "styled-components";
import { BsXCircle } from "react-icons/bs";

export function ContainerSelect({ children, setSelect }) {
  return (
    <Container>
      <CustomCloseButton onClick={() => setSelect(false)}/>
      {children}
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  max-width: 372px;
  background-color: aliceblue;
  opacity: 0.5;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  gap: 6px;
  padding: 5px;
  word-break: normal;
  margin: 0px 0px 4px 0px;
  font-size: 16px;
`;

const CustomCloseButton = styled(BsXCircle)`
  position: absolute;
  top: 6px;
  right: 6px;
  cursor: pointer;
`;
