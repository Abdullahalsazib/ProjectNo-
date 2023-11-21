import { Card } from "flowbite-react";
import React from "react";

function Blog() {
  return (
    <>
      <div className=" h-screen w-full grid md:grid-cols-2 grid-cols-1  lg:grid-cols-4  gap-5 px-5 lg:px-[10%]">
        <FlowCard />
        <FlowCard />
        <FlowCard />
        <FlowCard />
      </div>
    </>
  );
}

export default Blog;

const FlowCard = () => {
  return (
    <>
      <Card
        className=" w-full  h-[210px]"
        // imgAlt="Meaningful alt text for an image that is not purely decorative"
        // imgSrc="https://flowbite.com/docs/images/carousel/carousel-1.svg"
      >
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Noteworthy technology acquisitions 2021
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
      </Card>
    </>
  );
};
