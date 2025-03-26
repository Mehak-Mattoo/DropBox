"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const Typography = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={`p-5  top-42 w-43 lg:relative absolute sm:top-43 md:top-48 lg:top-0 lg:-right-18 right-0 sm:h-53 h-55 md:w-70  lg:h-52 lg:w-58 lg:rounded-tr-xl justify-between flex flex-col  cursor-pointer`}
      initial={{ backgroundColor: "#fa551e" }} // Initial background color
      animate={{
        backgroundColor: isHovered ? "#00000" : "#fa551e",
        color: isHovered ? "#ffffff" : "#4f0119",
      }} // Change on hover
      transition={{ duration: 0.3 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h1 className="text-2xl md:text-3xl font-bold">Typography</h1>
      <div className="absolute bottom-2 right-4">
        {isHovered ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="106"
            height="106"
            viewBox="0 0 256 256"
          >
            <path
              fill="#fff"
              d="M90.86 50.89a12 12 0 0 0-21.72 0l-64 136a12 12 0 0 0 21.71 10.22L42.44 164h75.12l15.58 33.11a12 12 0 0 0 21.72-10.22ZM53.74 140L80 84.18L106.27 140ZM200 84c-13.85 0-24.77 3.86-32.45 11.48a12 12 0 1 0 16.9 17c3-3 8.26-4.52 15.55-4.52c11 0 20 7.18 20 16v4.39a47.3 47.3 0 0 0-20-4.35c-24.26 0-44 17.94-44 40s19.74 40 44 40a47.2 47.2 0 0 0 22-5.38a12 12 0 0 0 22-6.62v-68c0-22.06-19.74-40-44-40m0 96c-11 0-20-7.18-20-16s9-16 20-16s20 7.18 20 16s-9 16-20 16"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="106"
            height="106"
            viewBox="0 0 256 256"
          >
            <path
              fill="#4f0119"
              d="M90.86 50.89a12 12 0 0 0-21.72 0l-64 136a12 12 0 0 0 21.71 10.22L42.44 164h75.12l15.58 33.11a12 12 0 0 0 21.72-10.22ZM53.74 140L80 84.18L106.27 140ZM200 84c-13.85 0-24.77 3.86-32.45 11.48a12 12 0 1 0 16.9 17c3-3 8.26-4.52 15.55-4.52c11 0 20 7.18 20 16v4.39a47.3 47.3 0 0 0-20-4.35c-24.26 0-44 17.94-44 40s19.74 40 44 40a47.2 47.2 0 0 0 22-5.38a12 12 0 0 0 22-6.62v-68c0-22.06-19.74-40-44-40m0 96c-11 0-20-7.18-20-16s9-16 20-16s20 7.18 20 16s-9 16-20 16"
            />
          </svg>
        )}
      </div>
    </motion.div>
  );
};

export default Typography;
