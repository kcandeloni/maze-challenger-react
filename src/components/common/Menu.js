import styled from "styled-components";

export default function Menu({ children }) {
  return (
    <ContainerMenu>
      {children}
    </ContainerMenu>);
}

const ContainerMenu = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 4px auto;
  .minimenu{
    display: flex;
    gap: 4px;
  }
`;
