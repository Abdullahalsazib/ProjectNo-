import { motion } from "framer-motion";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";

// json
const MenuList = [
  { menuTitle: "Home", MenuLink: "@" },
  { menuTitle: "About", MenuLink: "@" },
  { menuTitle: "Blog", MenuLink: "@" },
  { menuTitle: "Contact", MenuLink: "@" },
];
function Navbar() {
  const [theme, setTheme] = useState("light");
  const [open, setOpen] = useState(true);
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);
  const handleThemeChange = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <div>
      <nav className=" dark:bg-slate-900 bg-slate-50 w-full  py-3 px-5 md:px-10 lg:px-[10%] flex items-center justify-between">
        {theme === "dark" ? (
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
            <img
              className="  w-full"
              src="./src/Components/Pages/IMG/LogoL.png"
              alt=""
            />
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
            <img
              className="w-full"
              src="./src/Components/Pages/IMG/logoD.png"
              alt=""
            />
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
          <div
            onClick={handleThemeChange}
            className={`rounded-full cursor-pointer flex items-center ${
              theme === "light" ? "justify-end" : "justify-start"
            } bg-slate-500 text-white`}
          >
            {theme === "light" ? (
              <div className="px-2 py-1  rounded-full bg-slate-600 w-full flex items-center">
                <Sun className=" bg-[#ff5503] rounded-full" />
                <p className=" text-sm lg:p-1">Dark</p>
              </div>
            ) : (
              <div className=" px-2 py-1 rounded-full bg-slate-400 w-full flex items-center">
                <p className=" text-sm lg:p-1">Light</p>
                <Moon className=" bg-slate-700 rounded-full" />
              </div>
            )}
          </div>
        </motion.div>
      </nav>
    </div>
  );
}

export default Navbar;
