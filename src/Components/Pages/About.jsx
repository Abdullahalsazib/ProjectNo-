import { motion } from "framer-motion";
import React from "react";
import AboutImg from "./IMG/rashedsvg.png";
import { Tabs } from "flowbite-react";

import { Accordion } from "keep-react";
const MySkill = [
  { skillTitle: "Social media management", skillFrom: "Coursera" },
  { skillTitle: "Digital Strategy", skillFrom: "Hubspot Academy" },
  { skillTitle: "Content Marketing", skillFrom: "Hubspot Academy" },
  { skillTitle: "Market Analysis", skillFrom: "Coursera" },
  { skillTitle: "Problem Solving", skillFrom: "" },
  { skillTitle: "Creativity", skillFrom: "" },
  { skillTitle: "Project Management", skillFrom: "Courser" },
  { skillTitle: "Data Analysis", skillFrom: "" },
  { skillTitle: "Search Engine Optimization (SEO)", skillFrom: "" },
  { skillTitle: "Logo Design", skillFrom: "" },
  { skillTitle: "Video Editing", skillFrom: "" },
  { skillTitle: "Digital Marketing", skillFrom: "Hubspot Academy" },
  { skillTitle: "Social Media Marketing", skillFrom: "Hubspot Academy" },
];

export const About = () => {
  return (
    <>
      <div className="py-10 bg-white dark:bg-slate-800 px-5 lg:px-[10%]">
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
            delay: 0.5,
          }}
          className=" flex items-center justify-center"
        >
          <h1 className="font-Poppins  font-[700] text-[20px] lg:text-[30px] lg:w-[20%] text-center text-black dark:text-white uppercase border-b-orange-500 border-b-[4px]">
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
                className="  w-full md:w-[30%] lg:w-[50%]"
                src={AboutImg}
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
              className=" sm:w-[100%] h-full lg:px-5 py-2"
            >
              <p className=" hover:text-[19px] dark:text-gray-400 text-gray-600  duration-200 text-[17px] font-Poppins">
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
              <div className=" mt-5  flex items-center lg:justify-start justify-center ">
                <div className="lg:w-auto w-full">
                  <Accordion
                    collapseAll={false}
                    alwaysOpen={true}
                    className=" rounded-md border-none bg-none"
                  >
                    <Accordion.Panel>
                      <Accordion.Title className="hover:bg-[#ff5503] text-white py-2 px-5 bg-slate-500  dark:bg-slate-700">
                        Skill
                      </Accordion.Title>
                      <Accordion.Content className="py-5 bg-slate-200  dark:bg-slate-900">
                        <h1>
                          <ul className=" grid gap-2 lg:grid-cols-2">
                            {MySkill.map((items, index) => (
                              <li
                                className=" flex items-center group dark:hover:bg-[#ff5503] dark:bg-slate-700 hover:bg-slate-300 duration-500 hover:text-[#ff5503] rounded-md px-2 font-Poppins font-[400] capitalize dark:text-slate-300 dark:hover:text-black text-slate-800 py-1 bg-slate-200 "
                                key={index}
                              >
                                {" "}
                                <p className="group-hover:bg-green-500 duration-300 rounded-md">
                                  🥇
                                </p>{" "}
                                {items.skillTitle}
                              </li>
                            ))}
                          </ul>
                        </h1>
                      </Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel className="">
                      <Accordion.Title className=" text-white py-2 px-5 hover:bg-[#ff5503] bg-slate-500  dark:bg-slate-700">
                        Exprince
                      </Accordion.Title>
                      <Accordion.Content className=" py-5 bg-slate-200 dark:bg-slate-900">
                        <h1>
                          <ul className=" grid gap-2 lg:grid-cols-2">
                            {MySkill.map((items, index) => (
                              <li
                                className=" flex items-center group dark:hover:bg-[#ff5503] dark:bg-slate-700 hover:bg-slate-300 duration-500 hover:text-[#ff5503] rounded-md px-2 font-Poppins font-[400] capitalize dark:text-slate-300 dark:hover:text-black text-slate-800 py-1 bg-slate-200 "
                                key={index}
                              >
                                {" "}
                                <p className="group-hover:bg-green-500 duration-300 rounded-md">
                                  🥇
                                </p>{" "}
                                {items.skillTitle}
                              </li>
                            ))}
                          </ul>
                        </h1>
                      </Accordion.Content>
                    </Accordion.Panel>
                  </Accordion>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};
