import styled from "styled-components";

export default function Bloc({ b }) {
  if(b === 0) {
    return(
      <ContainerBloc/>
    );
  }
  if(b === 1) {
    return(
      <ContainerBloc className="active"></ContainerBloc>
    );
  }
  if(b === 2) {
    return(
      <ContainerBloc></ContainerBloc>
    );
  }
  if(b === 3) {
    return(
      <ContainerBloc className="init"></ContainerBloc>
    );
  }
  if(b === 4) {
    return(
      <ContainerBloc className="end"></ContainerBloc>
    );
  }
  if(b === 5) {
    return(
      <ContainerBloc className="init"></ContainerBloc>
    );
  }
  if(b === 6) {
    return(
      <ContainerBloc className="end"></ContainerBloc>
    );
  }
  return(
    <ContainerBloc/>
  );
}

const ContainerBloc = styled.div`
    background: rgb(var(--bloc-maze-rgb));
    width: 42px;
    height: 42px;
    border-radius: 5px;
    margin: 2px 2px;
    display: flex;
    align-items: center;
    justify-content: center;
    &.active{
        background: rgb(var(--active-bloc-maze-rgb));
    }
    &.init{
        background: rgb(var(--init-bloc-maze-rgb));
    }
    &.end{
        background: rgb(var(--end-bloc-maze-rgb));
    }
`;
