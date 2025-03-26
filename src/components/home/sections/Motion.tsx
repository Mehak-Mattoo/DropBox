"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const Motion = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={`p-5 absolute  w-[11rem] h-34 sm:w-[19.5rem] md:top-[33rem] top-[33rem] right-0 md:h-30 md:w-[20rem] lg:left-[63.6rem] bottom-0  lg:top-[14rem] lg:w-57  lg:h-[19rem] rounded-br-xl  justify-between flex flex-col cursor-pointer`}
      initial={{ backgroundColor: "#c8aff0" }} // Initial background color
      animate={{
        backgroundColor: isHovered ? "#00000" : "#c8aff0",
        color: isHovered ? "#ffffff" : "#682760",
      }} // Change on hover
      transition={{ duration: 0.3 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative ">
        <h1 className="text-3xl font-bold">Motion</h1>

        {isHovered ? (
          <div className="lg:h-30">
            <div className="absolute right-0 top-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="114"
                height="104"
                viewBox="0 0 24 24"
                className="rotate-45 lg:w-24 md:w-20 w-10"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1"
                  d="M4 18a2 2 0 1 0 4 0a2 2 0 1 0-4 0M16 6a2 2 0 1 0 4 0a2 2 0 1 0-4 0M7.5 16.5l9-9"
                />
              </svg>
            </div>
            <div className="absolute top-14 right-0 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="148"
                height="188"
                viewBox="0 0 48 48"
                className="scale-x-[-1]"
              >
                <path
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="0"
                  d="M6.843 5.723c6.894-2.065 18.022 10.709 20.56 17.265c0 0 5.53 12.343 13.97 13.469l.071 5.731s-8.091 4.33-21.563-19.27c-2.83-5.513-8.087-11.155-13.325-11.105z"
                />
              </svg>
            </div>

            <div className="absolute left-0 bottom-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="114"
                height="104"
                viewBox="0 0 24 24"
                className="rotate-45 lg:w-24 md:w-20 w-10"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1"
                  d="M4 18a2 2 0 1 0 4 0a2 2 0 1 0-4 0M16 6a2 2 0 1 0 4 0a2 2 0 1 0-4 0M7.5 16.5l9-9"
                />
              </svg>
            </div>
          </div>
        ) : (
          <div className="lg:h-60 h-20 ">
            <div className="absolute lg:right-0 lg:top-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="114"
                height="104"
                viewBox="0 0 24 24"
                className="rotate-45 lg:w-24 md:w-20 w-10"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1"
                  d="M4 18a2 2 0 1 0 4 0a2 2 0 1 0-4 0M16 6a2 2 0 1 0 4 0a2 2 0 1 0-4 0M7.5 16.5l9-9"
                />
              </svg>
            </div>
            <div className="absolute top-14 right-0 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="148"
                height="188"
                viewBox="0 0 48 48"
                className="scale-x-[-1]"
              >
                <path
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="0"
                  d="M6.843 5.723c6.894-2.065 18.022 10.709 20.56 17.265c0 0 5.53 12.343 13.97 13.469l.071 5.731s-8.091 4.33-21.563-19.27c-2.83-5.513-8.087-11.155-13.325-11.105z"
                />
              </svg>
            </div>

            <div className="absolute left-0 bottom-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="114"
                height="104"
                viewBox="0 0 24 24"
                className="rotate-45"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1"
                  d="M4 18a2 2 0 1 0 4 0a2 2 0 1 0-4 0M16 6a2 2 0 1 0 4 0a2 2 0 1 0-4 0M7.5 16.5l9-9"
                />
              </svg>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Motion;
