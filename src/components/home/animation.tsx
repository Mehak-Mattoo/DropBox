"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import logo from "../../../public/images/dropboxlogo.png";

export default function LogoReveal() {
  const [moveLeft, setMoveLeft] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMoveLeft(true);
    }, 2000); // Wait 2 seconds before moving left

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex items-center h-[2rem] justify-center bg-white">
      <motion.img
        src={logo.src} // Replace with your logo path
        alt="Logo"
        className="w-6 h-6" // Reduced from w-32 h-32 to w-16 h-16
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{
          opacity: 1,
          scale: 1,
          x: moveLeft ? "-10vw" : 0, // Reduced movement distance
        }}
        transition={{ duration: 1, ease: "easeInOut" }}
      />
    </div>
  );
}
