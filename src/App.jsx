import React from "react";
import Navbar from "./Components/Pages/Navbar";
import LeandingPage from "./Components/Pages/LeandingPage";
import "./Components/Pages/Leanding.css";
import { About } from "./Components/Pages/About";
import Skills from "./Components/SmallComponents/Skills";
import { TimelineComponent } from "./Components/SmallComponents/Timeline";
import Carsole from "./Components/SmallComponents/Carsole";
import FlowbiteNavbar from "./Components/SmallComponents/FlowbiteNavbar";
import FlowFooter from "./Components/SmallComponents/FlowFooter";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contact from "./Components/Pages/Contact";
import Blog from "./Components/Pages/Blog";

function App() {
  return (
    <>
      <div className=" bg-white dark:bg-slate-800">
        {/* <Navbar /> */}
        <FlowbiteNavbar />
        <Router>
          <Routes>
            <Route path="/" element={<LeandingPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/timelineComponent" element={<TimelineComponent />} />
          </Routes>
        </Router>

        {/* <Skills /> */}
        <FlowFooter />
      </div>
    </>
  );
}

export default App;
