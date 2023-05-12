import styled from "styled-components";
import title from "../../assets/styles/images/Crop_MAZE-CHALLENGER.svg";

export default function TopBar() {
  return(
    <ContainerTopBar>
      <ContainerTitle src={title} />
    </ContainerTopBar>
  );
}

const ContainerTopBar = styled.div`
  height: 84px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContainerTitle = styled.img`
  width: 212px;
`;
