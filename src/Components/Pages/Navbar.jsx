import { motion } from "framer-motion";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";

import { Toggle } from "keep-react";

// json

import LogoD from "./IMG/logoD.png";
import LogoL from "./IMG/LogoL.png";
function Navbar() {
  return (
    <div>
      <nav className=" dark:bg-slate-900 bg-slate-50 w-full  py-3 px-5 md:px-10 lg:px-[10%] flex items-center justify-between">
        {theme === "dark" ? (
          <motion.div className=" w-[100px] md:w-[110px]">
            <img className="  w-full" src={LogoL} alt="" />
          </motion.div>
        ) : (
          <motion.div
            initial={{
              x: -400,
            }}
            animate={{
              x: 0,
            }}
            transition={{
              duration: 0.9,
            }}
            className=" w-[100px] md:w-[110px]"
          >
            <img className="w-full" src={LogoD} alt="" />
          </motion.div>
        )}

        <motion.div
          initial={{
            x: 400,
          }}
          animate={{
            x: 0,
          }}
          transition={{
            duration: 0.9,
          }}
          className="flex items-center space-x-4"
        >
          <Toggle
            onClick={handleThemeChange}
            bgColor="primary"
            label="Toggle"
            size="md"
            withIcon={true}
          />
          <div
            onClick={() => setOpen(!open)}
            className=" relative cursor-pointer duration-200 p-1 rounded-md dark:text-white text-black"
          >
            {open === true ? <Menu size={30} /> : <X size={30} />}

            <div
              className={` absolute duration-200 ${
                open === true ? "-top-[100rem]" : "top-14 "
              } right-0`}
            >
              <ul
                className={` px-10 py-5 text-center  dark:bg-slate-900 bg-[#ff5503]  grid grid-flow-row gap-6`}
              >
                {MenuList.map((items, index) => (
                  <li key={index}>
                    <a
                      className="dark:bg-slate-600 bg-white w-full  py-1 px-3 text-[20px]"
                      href={items.MenuLink}
                    >
                      {items.menuTitle}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </nav>
    </div>
  );
}

export default Navbar;
