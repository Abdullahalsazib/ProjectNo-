import React from "react";
import { Button, Timeline } from "flowbite-react";
import { Star } from "phosphor-react";
import { motion } from "framer-motion";
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

function SkillsTimeLIne() {
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
        Skill's Time Line
      </motion.h1>

      <Timeline>
        {MySkill.slice(0, 5).map((items, index) => (
          <>
            <motion.div
              key={index}
              whileInView={{
                y: 0,
              }}
              animate={{
                y: 70,
              }}
              transition={{ duration: 0.5, delay: 0.25 }}
            >
              <Timeline.Item>
                <Timeline.Point icon={Star} />
                <Timeline.Content>
                  <Timeline.Time>none</Timeline.Time>

                  <Timeline.Title>{items.skillTitle}</Timeline.Title>
                  <Timeline.Body>{items.skillFrom}</Timeline.Body>
                  {/* <Button color="gray">
                  Learn More
                  <ArrowArcRight className="ml-2 h-3 w-3" />
                </Button> */}
                </Timeline.Content>
              </Timeline.Item>
            </motion.div>
          </>
        ))}
      </Timeline>
    </div>
  );
}

export default SkillsTimeLIne;
