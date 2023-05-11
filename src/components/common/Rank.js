import { ContainerIconMenu } from "./ContainerIconMenu";
import { GiTrophiesShelf } from "react-icons/gi";

export default function Rank({ setSelect }) {
  return(
    //<Link to="/rank">
    <ContainerIconMenu onClick={() => setSelect("Em breve...")}>
      <GiTrophiesShelf />
    </ContainerIconMenu>
    //</Link>
  );
}
