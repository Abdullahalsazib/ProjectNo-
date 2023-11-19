import { motion } from "framer-motion";
import { FaLink } from "react-icons/fa";
import { FaCircleUser } from "react-icons/fa6";
import React from "react";
import { Typewriter } from "react-simple-typewriter";
// import "./Leanding.css"

function LeandingPage() {
  return (
    <div
      className={`leanding h-screen w-full bg-cover bg-center bg-[url('./src/Components/Pages/IMG/light.png')] dark:bg-[url('./src/Components/Pages/IMG/dark.png')]`}
    >
      <div className=" px-10 lg:px-[12%] h-screen grid grid-flow-row md:flex  items-center justify-between">
        <motion.div
          initial={{
            x: -400,
          }}
          animate={{
            x: 0,
          }}
          transition={{
            duration: 1,
            delay: .1
          }}
          className=" w-full md:w-[50%] md:text-left text-center"
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
            x: 400,
          }}
          animate={{
            x: 0,
          }}
          transition={{
            duration: 1,
            delay: .1
          }}
          className=" w-full md:w-[50%]"
        >
          <div className=" flex items-center justify-center md:justify-end">
            <div className=" relative w-[60%] lg:border-[10px] border-green-500 md:rounded-full">
              <div className=" lg:block hidden rounded-full w-[50px] h-[50px] bg-green-600 absolute top-5 animate-bounce right-10"></div>
              <img
                className=" animate-none"
                src="./src/Components/Pages/IMG/RashedImg.png"
                alt=""
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default LeandingPage;
