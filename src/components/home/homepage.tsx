"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  FolderIcon,
  ContactIcon,
  ChevronDownIcon,
  HomeIcon,
  BookOpenIcon,
  MessageCircleIcon,
  InfoIcon,
  MailIcon,
} from "lucide-react";
import blueLogo from "../../../public/images/dropboxlogo.png";
import whiteLogo from "../../../public/images/dropboxwhite.png";
import Iconography from "./sections/Iconography";
import Framework from "./sections/Framework";
import VoiceAndTone from "./sections/VoiceAndTone";
import Logo from "./sections/Logo";
import Typography from "./sections/Typography";
import Color from "./sections/Color";
import Imagery from "./sections/Imagery";
import Motion from "./sections/Motion";
import DropBox from "./sections/DropBox";

// Define more comprehensive section item interface
interface SectionItem {
  title: string;
  description: string;
  defaultBgColor: string;
  hoverBgColor: string;
  defaultTextColor: string;
  hoverTextColor: string;
  defaultIcon: React.ElementType;
  hoverIcon: React.ElementType;
}

// Content and existing types remain the same as in previous implementation
interface ContentItem {
  title: string;
  icon: string;
  bgColor: string;
  textColor: string;
}

const Homepage: React.FC = () => {
  // Existing content items
  const contentItems: ContentItem[] = [
    {
      title:
        "At Dropbox, our Brand Guidelines help us infuse everything we make with identity.",
      icon: blueLogo.src,
      bgColor: "bg-white",
      textColor: "text-blue-500",
    },
    {
      title:
        "From icons to illustration, logos and language, this collection is the foundation for how Dropbox looks, feels and sounds like Dropbox.",
      icon: whiteLogo.src,
      bgColor: "bg-blue-500",
      textColor: "text-white",
    },
  ];

  // Enhanced sections with more interactive properties
  const websiteSections: SectionItem[] = [
    {
      title: "Framework",
      description: "Our visual identity system",
      defaultBgColor: "#283750",
      hoverBgColor: "#000000",
      defaultTextColor: "text-white",
      hoverTextColor: "text-white",
      defaultIcon: FolderIcon,
      hoverIcon: BookOpenIcon,
    },
    {
      title: "Voice & Tone",
      description: "Explore our solutions",
      defaultBgColor: "#fad24b",
      hoverBgColor: "#000000",
      defaultTextColor: "#684505",
      hoverTextColor: "text-white",
      defaultIcon: FolderIcon,
      hoverIcon: HomeIcon,
    },
    {
      title: "Logo",
      description: "Guides and documentation",
      defaultBgColor: "#3dd3ee",
      hoverBgColor: "#000000",
      defaultTextColor: "#055463",
      hoverTextColor: "text-white",
      defaultIcon: FolderIcon,
      hoverIcon: ChevronDownIcon,
    },
    {
      title: "Typography",
      description: "Help and community",
      defaultBgColor: "#fa551e",
      hoverBgColor: "#000000",
      defaultTextColor: "text-white",
      hoverTextColor: "text-white",
      defaultIcon: FolderIcon,
      hoverIcon: MessageCircleIcon,
    },
    {
      title: "Iconography",
      description: "Our story and mission",
      defaultBgColor: "#B4DC19",
      hoverBgColor: "#000000",
      defaultTextColor: "#175641",
      hoverTextColor: "text-white",
      defaultIcon: FolderIcon,
      hoverIcon: InfoIcon,
    },
    {
      title: "Color",
      description: "Get in touch with us",
      defaultBgColor: "#ff8c19",
      hoverBgColor: "#000000",
      defaultTextColor: "text-white",
      hoverTextColor: "text-white",
      defaultIcon: ContactIcon,
      hoverIcon: MailIcon,
    },

    {
      title: "Imagery",
      description: "Get in touch with us",
      defaultBgColor: "#892055",
      hoverBgColor: "#000000",
      defaultTextColor: "text-white",
      hoverTextColor: "text-white",
      defaultIcon: ContactIcon,
      hoverIcon: MailIcon,
    },

    {
      title: "Motion",
      description: "Get in touch with us",
      defaultBgColor: "#c8aff0",
      hoverBgColor: "#000000",
      defaultTextColor: "#682760",
      hoverTextColor: "text-white",
      defaultIcon: ContactIcon,
      hoverIcon: MailIcon,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isZoomedOut, setIsZoomedOut] = useState(false);
  const [keyPressCount, setKeyPressCount] = useState(0);
  const [hoveredSection, setHoveredSection] = useState<number | null>(null);

  // Existing key press effect
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowDown" && !isAnimating) {
        setIsAnimating(true);

        setKeyPressCount((prev) => prev + 1);

        if (keyPressCount === 1) {
          setIsZoomedOut(true);
          setKeyPressCount(0);
        } else {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % contentItems.length);
        }

        setTimeout(() => setIsAnimating(false), 100);
      }

      if (event.key === "Escape" && isZoomedOut) {
        setIsZoomedOut(false);
        setKeyPressCount(0);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [contentItems.length, isAnimating, keyPressCount, isZoomedOut]);

  // Existing icon variants and current item
  const iconVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, delay: 0.2 },
    },
    exit: { opacity: 0, scale: 0.8, transition: { duration: 0.3 } },
  };

  const currentItem = contentItems[currentIndex];

  return (
    <motion.div className="relative w-full items-center justify-center h-screen p-4 overflow-hidden">
      {/* Grid lines */}
      <div className="absolute inset-0 grid grid-cols-4 grid-rows-3 w-full h-full pointer-events-none">
        {[...Array(14)].map((_, i) => (
          <div
            key={`col-${i}`}
            className={`border-l border border-[#bfd8ff] h-full`}
          />
        ))}
      </div>

      {isZoomedOut ? (
        // Zoomed out view - Website sections overview
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="w-full h-full"
        >
          <div className="text-center ">
            {/* <h1 className="text-3xl font-bold text-blue-600">
              Dropbox Website
            </h1> */}
            {/* <p className="text-gray-600">
              Press ESC to return to detailed view
            </p> */}
          </div>

          {/* <div className="relative  grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-2 "> */}
          {/* {websiteSections.map((section, index) => {
              const isHovered = hoveredSection === index;

              // Determine current icon based on hover state
              const CurrentIcon = isHovered
                ? section.hoverIcon
                : section.defaultIcon;

              return (
                <motion.div
                  key={`section-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    transition: { delay: index * 0.3 },
                  }}
                  onHoverStart={() => setHoveredSection(index)}
                  onHoverEnd={() => setHoveredSection(null)}
                  className=" shadow-lg h-72"
                  style={{
                    backgroundColor: isHovered
                      ? section.hoverBgColor
                      : section.defaultBgColor,
                  }}
                >
                  <div className="p-4 h-full justify-between">
                    <div className="flex flex-col justify-between">
                      <h2
                        className={`text-2xl font-bold mb-2 ${
                          isHovered
                            ? section.hoverTextColor
                          :
                          section.defaultTextColor
                        }`}
                      >
                        {section.title}
                      </h2>

                      <div className="mb-4">
                        <CurrentIcon
                          className={`w-12 h-12 ${
                            isHovered
                              ? section.hoverTextColor
                              : section.defaultTextColor
                          }`}
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })} */}

          {/* <div className="relative ">
            <div className="flex gap-3">
              <Framework />
              <VoiceAndTone />
              <DropBox />
              <Logo />
              <Typography />
            </div>
            <div className="flex gap-3">
              <div className="mt-3">
                <Iconography />
              </div>
              <Color />
              <Imagery />
              <Motion />
            </div>
          </div> */}

          <div className="relative space-y-3">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
              <Framework />
              <VoiceAndTone />
              <DropBox />
              <Logo />
              <Typography />
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
              <Iconography />

              <Color />
              <Imagery />
              <Motion />
            </div>
          </div>
        </motion.div>
      ) : (
        // Zoomed in view - Existing implementation
        <motion.div
          className="relative border border-[#bfd8ff] h-[30rem] p-5 mx-auto w-1/2 flex flex-col justify-between"
          animate={{
            backgroundColor:
              currentItem.bgColor === "bg-white" ? "#FFFFFF" : "#0061fe",
            color:
              currentItem.textColor === "text-white" ? "#FFFFFF" : "#0061fe",
            fontSize: currentItem.bgColor === "bg-white" ? "2.4rem" : "1.8rem",
          }}
          transition={{ duration: 0.5 }}
        >
          {/* Existing zoomed-in content remains the same */}
          <div>
            <h1
              className={`${currentItem.textColor} font-bold leading-10 font-sans`}
            >
              {currentItem.title}
            </h1>
          </div>

          <div className="flex justify-between items-center w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={`icon-${currentIndex}`}
                variants={iconVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <Image
                  src={currentItem.icon}
                  alt="Icon"
                  width={44}
                  height={44}
                  className="object-contain"
                />
              </motion.div>
            </AnimatePresence>

            {currentItem.bgColor === "bg-white" && (
              <div className="items-center">
                <motion.div
                  animate={{
                    y: [0, 6, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "loop",
                  }}
                  className="w-10 h-10"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 48 48"
                  >
                    <path
                      fill="none"
                      stroke="#4F9BFF"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="4"
                      d="M36 12L24 24L12 12m24 12L24 36L12 24"
                    />
                  </svg>
                </motion.div>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Homepage;
