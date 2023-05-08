import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Maze from "./components/Maze";
import MazePage from "./pages/MazePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Maze />} />
        <Route path="/maze" >
          <Route path=":mazesize" element={<MazePage />} />
          <Route index path="*" element={<Navigate to="/" />} />
        </Route>
        <Route path="/rank" element={<div>Rank</div>} />
        <Route index path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
