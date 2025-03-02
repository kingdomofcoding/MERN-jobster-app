import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./pages/Fillout/Fillout";
import Header from "./components/header/Header";
import Projects from "./pages/Projects/Projects";
import Portfolio from "./pages/Portfolio/Portfolio";
import FerrariAudioPlayer from "./components/ferrari/Ferrari";
const App = () => {
  return (
    <Router>
      <>
        <FerrariAudioPlayer />
      </>
      <>
        <Header />
      </>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>
  );
};

export default App;
