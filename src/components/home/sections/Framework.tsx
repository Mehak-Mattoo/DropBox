"use client";
import { motion } from "framer-motion";

import { useState } from "react";

const Framework = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={`p-5 h-40 md:h-45 lg:h-80 md:w-100 lg:w-60  relative rounded-tl-xl justify-between flex flex-col cursor-pointer`}
      initial={{ backgroundColor: "#283750" }} // Initial background color
      animate={{
        backgroundColor: isHovered ? "#00000" : "#283750",
        color: isHovered ? "#ffffff" : "#b4c8e1",
      }} // Change on hover
      transition={{ duration: 0.3 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h1 className="text-2xl md:text-3xl font-bold">Framework</h1>

      <div className="">
        {isHovered ? (
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="136"
              height="136"
              viewBox="0 0 256 256"
              className="rotate-70 absolute top-15 lg:w-76 md:w-40 w-15"
            >
              <path
                fill="currentColor"
                d="m244.24 75.76l-32-32a6 6 0 0 0-8.48 8.48L225.51 74H208c-48 0-59.44 27.46-69.54 51.69c-9.43 22.64-17.66 42.33-53 44.16a38 38 0 1 0 .06 12c43.34-2.06 54.29-28.29 64-51.55C159.44 106.53 168 86 208 86h17.51l-21.75 21.76a6 6 0 1 0 8.48 8.48l32-32a6 6 0 0 0 0-8.48M48 202a26 26 0 1 1 26-26a26 26 0 0 1-26 26"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="136"
              height="136"
              viewBox="0 0 256 256"
              className="rotate-180 absolute bottom-0 right-4 lg:w-76  md:w-40  w-15"
            >
              <path
                fill="currentColor"
                d="m244.24 75.76l-32-32a6 6 0 0 0-8.48 8.48L225.51 74H208c-48 0-59.44 27.46-69.54 51.69c-9.43 22.64-17.66 42.33-53 44.16a38 38 0 1 0 .06 12c43.34-2.06 54.29-28.29 64-51.55C159.44 106.53 168 86 208 86h17.51l-21.75 21.76a6 6 0 1 0 8.48 8.48l32-32a6 6 0 0 0 0-8.48M48 202a26 26 0 1 1 26-26a26 26 0 0 1-26 26"
              />
            </svg>{" "}
          </div>
        ) : (
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="136"
              height="136"
              viewBox="0 0 256 256"
              className="rotate-70 absolute top-15 lg:w-76 md:w-40 w-15"
            >
              <path
                fill="currentColor"
                d="m244.24 75.76l-32-32a6 6 0 0 0-8.48 8.48L225.51 74H208c-48 0-59.44 27.46-69.54 51.69c-9.43 22.64-17.66 42.33-53 44.16a38 38 0 1 0 .06 12c43.34-2.06 54.29-28.29 64-51.55C159.44 106.53 168 86 208 86h17.51l-21.75 21.76a6 6 0 1 0 8.48 8.48l32-32a6 6 0 0 0 0-8.48M48 202a26 26 0 1 1 26-26a26 26 0 0 1-26 26"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="136"
              height="136"
              viewBox="0 0 256 256"
              className="rotate-180 absolute bottom-0 right-4 lg:w-76  md:w-40  w-15"
            >
              <path
                fill="currentColor"
                d="m244.24 75.76l-32-32a6 6 0 0 0-8.48 8.48L225.51 74H208c-48 0-59.44 27.46-69.54 51.69c-9.43 22.64-17.66 42.33-53 44.16a38 38 0 1 0 .06 12c43.34-2.06 54.29-28.29 64-51.55C159.44 106.53 168 86 208 86h17.51l-21.75 21.76a6 6 0 1 0 8.48 8.48l32-32a6 6 0 0 0 0-8.48M48 202a26 26 0 1 1 26-26a26 26 0 0 1-26 26"
              />
            </svg>{" "}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Framework;
