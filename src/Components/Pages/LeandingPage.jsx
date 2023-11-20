import { motion } from "framer-motion";
import { FaLink } from "react-icons/fa";
import { FaCircleUser } from "react-icons/fa6";
import React from "react";
import { Typewriter } from "react-simple-typewriter";
import RashedImg from "./IMG/RashedImg.png";
import "./Leanding.css";
// import BGDark from "./IMG/Dark.svg";
// import BGLight from "./IMG/Light.svg";

function LeandingPage() {
  return (
    <div
      className={`leanding h-[100vh] w-full bg-cover bg-center bg-slate-50 dark:bg-slate-800`}
    >
      <div className=" px-10 md:px-[7%] lg:px-[10%] h-screen grid grid-flow-row md:flex lg:space-y-0 md:space-y-0 -space-y-[100px]  items-center justify-between">
        <motion.div
         initial={{
          y: 75,
          opacity: 0
        }}
       whileInView={{
        y: 0,
        opacity: 1
       }}
          transition={{
            duration: 0.5,
            delay: .25,
          }}
          className="  w-full md:w-[50%] md:text-left text-center"
        >
          <h1 className=" lg:text-[20px] font-semibold py-10 md:py-0">
            <p className=" font-Poppins text-sm lg:text-2xl dark:text-white font-[400]">
              Hi.. There..... 🌺 I'm a{" "}
            </p>
            <span className=" text-[30px] lg:text-[50px] font-Poppins ">
              <p className=" dark:text-slate-500 font-Poppins text-[29px] lg:text-[50px] font-[400]">
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

          <h1 className=" text-[27px] lg:text-[70px] lg:py-5 font-bold ">
            <p className=" text-sm lg:text-[20px] font-Poppins font-[400] dark:text-white lg:tracking-[10px]">
              My Name is
            </p>

            <span className=" text-[#ff5003] font-Roboto">
              <span className=" dark:text-white text-black lg:pr-10">MD:</span>
              Rashedul Islam
            </span>
          </h1>

          <div className=" mt-5 md:mt-0 flex items-center md:justify-start justify-center space-x-1  lg:space-x-6">
            <button className=" flex items-center bg-yellow-300 px-3 py-1 lg:py-2 lg:px-6 font-Roboto font-[500] lg:text-[20px]">
              <p className=" pr-2 lg:pr-4"> Hire me</p> <FaLink />
            </button>
            <button className=" flex items-center bg-yellow-300  px-3 py-1 lg:py-2 lg:px-6 font-Roboto font-[500] lg:text-[20px]">
              <p className=" pr-2 lg:pr-4"> About</p> <FaCircleUser />
            </button>
          </div>
        </motion.div>
        {/* awkjlkfjalfjkajf */}
        <motion.div
          initial={{
            y: 75,
            opacity: 0
          }}
         whileInView={{
          y: 0,
          opacity: 1
         }}
          transition={{
            duration: 0.5,
            delay: .25,
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
    </div>
  );
}

export default LeandingPage;
