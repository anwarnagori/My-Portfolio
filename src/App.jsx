import React from "react";
import "./App";
import { Routes, Route } from "react-router-dom";
import Home from "./containers/home";
import Skill from "./containers/skills"
import About from "./containers/about/";
import Contact from "./containers/contact/";
import Navbar from "./components/navBar";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <div className="App__main-page-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skill />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
