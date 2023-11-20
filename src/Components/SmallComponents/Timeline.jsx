import { motion } from "framer-motion";
import { Timeline } from "keep-react";
import {
  Group,
  Loader,
  LucideWholeWord,
  RepeatIcon,
  User,
  WorkflowIcon,
} from "lucide-react";
import { FaDigitalOcean } from "react-icons/fa";
import { FaAddressBook, FaWolfPackBattalion } from "react-icons/fa6";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
export const TimelineComponent = () => {
  return (
    <>
      {/* <div className=" px-[10%] grid grid-cols-2 ">
        <Timeline timelineBarType="dashed" className=" bg-red-400    " gradientPoint={true}>
          <TimeCard />
          <TimeCard />
          <TimeCard />
        </Timeline>
        <Timeline timelineBarType="dashed" className=" bg-red-400    " gradientPoint={true}>
          <TimeCard />
          <TimeCard />
          <TimeCard />
        </Timeline>
      </div> */}
      <div>
        <VarticalTimeline />
      </div>
    </>
  );
};

const TimeCard = () => {
  return (
    <>
      <motion.div
        className=""
        whileInView={{
          y: 0,
        }}
        animate={{
          y: 75,
        }}
        transition={{
          duration: 0.9,
          delay: 0.25,
        }}
      >
        <Timeline.Item className=" ">
          <Timeline.Point />
          <Timeline.Content>
            <Timeline.Time>February 2023</Timeline.Time>
            <Timeline.Title>Application UI code in Tailwind CSS</Timeline.Title>
            <Timeline.Body className=" w-[50%]">
              Get access to over 20+ pages including a dashboard layout, charts,
              kanban board, calendar, and pre-order E-commerce & Marketing
              pages.
            </Timeline.Body>

            <motion.div
              whileInView={{ x: 0 }}
              animate={{ x: 76 }}
              transition={{ duration: 0.5, delay: 0.25 }}
            >
              <img
                height={220}
                width={400}
                src="https://images.prismic.io/staticmania/3b419e42-6dde-4598-a7c1-33e585b922bd_timeline.png?auto=compress,format"
                alt="timeline"
              />
            </motion.div>
          </Timeline.Content>
        </Timeline.Item>
      </motion.div>
    </>
  );
};

// src="https://images.prismic.io/staticmania/58497239-b7e5-44e9-8185-25d467f6c551_banner.png?auto=compress,format"

const VarticalTimeline = () => {
  return (
    <>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="2011 - present"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<RepeatIcon />}
        >
          <h3 className="vertical-timeline-element-title">Creative Director</h3>
          <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
          <p>
            Creative Direction, User Experience, Visual Design, Project
            Management, Team Leading
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2010 - 2011"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<LucideWholeWord />}
        >
          <h3 className="vertical-timeline-element-title">Art Director</h3>
          <h4 className="vertical-timeline-element-subtitle">
            San Francisco, CA
          </h4>
          <p>
            Creative Direction, User Experience, Visual Design, SEO, Online
            Marketing
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2008 - 2010"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<Loader />}
        >
          <h3 className="vertical-timeline-element-title">Web Designer</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Los Angeles, CA
          </h4>
          <p>User Experience, Visual Design</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2006 - 2008"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<FaDigitalOcean />}
        >
          <h3 className="vertical-timeline-element-title">Web Designer</h3>
          <h4 className="vertical-timeline-element-subtitle">
            San Francisco, CA
          </h4>
          <p>User Experience, Visual Design</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="April 2013"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={<User />}
        >
          <h3 className="vertical-timeline-element-title">
            Content Marketing for Web, Mobile and Social Media
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
          <p>Strategy, Social Media</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="November 2012"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={<FaWolfPackBattalion />}
        >
          <h3 className="vertical-timeline-element-title">
            Agile Development Scrum Master
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Certification</h4>
          <p>Creative Direction, User Experience, Visual Design</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education dark:text-white"
          date="2002 - 2006"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={<FaAddressBook />}
        >
          <h3 className=" text-black vertical-timeline-element-title">
            Bachelor of Science in Interactive Digital Media Visual Imaging
          </h3>
          <h4 className=" text-black vertical-timeline-element-subtitle">
            Bachelor Degree
          </h4>
          <p className=" text-black ">Creative Direction, Visual Design</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
          icon={<Group />}
        />
      </VerticalTimeline>
    </>
  );
};
