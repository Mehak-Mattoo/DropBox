"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const Logo = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={`p-5 w-80 h-33 sm:w-120 lg:h-80 lg:w-72 lg:left-[5.3rem] md:h-35 md:w-130 lg:relative justify-between flex flex-col  cursor-pointer`}
      initial={{ backgroundColor: "#3dd3ee" }} // Initial background color
      animate={{
        backgroundColor: isHovered ? "#00000" : "#3dd3ee",
        color: isHovered ? "#ffffff" : "#055463",
      }} // Change on hover
      transition={{ duration: 0.3 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h1 className="text-3xl font-bold">Logo</h1>

      <div className="absolute lg:bottom-2 lg:right-4">
        {isHovered ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="75"
            height="75"
            viewBox="0 0 48 48"
          >
            <path
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m33.81 19.36l9.69 6.17l-9.75 6.22L24 25.54l-9.75 6.21l-9.75-6.22l9.69-6.17l-9.69-6.17L14.25 7L24 13.19L33.75 7l9.75 6.21zm-.13 0L24 13.2l-9.68 6.16L24 25.53zM14.32 34.81l9.75-6.22l9.75 6.22L24.07 41z"
              stroke-width="1"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="75"
            height="75"
            viewBox="0 0 48 48"
          >
            <path
              fill="currentColor"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m33.81 19.36l9.69 6.17l-9.75 6.22L24 25.54l-9.75 6.21l-9.75-6.22l9.69-6.17l-9.69-6.17L14.25 7L24 13.19L33.75 7l9.75 6.21zm-.13 0L24 13.2l-9.68 6.16L24 25.53zM14.32 34.81l9.75-6.22l9.75 6.22L24.07 41z"
              stroke-width="1"
            />
          </svg>
        )}
      </div>
    </motion.div>
  );
};

export default Logo;
