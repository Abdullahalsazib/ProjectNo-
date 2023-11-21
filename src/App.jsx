import LeandingPage from "./Components/Pages/LeandingPage";
import "./Components/Pages/Leanding.css";
import { About } from "./Components/Pages/About";
import FlowbiteNavbar from "./Components/SmallComponents/FlowbiteNavbar";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contact from "./Components/Pages/Contact";
import Blog from "./Components/Pages/Blog";
import MainTimeline from "./Components/Pages/Timeline";
import FlowBanner from "./Components/SmallComponents/FlowBanner";

function App() {
  return (
    <>
      <div className=" bg-white dark:bg-slate-800">
        {/* <Navbar /> */}
        <FlowBanner/>

        <FlowbiteNavbar />
        <Router>
          <Routes>
            <Route path="/" element={<LeandingPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            
          </Routes>
        </Router>
        {/* <FlowFooter/> */}
        {/* <Skills /> */}
      </div>
    </>
  );
}

export default App;
