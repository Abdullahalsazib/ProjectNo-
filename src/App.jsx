import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Pages/Navbar";
import LeandingPage from "./Components/Pages/LeandingPage";
import "./Components/Pages/Leanding.css";
import { About } from "./Components/Pages/About";
import Skills from "./Components/SmallComponents/Skills";
function App() {
  return (
    <>
      <div className=" bg-white dark:bg-slate-800">
        <Navbar />
        <LeandingPage />
       <About/>
       <Skills/>
      </div>
    </>
  );
}

export default App;
