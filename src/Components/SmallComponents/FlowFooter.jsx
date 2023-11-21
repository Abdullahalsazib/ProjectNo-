import { Footer } from "flowbite-react";
import React from "react";
import LogoD from "../Pages/IMG/logoD.png";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
const FooterIcon = [
  { Icon: FaFacebook, link: "https://www.facebook.com/rasheduldijital" },
  { Icon: FaInstagram, link: "https://www.instagram.com/digitalrashed/" },
  { Icon: FaLinkedin, link: "https://www.linkedin.com/in/rasheddigital/" },
  // { Icon: FaTiktok, link: "#" },
  {
    Icon: FaTwitter,
    link: "https://twitter.com/DigitalrashedH",
  },
];
function FlowFooter() {
  return (
    <div className=" px-5 lg:px-[10%]">
      <Footer container>
        <div className="w-full text-center">
          <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
            {<Footer.Brand href="/" src={LogoD} alt="404" />}
            <Footer.LinkGroup>
              <Footer.Link href="/about">About</Footer.Link>

              <Footer.Link href="/contact">Contact</Footer.Link>
              <div >
                <ul className=" flex items-center gap-4">
                  {FooterIcon.map((items, index) => (
                    <li key={index}>
                      <a className=" text-[20px] text-slate-500 dark:text-slate-300 dark:hover:text-[#ff5003] hover:text-[#ff5003] duration-300" href={items.link}>{<items.Icon />}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </Footer.LinkGroup>
          </div>
          <Footer.Divider />
          <Footer.Copyright
            href="https://www.facebook.com/abdullahalsazib22"
            by="Designer and Developer Abdullah Al Sazib 🥰"
            year={2023}
          />
        </div>
      </Footer>
    </div>
  );
}

export default FlowFooter;
