import React from "react";
import FlowFrom from "../SmallComponents/FlowFrom";
import { Button, Checkbox, Label, TextInput, Textarea } from "flowbite-react";
import { motion } from "framer-motion";

function Contact() {
  return (
    <div className="py-10 bg-white dark:bg-slate-900">
      <div className=" flex items-center justify-center"> <motion.h1
        whileInView={{
          y: 0,
        }}
        animate={{
          y: 70,
        }}
        transition={{ duration: 0.9, delay: 0.25 }}
        className="font-Poppins  font-[700] text-[20px] lg:text-[30px] lg:w-[20%] text-center text-black dark:text-white uppercase border-b-orange-500 border-b-[4px]"
      >
        contact
      </motion.h1></div>

      <div className="  flex items-center justify-center w-full ">
        <div className=" p-5 lg:p-10">
          <motion.form
            whileInView={{
              y: 0,
            }}
            animate={{
              y: 70,
            }}
            transition={{ duration: 0.5, delay: 0.27 }}
            className=" lg:w-[500px]"
          >
            <div className=" w-full ">
              <div className="mb-2 block">
                <Label htmlFor="email" value="Your Email" />
              </div>
              <TextInput
                type="email"
                required
                id="email"
                placeholder="Enter your email"
              />
              <div className="mb-2 block">
                <Label htmlFor="name" value="Your Name" />
              </div>
              <TextInput type="text" id="name" placeholder="Enter your name" />
              <div className="mb-2 block">
                <Label htmlFor="mess" value="Your Messages" />
              </div>
              <Textarea id="mess" placeholder="Enter your Messages" />
              <div className="flex items-center mt-3 gap-2">
                <Checkbox id="remember" />
                <Label className="mt-3" htmlFor="remember">
                  Remember me
                </Label>
              </div>
              <Button type="submit">Submit</Button>
            </div>
            {/* <div className=" lg:block hidden">
              <img
              className=" rounded-lg w-full"
              src="https://picsum.photos/500/300"
              alt=""
              />
            </div> */}
          </motion.form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
