import { motion } from "framer-motion";
import React from "react";

function Featured() {
  return (
    <div className=" py-5 px-5 lg:px-[10%]">
      <div className=" flex items-center justify-center">
        <motion.h1
          whileInView={{
            y: 0,
          }}
          animate={{
            y: 70,
          }}
          transition={{ duration: 0.9, delay: 0.28 }}
          className="font-Poppins  mb-5 font-[700] text-[20px] lg:text-[30px] lg:w-[20%] text-center text-black dark:text-white uppercase border-b-orange-500 border-b-[4px]"
        >
          Featured
        </motion.h1>{" "}
      </div>
      {/* <motion.h1 className=" py-5 text-[30px] font-Roboto text-center text-black dark:text-white ">
        
      </motion.h1> */}
      <div className=" bg-slate-200 rounded-lg p-5 dark:bg-slate-800">
        <div className=" grid grid-flow-row gap-5 md:grid-cols-2  lg:grid-cols-3">
          <motion.div
             whileInView={{ y: 0 , opacity:1 }}
             animate={{ y: 78, opacity: 0 }}
             transition={{ duration: 0.9, delay: 0.5 }}
            className=" h-[500px]"
          >
            <iframe
              className=" opacity-30 hover:opacity-100 duration-300 cursor-pointer w-full h-full rounded-[20px]"
              src="https://www.linkedin.com/embed/feed/update/urn:li:share:7127263381350227968"
              frameborder="0"
              allowfullscreen=""
              title="Embedded post"
            ></iframe>
          </motion.div>
          <motion.div
            whileInView={{ y: 0 , opacity:1 }}
            animate={{ y: 78, opacity: 0 }}
            transition={{ duration: 0.9, delay: 0.5 }}
            className=" h-[500px]"
          >
            <iframe
              className=" opacity-30 hover:opacity-100 duration-300 cursor-pointer w-full h-full rounded-[20px]"
              src="https://www.linkedin.com/embed/feed/update/urn:li:share:7125903169691234305"
              frameborder="0"
              allowfullscreen=""
              title="Embedded post"
            ></iframe>
          </motion.div>
          <motion.div
             whileInView={{ y: 0 , opacity:1 }}
             animate={{ y: 78, opacity: 0 }}
             transition={{ duration: 0.9, delay: 0.5 }}
            className=" h-[500px] "
          >
            <iframe
              className=" opacity-30 hover:opacity-100 duration-300 cursor-pointer w-full h-full rounded-[20px]"
              src="https://www.linkedin.com/embed/feed/update/urn:li:share:7105976800790421504"
              frameborder="0"
              allowfullscreen=""
              title="Embedded post"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
