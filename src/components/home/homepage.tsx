// components/DropboxStyleComponent.tsx
"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import blueLogo from "../../../public/images/dropboxlogo.png";
import whiteLogo from "../../../public/images/dropboxwhite.png";

// Define content items type
interface ContentItem {
  title: string;
  icon: string;
  bgColor: string;
  textColor: string;
}

// Mock sections for demonstration
interface SectionItem {
  title: string;
  description: string;
  color: string;
}

const Homepage: React.FC = () => {
  // Array of content items to cycle through
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
        "From icons to illustration, logos and language, this collection is the foundation for how Dropbox looks, feels and sounds like Dropbox. ",
      icon: whiteLogo.src,
      bgColor: "bg-blue-500",
      textColor: "text-white",
    },
  ];

  // Sections for the zoomed out view
  const websiteSections: SectionItem[] = [
    {
      title: "Brand Guidelines",
      description: "Our visual identity system",
      color: "#0061fe",
    },
    {
      title: "Products",
      description: "Explore our solutions",
      color: "#5A9448",
    },
    {
      title: "Resources",
      description: "Guides and documentation",
      color: "#8D6A9F",
    },
    { title: "Support", description: "Help and community", color: "#E03C31" },
    {
      title: "About Us",
      description: "Our story and mission",
      color: "#F7B500",
    },
    { title: "Contact", description: "Get in touch with us", color: "#3D4853" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isZoomedOut, setIsZoomedOut] = useState(false);
  const [keyPressCount, setKeyPressCount] = useState(0);

  // Handle key press
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowDown" && !isAnimating) {
        setIsAnimating(true);

        // Increment key press counter
        setKeyPressCount((prev) => prev + 1);

        if (keyPressCount === 1) {
          // On second press, zoom out
          setIsZoomedOut(true);
          // Reset counter
          setKeyPressCount(0);
        } else {
          // On first press, change content
          setCurrentIndex((prevIndex) => (prevIndex + 1) % contentItems.length);
        }

        // Reset animation state
        setTimeout(() => setIsAnimating(false), 100);
      }

      // Handle escape to zoom back in
      if (event.key === "Escape" && isZoomedOut) {
        setIsZoomedOut(false);
        setKeyPressCount(0);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [contentItems.length, isAnimating, keyPressCount, isZoomedOut]);

  // Animation variants for icon only
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
    <motion.div className="relative w-full items-center justify-center h-screen p-8 overflow-hidden">
      {/* Grid lines - made more visible */}
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
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-blue-600">
              Dropbox Website
            </h1>
            <p className="text-gray-600">
              Press ESC to return to detailed view
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 px-4">
            {websiteSections.map((section, index) => (
              <motion.div
                key={`section-${index}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: index * 0.1 },
                }}
                className="border border-gray-200 rounded-lg overflow-hidden shadow-lg h-64"
              >
                <div
                  className="h-24"
                  style={{ backgroundColor: section.color }}
                ></div>
                <div className="p-4">
                  <h2 className="text-xl font-bold mb-2">{section.title}</h2>
                  <p className="text-gray-600">{section.description}</p>
                  <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
                    Explore
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      ) : (
        // Zoomed in view - Current content item
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
          <div>
            <h1
              className={`${currentItem.textColor} font-bold leading-10 font-sans`}
            >
              {currentItem.title}
            </h1>

            {keyPressCount === 1 && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className={`mt-4 text-sm ${currentItem.textColor}`}
              >
                Press ↓ again to see all sections
              </motion.p>
            )}
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
