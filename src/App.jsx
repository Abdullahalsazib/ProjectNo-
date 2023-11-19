import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Pages/Navbar";
import LeandingPage from "./Components/Pages/LeandingPage";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <LeandingPage />
      </div>
    </>
  );
}

export default App;
