import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Maze from "./components/Maze";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Maze />} />
        <Route path="/rank" element={<div>Rank</div>} />
        <Route index path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
