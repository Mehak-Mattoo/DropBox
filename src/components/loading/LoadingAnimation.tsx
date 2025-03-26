// components/LoadingAnimation.tsx
"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface LoadingAnimationProps {
  iconSrc?: string;
  color?: string;
  size?: number;
}

const LoadingAnimation: React.FC<LoadingAnimationProps> = ({
  iconSrc,
  color = "#0066ff",
  size = 100,
}) => {
  const [windowDimensions, setWindowDimensions] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    // Get window dimensions on client side
    const updateDimensions = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);

    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, []);

  const lineVariants = {
    initial: (direction: string) => {
      switch (direction) {
        case "left":
          return { x: -windowDimensions.width, opacity: 0 };
        case "right":
          return { x: windowDimensions.width, opacity: 0 };
        case "top":
          return { y: -windowDimensions.height, opacity: 0 };
        case "bottom":
          return { y: windowDimensions.height, opacity: 0 };
        default:
          return {};
      }
    },
    animate: {
      x: 0,
      y: 0,
      opacity: [0, 1, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
        repeatDelay: 0.5,
      },
    },
  };

  const iconSize = size;
  const lineThickness = size / 90;


  return (
    <div
      style={{
        position: "relative",
        width: size,
        height: size,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "visible", // Allow the lines to extend outside the component
      }}
    >
      {/* Center Icon */}
      <div
        style={{
          width: iconSize,
          height: iconSize,
          borderRadius: "50%",
          backgroundColor: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          boxShadow: "0 0 10px rgba(0,0,0,0.1)",
          zIndex: 10,
        }}
      >
        {iconSrc ? (
          <Image
            src={iconSrc}
            alt="Logo"
            width={iconSize * 0.6}
            height={iconSize * 0.6}
          />
        ) : (
          <div
            style={{
              width: iconSize * 0.6,
              height: iconSize * 0.6,
              backgroundColor: color,
              clipPath:
                "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
            }}
          />
        )}
      </div>

      {/* Left Line */}
      <motion.div
        custom="left"
        variants={lineVariants}
        initial="initial"
        animate="animate"
        style={{
          position: "absolute",
          width: windowDimensions.width,
          height: lineThickness,
          backgroundColor: color,
          left: -windowDimensions.width,
          right: 0,
          top: "50%",
          marginTop: -lineThickness / 2,
          transformOrigin: "right center",
        }}
      />

      {/* Right Line */}
      <motion.div
        custom="right"
        variants={lineVariants}
        initial="initial"
        animate="animate"
        style={{
          position: "absolute",
          width: windowDimensions.width,
          height: lineThickness,
          backgroundColor: color,
          right: -windowDimensions.width,
          left: 0,
          top: "50%",
          marginTop: -lineThickness / 2,
          transformOrigin: "left center",
        }}
      />

      {/* Top Line */}
      <motion.div
        custom="top"
        variants={lineVariants}
        initial="initial"
        animate="animate"
        style={{
          position: "absolute",
          width: lineThickness,
          height: windowDimensions.height,
          backgroundColor: color,
          top: -windowDimensions.height,
          bottom: 0,
          left: "50%",
          marginLeft: -lineThickness / 2,
          transformOrigin: "center bottom",
        }}
      />

      {/* Bottom Line */}
      <motion.div
        custom="bottom"
        variants={lineVariants}
        initial="initial"
        animate="animate"
        style={{
          position: "absolute",
          width: lineThickness,
          height: windowDimensions.height,
          backgroundColor: color,
          bottom: -windowDimensions.height,
          top: 0,
          left: "50%",
          marginLeft: -lineThickness / 2,
          transformOrigin: "center top",
        }}
      />
    </div>
  );
};

export default LoadingAnimation;
