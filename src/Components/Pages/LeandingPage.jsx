import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaFacebook,
  FaInstagram,
  FaLink,
  FaLinkedin,
  FaPhone,
  FaTiktok,
  FaTwitter,
  FaUser,
} from "react-icons/fa";
import { FaCircleUser } from "react-icons/fa6";
import React from "react";
import { Typewriter } from "react-simple-typewriter";
import RashedImg from "./IMG/RashedImg.png";
import "./Leanding.css";
import { About } from "./About";
import FlowFooter from "../SmallComponents/FlowFooter";
import MainTimeline from "./Timeline";
import Contact from "./Contact";
import ExprinceTimeLIne from "../SmallComponents/Timeline/ExprinceTimeLIne";
import SkillsTimeLIne from "../SmallComponents/Timeline/SkillsTimeLIne";
import Featured from "./Featured";
import { Button } from "flowbite-react";
const SociIcon = [
  { Icon: FaFacebook, link: "https://www.facebook.com/rasheduldijital" },
  { Icon: FaInstagram, link: "https://www.instagram.com/digitalrashed/" },
  { Icon: FaLinkedin, link: "https://www.linkedin.com/in/rasheddigital/" },
  // { Icon: FaTiktok, link: "#" },
  {
    Icon: FaTwitter,
    link: "https://twitter.com/DigitalrashedH",
  },
];
function LeandingPage() {
  return (
    <div>
      <div
        className={`leanding w-full bg-cover bg-center bg-slate-50 dark:bg-slate-950`}
      >
        <div className=" px-10 md:px-[7%] lg:px-[10%] h-screen grid grid-flow-row md:flex lg:space-y-0 md:space-y-0 -space-y-[100px]  items-center justify-between">
          <motion.div
            initial={{
              y: 75,
              opacity: 0,
            }}
            whileInView={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              duration: 0.5,
              delay: 0.25,
            }}
            className=" relative  w-full md:w-[50%] md:text-left text-center"
          >
            <h1 className=" lg:text-[20px] font-semibold py-10 md:py-0">
              <p className=" font-Poppins text-sm lg:text-2xl dark:text-white font-[400]">
                Hi.. There..... I'm a{" "}
              </p>
              <span className=" text-[30px] lg:text-[30px] font-Poppins ">
                <p className=" dark:text-slate-500 font-Poppins text-[20px] lg:text-[28px] font-[400]">
                  Professional
                </p>
                <span className="text-[#ff5503] font-Poppins font-[700]">
                  <Typewriter
                    loop={100}
                    cursor
                    cursorBlinking={true}
                    cursorStyle="_"
                    typeSpeed={100}
                    deleteSpeed={50}
                    delaySpeed={1000}
                    words={[" Digital Markater", " Content Writer"]}
                  />
                </span>
              </span>
            </h1>

            <h1 className=" text-[27px] lg:text-[40px] lg:py-5 font-bold ">
              <p className=" text-sm lg:text-[20px] font-Poppins font-[400] dark:text-white lg:tracking-[10px]">
                My Name is
              </p>

              <span className=" text-[#ff5003] font-Roboto">
                <span className=" dark:text-white text-black lg:pr-10">
                  MD:
                </span>
                Rashedul Islam
              </span>
            </h1>

            <div className=" relative mt-5 md:mt-0 flex items-center md:justify-start justify-center space-x-1  lg:space-x-6">
              <Button
                href="./src/Components/Pages/IMG/resume.pdf"
                outline
                gradientDuoTone="pinkToOrange"
                className="  flex items-center "
              >
                <p className=" pr-2 lg:pr-4">Resume</p>{" "}
                <FaArrowRight className="" />
              </Button>
              <Button
                href="https://www.facebook.com/rasheduldijital"
                outline
                gradientDuoTone="purpleToBlue"
                className=" flex items-center "
              >
                <p className=" pr-2 lg:pr-4"> Contact Me</p>{" "}
                <FaPhone className=" animate-bounce" />
              </Button>

              <div className="  absolute lg:-left-[100px]">
                <ul className=" hidden lg:grid grid-flow-row gap-4">
                  {SociIcon.map((items, index) => (
                    <li className="p-3  cursor-pointer group rounded-full ring-[3px] ring-blue-400 hover:ring-[3px] duration-300 hover:ring-[#ff5503]">
                      <a
                        key={index}
                        className="text-[20px] duration-300 text-blue-400 group-hover:text-[#ff5503]  dark:text-white"
                        href={items.link}
                      >
                        {<items.Icon />}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* some Icons in left side */}

            {/* some Icons in left side */}
          </motion.div>
          {/* awkjlkfjalfjkajf */}
          <motion.div
            initial={{
              y: 75,
              opacity: 0,
            }}
            whileInView={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              duration: 0.5,
              delay: 0.25,
            }}
            className="w-full md:w-[50%]"
          >
            <div className=" flex items-center justify-center md:justify-end">
              <div className=" relative w-[60%] ">
                {" "}
                <img src={RashedImg} alt="" />
              </div>
            </div>
          </motion.div>
        </div>
        {/* akdfjfjaklfj */}
        <About />
        <Featured />
        <div className=" px-5 lg:px-[10%] lg:flex items- justify-between">
          <SkillsTimeLIne />
          <ExprinceTimeLIne />
        </div>
        <Contact />
      </div>
      <FlowFooter />
    </div>
  );
}

export default LeandingPage;
