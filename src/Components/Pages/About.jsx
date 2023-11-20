import React from "react";

function About() {
  return (
    <>
      <div className=" w-full h-[90vh] bg-white dark:bg-slate-950 px-5 lg:px-[10%]">
        <div className=" flex items-center justify-center">
          <h1 className="font-Poppins my-6 font-[700] text-[20px] lg:text-[45px] lg:w-[20%] text-center text-black dark:text-white uppercase border-b-orange-500 border-b-[4px]">
            About
          </h1>
        </div>
        <div className="  bg-purple-200 mt-5">
          <div className=" grid lg:grid-flow-col grid-flow-row  lg:grid-cols-2 grid-cols-0 gap-5 lg:gap-10 ">
            <div className="  w-full  flex items-center lg:justify-start justify-center">
                <div className=" w-[250px] h-[250px] bg-green-400">

                </div>
              {/* <img className=" w-[20%]" src="./src/Components/Pages/IMG/RashedImg.png" alt="" /> */}
            </div>
            <div className="  h-[250px] bg-red-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              ea exercitationem officia maiores nobis dolorem necessitatibus,
              impedit tenetur? Iusto temporibus vero, possimus soluta officia
              tenetur natus quo optio ab laudantium!
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
