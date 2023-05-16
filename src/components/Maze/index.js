import Container from "../common/Container";
import Maze from "./Maze";

function ContainerMaze({ mazesize = 8 }) {
  const opMaze = {
    8: <Maze n={8} />,
    16: <Maze n={16} />,
    32: <Maze n={32} />,
  };

  return (
    <Container>
      {opMaze[mazesize]}
    </ Container>
  );
}

export default ContainerMaze;
