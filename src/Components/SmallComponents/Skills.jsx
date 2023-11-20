import { motion } from "framer-motion";
import React from "react";


function Skills() {
  return (
    <>
      <div className=" py-10 px-5 lg:px-[10%] w-full h-[60vh] bg-white dark:bg-slate-900">
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
          <h1 className="font-Poppins  font-[700] text-[20px] lg:text-[45px] lg:w-[20%] text-center text-black dark:text-white capitalize border-b-orange-500 border-b-[4px]">
            Skill's
          </h1>
        </motion.div>
      </div>
    </>
  );
}

export default Skills;
