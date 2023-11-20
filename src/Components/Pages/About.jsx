import { motion, useScroll } from "framer-motion";
import React from "react";

function About() {
  return (
    <>
      <div className=" py-10 bg-white dark:bg-slate-950 px-5 lg:px-[10%]">
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
          className=" flex items-center justify-center"
        >
          <h1 className="font-Poppins  font-[700] text-[20px] lg:text-[45px] lg:w-[20%] text-center text-black dark:text-white uppercase border-b-orange-500 border-b-[4px]">
            About
          </h1>
        </motion.div>
        <div className="py-10 my-6">
          <div className="  grid items-center lg:grid-flow-col grid-flow-row  lg:grid-cols-2 grid-cols-0 gap-5 lg:gap-10 ">
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
              className="  w-full  flex items-center lg:justify-start justify-center"
            >
              <img
                className=" rounded-lg w-full md:w-[30%] lg:w-[50%]"
                src="./src/Components/Pages/IMG/about-img.png"
                alt=""
              />
            </motion.div>
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
              className=" sm:w-[100%] h-full px-5 py-2"
            >
              <p className=" hover:text-[20px] dark:text-gray-400 text-gray-600  duration-200 text-[19px] font-Poppins">
                <span className=" dark:text-white text-black font-Poppins  font-semibold">
                  Assalamualaikum!🌟
                </span>{" "}
                <br /> Welcome to my profile! I'm Rashedul Islam, a dedicated
                digital marketing professional with a mission to empower
                businesses in their online journey. With over 3 years of
                experience in digital marketing, I specialize in SEO strategies
                and online business consulting to help companies of all sizes
                thrive in the digital landscape.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
