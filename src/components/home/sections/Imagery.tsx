"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const Imagery = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={`p-5 absolute h-35 w-80 sm:w-96 top-[33rem] md:top-[33rem] md:w-[26rem] md:left-0 lg:left-[37rem] lg:top-[20.8rem] md:h-35 bottom-0 lg:w-[25.5rem] lg:h-48  justify-between flex flex-col cursor-pointer`}
      initial={{ backgroundColor: "#892055" }} // Initial background color
      animate={{
        backgroundColor: isHovered ? "#00000" : "#892055",
        color: isHovered ? "#ffffff" : "#ffafa5",
      }} // Change on hover
      transition={{ duration: 0.3 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative ">
        <h1 className="text-3xl font-bold">Imagery</h1>
        <div className="absolute lg:top-20 right-0">
          {isHovered ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="54"
              height="54"
              viewBox="0 0 2048 2048"
              className="md:w-10 lg:w-74"
            >
              <path
                fill="#fff"
                d="M128 1536q141 0 272-36t244-104t207-160t161-207t103-245t37-272q0-133-34-261T1019 8q128 16 245 61t217 115t181 161t138 199t89 229t31 251q0 141-36 272t-104 244t-160 207t-207 161t-245 103t-272 37q-138 0-269-36t-246-103t-212-164T5 1528q31 4 61 6t62 2m768 384q124 0 238-32t214-90t181-140t140-181t91-214t32-239q0-136-40-263t-112-236t-176-194t-229-136q45 155 45 317q0 146-35 282t-100 258t-157 225t-205 182t-244 129t-277 68q128 128 290 196t344 68"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="74"
              height="74"
              viewBox="0 0 24 24"
              className="md:w-10 lg:w-74"
            >
              <path
                fill="currentColor"
                d="M11 5V1h2v4zm6.65 2.75l-1.375-1.375l2.8-2.875l1.4 1.425zM19 13v-2h4v2zm-8 10v-4h2v4zM6.35 7.7L3.5 4.925l1.425-1.4L7.75 6.35zm12.7 12.8l-2.775-2.875l1.35-1.35l2.85 2.75zM1 13v-2h4v2zm3.925 7.5l-1.4-1.425l2.8-2.8l.725.675l.725.7zM12 18q-2.5 0-4.25-1.75T6 12t1.75-4.25T12 6t4.25 1.75T18 12t-1.75 4.25T12 18"
              />
            </svg>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Imagery;
