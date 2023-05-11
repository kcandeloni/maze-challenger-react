import styled from "styled-components";

export function ContainerSelect({ children, ...otherProps }) {
  return (
    <Container { ...otherProps }>
      {children}
    </Container>
  );
}

const Container = styled.div`
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
  margin: 0px 0px 4px 0px;
`;
