import { useParams, useNavigate } from "react-router-dom";
import Maze from "../components/Maze";

export default function MazePage() {   
  let { mazesize } = useParams();
  const size = Number(mazesize);
  if(size !== 32 && size !== 16) {
    window.location.assign("/");
  }
  return(<Maze mazesize={size}/>);
}
