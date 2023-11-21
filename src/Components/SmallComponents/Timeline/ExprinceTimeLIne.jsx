import React from "react";
import { Calendar } from "lucide-react";
import { ArrowArcRight } from "phosphor-react";
import { Button, Timeline } from "flowbite-react";
import { motion } from "framer-motion";
const UpdateTimeLine = [
  {
    Title: "Application UI code in Tailwind CSS",
    Time: "February 2022",
    Icon: Calendar,
    img: "https://picsum.photos/200/200",
    imgAlt: "error img",
    body: " Get access to over 20+ .",
    btn: [{ btnTitle: "Learn More", BtnLink: "#", btnIcon: ArrowArcRight }],
  },
  {
    Title: "Application UI code in Tailwind CSS",
    Time: "February 2022",
    Icon: Calendar,
    img: "https://picsum.photos/300/200",
    imgAlt: "error img",
    body: " Get access to over 20+ .",
    btn: [{ btnTitle: "Learn More", BtnLink: "#", btnIcon: ArrowArcRight }],
  },
  {
    Title: "Application UI code in Tailwind CSS",
    Time: "February 2022",
    Icon: Calendar,
    img: "https://picsum.photos/400/200",
    imgAlt: "error img",
    body: " Get access to over 20+ .",
    btn: [{ btnTitle: "Learn More", BtnLink: "#", btnIcon: ArrowArcRight }],
  },
];

function ExprinceTimeLIne() {
  return (
    <div>
      <motion.h1
        whileInView={{
          y: 0,
        }}
        animate={{
          y: 70,
        }}
        transition={{ duration: 0.5, delay: 0.25 }}
        className=" py-5 text-black dark:text-white font-Roboto font-semibold text-[28px]"
      >
        Exprince Time Line
      </motion.h1>
      <Timeline>
        {UpdateTimeLine.map((items, index) => (
          <>
            <motion.div
              whileInView={{
                y: 0,
              }}
              animate={{
                y: 70,
              }}
              transition={{ duration: 0.5, delay: 0.25 }}
            >
              <Timeline.Item key={index}>
                <Timeline.Point icon={items.Icon} />
                <Timeline.Content>
                  {/* <Timeline.Time>none</Timeline.Time> */}

                  <Timeline.Title>{items.Title}</Timeline.Title>
                  <Timeline.Body>{items.body}</Timeline.Body>
                  <Button color="gray">
                    Learn More
                    <ArrowArcRight className="ml-2 h-3 w-3" />
                  </Button>
                </Timeline.Content>
              </Timeline.Item>
            </motion.div>
          </>
        ))}
      </Timeline>
    </div>
  );
}

export default ExprinceTimeLIne;
