"use client";
import { motion } from "framer-motion";
import { div } from "framer-motion/client";
import { useState } from "react";

const VoiceAndTone = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={`p-5 h-40 md:h-45 lg:h-50 lg:relative  lg:-left-15 lg:w-[28rem]  md:w-100 rounded-tr-xl lg:rounded-none justify-between flex flex-col cursor-pointer`}
      initial={{ backgroundColor: "#fad24b" }} // Initial background color
      animate={{
        backgroundColor: isHovered ? "#00000" : "#fad24b",
        color: isHovered ? "#ffffff" : "#684505",
      }} // Change on hover
      transition={{ duration: 0.3 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h1 className="text-2xl md:text-3xl font-bold">Voice & Tone</h1>

      {isHovered ? (
        <div className=" relative h-2/3">
          {/* start commas */}
          <div className="absolute flex top-0 left-0 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="64"
              height="64"
              viewBox="0 0 24 24"
              className="rotate-180 lg:w-64 md:w-24 w-6"
            >
              <path
                fill="currentColor"
                d="M7 3h9.95v9.96l-3.99 7.98H8l3.97-7.98H7z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="64"
              height="64"
              viewBox="0 0 24 24"
              className="rotate-180 lg:w-64 md:w-24 w-6"
            >
              <path
                fill="currentColor"
                d="M7 3h9.95v9.96l-3.99 7.98H8l3.97-7.98H7z"
              />
            </svg>
          </div>

          {/* end commas */}
          <div className="absolute flex right-0 bottom-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="64"
              height="64"
              viewBox="0 0 24 24"
              className=" lg:w-64 md:w-24 w-6"
            >
              <path
                fill="currentColor"
                d="M7 3h9.95v9.96l-3.99 7.98H8l3.97-7.98H7z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="64"
              height="64"
              viewBox="0 0 24 24"
              className=" lg:w-64 md:w-24 w-6"
            >
              <path
                fill="currentColor"
                d="M7 3h9.95v9.96l-3.99 7.98H8l3.97-7.98H7z"
              />
            </svg>
          </div>
        </div>
      ) : (
        <div className=" relative h-2/3">
          {/* start commas */}
          <div className="absolute flex top-0 left--0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="64"
              height="64"
              viewBox=" 0 0  24 24"
              className="rotate-180 lg:w-64 md:w-24 w-6"
            >
              <path
                fill="currentColor"
                d="M7 3h9.95v9.96l-3.99 7.98H8l3.97-7.98H7z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="64"
              height="64"
              viewBox="0 0 24 24"
              className="rotate-180 lg:w-64 md:w-24 w-6"
            >
              <path
                fill="currentColor"
                d="M7 3h9.95v9.96l-3.99 7.98H8l3.97-7.98H7z"
              />
            </svg>
          </div>

          {/* end commas */}
          <div className="absolute flex right-0 bottom-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="64"
              height="64"
              viewBox="0 0 24 24"
              className=" lg:w-64 md:w-24 w-6"
            >
              <path
                fill="currentColor"
                d="M7 3h9.95v9.96l-3.99 7.98H8l3.97-7.98H7z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="64"
              height="64"
              viewBox="0 0 24 24"
              className=" lg:w-64 md:w-24 w-6"
            >
              <path
                fill="currentColor"
                d="M7 3h9.95v9.96l-3.99 7.98H8l3.97-7.98H7z"
              />
            </svg>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default VoiceAndTone;
