import React from "react";

function Featured() {
  return (
    <div className=" py-5 px-5 lg:px-[10%]">
        <h1 className=" py-5 text-[30px] font-Roboto text-center text-black dark:text-white ">Featured</h1>
    <div className=" bg-slate-200 rounded-lg p-5 dark:bg-slate-700">
      <div className=" grid grid-flow-row gap-5 md:grid-cols-2  lg:grid-cols-3">
        <div className=" h-[500px]">
          <iframe
            className=" w-full h-full rounded-[20px]"
            src="https://www.linkedin.com/embed/feed/update/urn:li:share:7127263381350227968"
            frameborder="0"
            allowfullscreen=""
            title="Embedded post"
          ></iframe>
        </div>
        <div className=" h-[500px]">
          <iframe
            className=" w-full h-full rounded-[20px]"
            src="https://www.linkedin.com/embed/feed/update/urn:li:share:7125903169691234305"
            frameborder="0"
            allowfullscreen=""
            title="Embedded post"
          ></iframe>
        </div>
        <div className=" h-[500px] ">
          <iframe
            className=" w-full h-full rounded-[20px]"
            src="https://www.linkedin.com/embed/feed/update/urn:li:share:7105976800790421504"
            frameborder="0"
            allowfullscreen=""
            title="Embedded post"
          ></iframe>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Featured;
