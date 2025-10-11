import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const images = [
  "/assets/Hero1.png",
  "/assets/Hero2.jpg",
  "/assets/Hero3.jpg",
];

const HomeHero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const scrollToAbout = () => {
    const section = document.getElementById("home-about");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered) {
        setCurrentIndex((prev) => (prev + 1) % images.length);
      }
    }, 4000);
    return () => clearInterval(interval);
  }, [isHovered]);

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const floatingElements = [
    { delay: 0, duration: 6, x: 100, y: 50 },
    { delay: 1, duration: 8, x: -80, y: 80 },
    { delay: 2, duration: 7, x: 120, y: 120 },
    { delay: 3, duration: 9, x: -60, y: 30 },
  ];

  return (
    <div className="relative w-full h-screen overflow-hidden flex items-center justify-center bg-gradient-to-br from-purple-900 via-blue-900 to-gray-900">
      {/* Enhanced Background Slideshow */}
      <div
        className="absolute inset-0"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{
              opacity: 1,
              scale: 1,
              transition: { duration: 1.5, ease: [0.25, 0.46, 0.45, 0.94] },
            }}
            exit={{
              opacity: 0,
              scale: 1.05,
              transition: { duration: 1, ease: "easeInOut" },
            }}
            className="absolute w-full h-full"
          >
            <img
              src={images[currentIndex]}
              alt={`slide-${currentIndex}`}
              className="w-full h-full object-cover"
            />
            {/* Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/40" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/70" />
          </motion.div>
        </AnimatePresence>

        {/* Animated Grid Pattern */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 2 }}
          className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"
        />
      </div>

      {/* Enhanced Particle Network */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          background: { color: "transparent" },
          fpsLimit: 120,
          interactivity: {
            events: {
              onHover: { enable: true, mode: "trail" },
              onClick: { enable: true, mode: "push" },
              resize: true,
            },
            modes: {
              trail: { delay: 0.1, quantity: 3 },
              push: { quantity: 4 },
              bubble: { distance: 200, size: 10, duration: 2 },
            },
          },
          particles: {
            color: {
              value: ["#4285F4", "#34A853", "#FBBC05", "#EA4335"], // Google colors
            },
            links: {
              enable: true,
              color: "#ffffff",
              distance: 150,
              opacity: 0.2,
              width: 1,
              blink: true,
              consent: true,
            },
            move: {
              enable: true,
              speed: 1.5,
              direction: "none",
              outModes: { default: "bounce" },
              trail: {
                enable: true,
                length: 10,
                fillColor: "#ffffff",
              },
            },
            number: {
              value: 80,
              density: { enable: true, area: 800 },
            },
            opacity: {
              value: { min: 0.1, max: 0.8 },
              animation: {
                enable: true,
                speed: 1,
                sync: false,
              },
            },
            shape: {
              type: ["circle", "polygon"],
              options: {
                polygon: { sides: 6 },
              },
            },
            size: {
              value: { min: 1, max: 5 },
              animation: {
                enable: true,
                speed: 3,
                minimumValue: 0.1,
                sync: false,
              },
            },
            wobble: {
              enable: true,
              distance: 10,
              speed: 10,
            },
          },
          detectRetina: true,
          motion: {
            reduce: { factor: 4, value: true },
          },
        }}
        className="absolute inset-0"
      />

      {/* Floating Shapes */}
      {floatingElements.map((element, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0.3, 0.7, 0.3],
            scale: [1, 1.2, 1],
            x: [0, element.x, 0],
            y: [0, element.y, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: element.duration,
            delay: element.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className={`absolute w-4 h-4 rounded-full ${
            index % 4 === 0
              ? "bg-blue-400"
              : index % 4 === 1
              ? "bg-green-400"
              : index % 4 === 2
              ? "bg-yellow-400"
              : "bg-red-400"
          } opacity-30`}
          style={{
            left: `${20 + ((index * 20) % 60)}%`,
            top: `${30 + ((index * 15) % 40)}%`,
          }}
        />
      ))}

      {/* Slide Navigation */}
      <motion.button
        onClick={prevSlide}
        whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.2)" }}
        whileTap={{ scale: 0.9 }}
        // className="absolute left-4 z-20 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white border border-white/20"
      >
        ‹
      </motion.button>
      <motion.button
        onClick={nextSlide}
        whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.2)" }}
        whileTap={{ scale: 0.9 }}
        // className="absolute right-4 z-20 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white border border-white/20"
      >
        ›
      </motion.button>

      {/* Slide Indicators */}

      {/* Enhanced Hero Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto">
        {/* Animated Headline */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mb-8"
        >
          <motion.h1
            className="text-6xl sm:text-5xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tighter"
            style={{
              background:
                "linear-gradient(45deg, #4285F4, #34A853, #FBBC05, #EA4335)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundSize: "300% 300%",
            }}
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            Telecom Infrastructure Solutions
          </motion.h1>
        </motion.div>

        {/* Enhanced Subtext */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
          className="mb-12"
        >
          <motion.p
            className="text-xl md:text-3xl lg:text-4xl font-light mb-6 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            EMPOWERING CONNECTIVITY <br />
            <motion.span
              className="font-semibold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"
              animate={{
                textShadow: [
                  "0 0 20px rgba(66, 133, 244, 0.5)",
                  "0 0 30px rgba(66, 133, 244, 0.8)",
                  "0 0 20px rgba(66, 133, 244, 0.5)",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              ENGINEERING EXCELLENCE
            </motion.span>{" "}
          </motion.p>

          {/* Animated Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="flex justify-center space-x-8 md:space-x-16 mt-8"
          >
            {[
              { number: "2200+", label: "Telecom Tower" },
              { number: "3000+ KM", label: "Optical Fiber RollOut" },
              { number: "500+", label: "FTTH" },
              { number: "2", label: "MSC/Data Center Infra" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.8 + index * 0.2, type: "spring" }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="text-center"
              >
                <div className="text-2xl md:text-4xl font-bold text-cyan-400 drop-shadow-lg">
                  {stat.number}
                </div>
                <div className="text-sm md:text-lg text-gray-300">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Learn More button */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
            className="flex justify-center items-center"
          >
            <motion.button
              onClick={scrollToAbout}
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(255,255,255,0.1)",
                y: -2,
              }}
              whileTap={{ scale: 0.95 }}
              className="cursor-pointer px-12 py-4 text-white font-semibold rounded-full backdrop-blur-sm border border-white/30 hover:border-white/50 transition-all duration-300"
            >
              Learn More
            </motion.button>
          </motion.div>
      </div>

      {/* Enhanced Scroll Hint */}
      <motion.div
        initial={{ y: 0, opacity: 0 }}
        animate={{ y: [0, -20, 0], opacity: [0, 1, 0] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute bottom-8 right-8 z-20"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="w-16 h-16 border-2 border-white/30 rounded-full flex items-center justify-center"
        >
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-white text-xs text-center"
          >
            Scroll
            <br />
            Down
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Pulse Rings */}
      <motion.div
        animate={{
          scale: [1, 2, 2.5, 1],
          opacity: [0.5, 0.3, 0, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeOut",
        }}
        className="absolute inset-0 border-2 border-cyan-400/30 rounded-full m-auto w-32 h-32"
      />
    </div>
  );
};

export default HomeHero;
