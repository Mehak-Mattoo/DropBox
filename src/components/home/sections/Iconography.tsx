"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const Iconography = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={`p-5 h-50 sm:w-84 md:h-45 md:w-98 lg:h-48 lg:w-60 lg:rounded-bl-xl justify-between flex flex-col  cursor-pointer`}
      initial={{ backgroundColor: "#b4dc19" }} // Initial background color
      animate={{
        backgroundColor: isHovered ? "#00000" : "#b4dc19",
        color: isHovered ? "#ffffff" : "#175641",
      }} // Change on hover
      transition={{ duration: 0.3 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h1 className="text-3xl font-bold">Iconography</h1>
      {isHovered ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="74"
          height="74"
          viewBox="0 0 24 24"
          className="scale-x-[-1]"
        >
          <path
            fill="#fff"
            d="M18 8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2h9V6a3 3 0 0 0-3-3a3 3 0 0 0-3 3H7a5 5 0 0 1 5-5a5 5 0 0 1 5 5v2zm-6 9a2 2 0 0 0 2-2a2 2 0 0 0-2-2a2 2 0 0 0-2 2a2 2 0 0 0 2 2"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="74"
          height="74"
          viewBox="0 0 24 24"
          rotate={90}
        >
          <path
            fill="currentColor"
            d="M18 8h-1V7c0-2.757-2.243-5-5-5S7 4.243 7 7v1H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2M9 7c0-1.654 1.346-3 3-3s3 1.346 3 3v1H9zm4 8.723V18h-2v-2.277c-.595-.346-1-.984-1-1.723a2 2 0 1 1 4 0c0 .738-.405 1.376-1 1.723"
          />
        </svg>
      )}
    </motion.div>
  );
};

export default Iconography;
