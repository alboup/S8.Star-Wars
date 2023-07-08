import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Starships from "./components/Starships";
import StarshipDetails from "./components/StarshipDetails";


const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/starships/:id" element={<StarshipDetails />} />
        <Route path="/" element={<Starships />} />
      </Routes>
    </Router>
  );
}

export default App;
