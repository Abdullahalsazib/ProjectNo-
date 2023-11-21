import { Navbar } from "flowbite-react";
import { AppleLogo } from "phosphor-react";
import React, { useEffect, useState } from "react";
import LogoD from "../Pages/IMG/logoD.png";
import LogoL from "../Pages/IMG/LogoL.png";
import { Toggle } from "keep-react";
import { TrainFrontTunnel } from "lucide-react";
const MenuList = [
  { menuTitle: "Home", MenuLink: "/" },
  { menuTitle: "About", MenuLink: "/about" },
  { menuTitle: "Blog", MenuLink: "/blog" },
  { menuTitle: "Contact", MenuLink: "/contact" },
];
function FlowbiteNavbar() {
  const [theme, setTheme] = useState(null);
  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);
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
    <>
      {/* initial={{
              x: -400,
            }}
            animate={{
              x: 0,
            }}
            transition={{
              duration: 0.9,
            }} */}
      <div className=" dark:bg-slate-900  bg-slate-50  ">
        <Navbar className="py-3 px-5 md:px-10 lg:px-[10%]" fluid rounded>
          <Navbar.Brand href="@">
            <div className=" w-[100px] md:w-[110px]">
              {theme === "dark" ? (
                <img src={LogoL} alt="" />
              ) : (
                <img src={LogoD} alt="" />
              )}
            </div>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            {MenuList.map((items, index) => (
              <Navbar.Link key={index} href={items.MenuLink}>
                {items.menuTitle}
              </Navbar.Link>
            ))}
            <Toggle
              onClick={handleThemeChange}
              bgColor="primary"
              label="Toggle"
              size="md"
              withIcon={true}
            />
          </Navbar.Collapse>
        </Navbar>{" "}
      </div>
    </>
  );
}

export default FlowbiteNavbar;
