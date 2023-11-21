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

function App() {
  return (
    <>
      <div className=" bg-white dark:bg-slate-800">
        {/* <Navbar /> */}
        <FlowbiteNavbar />
        <LeandingPage />
        <About />

        <Carsole />
        <TimelineComponent />
        {/* <Skills /> */}
        <FlowFooter/>
      </div>
    </>
  );
}

export default App;
