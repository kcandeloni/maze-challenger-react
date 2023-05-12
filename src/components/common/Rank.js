import { ContainerIconMenu } from "./ContainerIconMenu";
import { GiTrophiesShelf } from "react-icons/gi";

export default function Rank({ select, setSelect }) {
  return(
    //<Link to="/rank">
    <ContainerIconMenu onClick={() => { !select ? setSelect("Em breve...") : setSelect(false);}}>
      <GiTrophiesShelf />
    </ContainerIconMenu>
    //</Link>
  );
}
