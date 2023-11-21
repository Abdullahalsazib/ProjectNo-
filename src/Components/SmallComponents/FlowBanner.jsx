import { Banner, Button, Tooltip } from "flowbite-react";
import {
  HiArrowRight,
  HiOutlineArrowRight,
  HiShoppingCart,
  HiX,
} from "react-icons/hi";
import { MdPercent } from "react-icons/md";
import { Modal } from "flowbite-react";
import { useState } from "react";
import { Facebook, icons } from "lucide-react";
import {
  FaFacebook,
  FaGithub,
  FaGitlab,
  FaLinkedin,
  FaStackOverflow,
  FaTelegram,
  FaTwitter,
} from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

const Dattta = [
  { Icon: FaFacebook, link: "" },
  { Icon: FaLinkedin, link: "" },
  { Icon: FaStackOverflow, link: "" },
  { Icon: FaGitlab, link: "" },
  { Icon: FaTelegram, link: "" },
  { Icon: FaInstagram, link: "" },
  { Icon: FaGithub, link: "" },
  { Icon: FaTwitter, link: "" },
];
function FlowBanner() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div>
      {" "}
      <Banner>
        <div className="flex w-full justify-between border-t border-gray-200 bg-gray-50 p-4 dark:border-gray-600 dark:bg-gray-700">
          <div className="mx-auto flex items-center gap-3">
            <Tooltip
              content="Jack Sparrow"
              className=" capitalize text-gray-600 dark:text-slate-400 text-sm"
            >
              Designed and Developed by {}
              <a
                href="https://www.linkedin.com/in/abdullah-al-sazib-a79102244/"
                className=" dark:text-blue-300 hover:text-[20px] duration-200 text-blue-500 font-Poppins"
              >
                Abdullah Al Sazib
              </a>
            </Tooltip>
            <div>
              <Button
                onClick={() => setOpenModal(true)}
                gradientDuoTone="purpleToPink"
                outline
                color="green"
              >
                <p className=" flex flex-wrap gap-2" href="">
                  {" "}
                  About more <HiOutlineArrowRight className="mr-2 h-5 w-5" />
                </p>
              </Button>
              {/* <Button >Toggle modal</Button> */}

              <Modal show={openModal} onClose={() => setOpenModal(false)}>
                <Modal.Header>Abdullah Al Sazib</Modal.Header>
                <Modal.Body>
                  <div className="flex items-center justify-between">
                    {
                        Dattta.map((items, index)=>(

                            <a key={index} className=" text-[25px] hover:text-[28px] duration-300 text-slate-400 dark:text-white" href={items.link}>{<items.Icon className=" hover:text-blue-500"/>}</a>
                        ))
                    }
                  </div>
                </Modal.Body>
                <Modal.Footer>
                  {/* <Button onClick={() => setOpenModal(false)}>I accept</Button> */}
                  {/* <Button color="gray" onClick={() => setOpenModal(false)}>
                    Decline
                  </Button> */}
                </Modal.Footer>
              </Modal>
            </div>
          </div>
          <Banner.CollapseButton
            color="gray"
            className="border-0 bg-transparent text-gray-500 dark:text-gray-400"
          >
            <HiX className="h-4 w-4" />
          </Banner.CollapseButton>
        </div>
      </Banner>
    </div>
  );
}

export default FlowBanner;

("use client");
