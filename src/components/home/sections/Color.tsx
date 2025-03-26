"use client";
import { motion } from "framer-motion";

import { useState } from "react";

const Color = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={`p-5 w-64 left-[16rem] h-30 sm:w-89 sm:left-[22rem]  absolute md:w-[25.5rem] md:h-[6rem] md:left-1/2 bottom-0 lg:h-77 lg:w-[20rem] lg:left-[16rem] justify-between flex flex-col cursor-pointer`}
      initial={{ backgroundColor: "#ff8c19" }} // Initial background color
      animate={{
        backgroundColor: isHovered ? "#00000" : "#ff8c19",
        color: isHovered ? "#ffffff" : "#6d2e09",
      }} // Change on hover
      transition={{ duration: 0.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        <h1 className="text-3xl font-bold">Color</h1>
        <div className=" ">
          {isHovered ? (
            <div className="flex ">
              <div className="top-37.5 absolute right-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="70"
                  height="70"
                  viewBox="0 0 24 24"
                  className="w-10  lg:w-70"
                >
                  <path
                    fill="currentColor"
                    d="M19 5v14H5V5zm0-2H5c-1.1 0-2 .9-2 2v14a2 2 0 0 0 2 2h14c1.11 0 2-.89 2-2V5a2 2 0 0 0-2-2m-7 5c-2.21 0-4 1.79-4 4s1.79 4 4 4s4-1.79 4-4s-1.79-4-4-4"
                  />
                </svg>
              </div>

              <div className="top-50  left-17 absolute right-12">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="70"
                  height="70"
                  viewBox="0 0 24 24"
                  className="w-10  lg:w-70"
                >
                  <path
                    fill="currentcolor"
                    d="M19 5v14H5V5zm0-2H5c-1.1 0-2 .9-2 2v14a2 2 0 0 0 2 2h14c1.11 0 2-.89 2-2V5a2 2 0 0 0-2-2m-7 5c-2.21 0-4 1.79-4 4s1.79 4 4 4s4-1.79 4-4s-1.79-4-4-4"
                  />
                </svg>
              </div>
            </div>
          ) : (
            <div className="flex ">
              <div className="lg:top-50 top-0 absolute right-12 lg:right-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="70"
                  height="70"
                  viewBox="0 0 24 24"
                  className="md:w-10 w-8 lg:w-70"
                >
                  <path
                    fill="currentColor"
                    d="M19 5v14H5V5zm0-2H5c-1.1 0-2 .9-2 2v14a2 2 0 0 0 2 2h14c1.11 0 2-.89 2-2V5a2 2 0 0 0-2-2m-7 5c-2.21 0-4 1.79-4 4s1.79 4 4 4s4-1.79 4-4s-1.79-4-4-4"
                  />
                </svg>
              </div>

              <div className="lg:top-37.5 top-3 sm:top-5 right-0 absolute lg:right-12">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="70"
                  height="70"
                  viewBox="0 0 24 24"
                  className="md:w-10 w-8 lg:w-70"
                >
                  <path
                    fill="#be4b0a"
                    d="M19 5v14H5V5zm0-2H5c-1.1 0-2 .9-2 2v14a2 2 0 0 0 2 2h14c1.11 0 2-.89 2-2V5a2 2 0 0 0-2-2m-7 5c-2.21 0-4 1.79-4 4s1.79 4 4 4s4-1.79 4-4s-1.79-4-4-4"
                  />
                </svg>
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Color;
