import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Starships from "./components/Starships";
import StarshipDetails from "./components/StarshipDetails";
import Navbar from './components/Navbar';
import Home from './components/Home';
import Header from './components/Header';
import Login from './components/Login';
import Signup from './components/Signup';

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/starships/:id" element={<StarshipDetails />} />
        <Route path="/starships" element={<Starships />} />
        <Route path="/" element={<Home />} />  
        <Route path="/login" element={<Login />} />  
        <Route path="/signup" element={<Signup />} />  
      </Routes>
    </Router>
  );
}

export default App;
