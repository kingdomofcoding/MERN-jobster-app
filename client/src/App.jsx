import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./pages/Fillout/Fillout";
import Header from "./components/header/Header";
import Projects from "./pages/Projects/Projects";
import Portfolio from "./pages/Portfolio/Portfolio";
import Logos from "./components/logos/Logos";

const App = () => {
  return (
    <Router>
      <></>
      <>
        <Header />
        <Logos />
      </>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>
  );
};

export default App;
