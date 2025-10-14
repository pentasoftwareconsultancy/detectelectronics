import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

const backgrounds = [
  "/assets/1.png",
  "/assets/2.png",
  "/assets/3.png",
  "/assets/4.png"
];

const slideContent = [
  { heading: "Telecom Infra", subheading: "2,200+ Telecom Tower" },
  { heading: "Enterprise Solutions", subheading: "500+ FTTH" },
  { heading: "Tech. Skill Development", subheading: "200+ Skill Development" },
  { heading: "Global Standards", subheading: "3,000+ KM Optical Fiber RollOut" }
];

const HomeHero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(-1); // initial right-to-left
  const navigate = useNavigate();

  // Autoplay sliding with alternating direction
  useEffect(() => {
    const interval = setInterval(() => {
      setDirection((prev) => -prev); // toggle direction
      setCurrentIndex((prev) => (prev + 1) % backgrounds.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const backgroundVariants = {
    enter: (dir) => ({
      x: dir > 0 ? "100%" : "-100%",
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.7, ease: "easeInOut" }
    },
    exit: (dir) => ({
      x: dir > 0 ? "-100%" : "100%",
      opacity: 0,
      transition: { duration: 0.7, ease: "easeInOut" }
    })
  };

  return (
    <div className="relative w-full h-screen overflow-hidden flex items-center justify-center bg-gray-900">

      {/* Image Slider */}
      <div className="absolute inset-0">
        <AnimatePresence mode="sync" custom={direction} initial={false}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={backgroundVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute w-full h-full"
          >
            <img
              src={backgrounds[currentIndex]}
              alt={`background-${currentIndex}`}
              className="w-full h-full object-cover"
            />

            {/* Overlay Text */}
            <div
              className={`absolute top-1/2 transform -translate-y-1/2 max-w-xl p-6 rounded-2xl bg-black/15 ${
                currentIndex % 2 === 0 ? "right-12 text-right" : "left-12 text-left"
              }`}
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
                {slideContent[currentIndex].heading}
              </h1>
              <p className="text-xl md:text-2xl text-white font-medium">
                {slideContent[currentIndex].subheading}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Learn More Button */}
      <div className="absolute bottom-40 left-1/2 transform -translate-x-1/2 z-10">
        <motion.button
          onClick={() => navigate("/about")}
          whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-3 border border-white text-white rounded-full bg-transparent hover:bg-white/10 transition-all duration-300 text-lg font-semibold"
        >
          Learn More
        </motion.button>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-28 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
        {backgrounds.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1);
              setCurrentIndex(index);
            }}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-cyan-400 scale-125" : "bg-white/50 hover:bg-white/80"
            }`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          />
        ))}
      </div>

    </div>
  );
};

export default HomeHero;
