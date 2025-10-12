import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import SplitText from "../animationComponents/SplitText";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const CivilConstruction = () => {
  const sliderRef = useRef(null);

  // Images for slider
  const images = [
    "/assets/CivilConstruction/civil1.jpg",
    "/assets/CivilConstruction/civil2.jpg",
    "/assets/CivilConstruction/civil3.jpg",
    "/assets/CivilConstruction/civil4.jpg",
    "/assets/CivilConstruction/civil5.jpg",
    "/assets/CivilConstruction/civil6.jpg",
  ];

  // Motion variants
  const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.15, duration: 0.5, ease: "easeOut" },
    }),
  };

  useEffect(() => {
    // Right to left slide animation
    if (sliderRef.current) {
      const slides = sliderRef.current.querySelectorAll('.slide');
      const totalSlides = slides.length;
      
      // Set initial positions
      gsap.set(slides, {
        xPercent: (i) => i * 100
      });

      // Create timeline with pauses
      const tl = gsap.timeline({
        repeat: -1
      });

      // Add slide animations with pauses
      for (let i = 0; i < totalSlides; i++) {
        // Slide movement (1 second)
        tl.to(slides, {
          xPercent: `-=${100}`,
          duration: 1,
          ease: "power2.inOut",
          modifiers: {
            xPercent: gsap.utils.wrap(-100, (totalSlides - 1) * 100)
          }
        });
        
        // Pause (3 seconds)
        tl.to({}, {
          duration: 3
        });
      }

      // Start animation when in view
      ScrollTrigger.create({
        trigger: sliderRef.current,
        start: "top 80%",
        onEnter: () => tl.play(),
        onLeave: () => tl.pause(),
        onEnterBack: () => tl.play(),
        onLeaveBack: () => tl.pause(),
      });
    }
  }, []);

  return (
    <div className="w-full bg-gradient-to-b from-gray-50 to-gray-100 py-16 antialiased font-sans text-gray-800">
      <div className="w-full max-w-7xl mx-auto px-4">

        {/* Header Section */}
        <div
          className="w-full bg-cover bg-center relative py-24 md:py-32 text-center text-white mb-16 rounded-3xl overflow-hidden shadow-lg object-top"
          style={{ backgroundImage: `url(/assets/Hero1.png)` }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="relative z-10">
            <SplitText
              text="CIVIL CONSTRUCTION"
              className="text-4xl md:text-5xl font-semibold tracking-wide inline-block font-inter"
              delay={100}
              duration={0.6}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
            >
              <span className="block w-16 h-[2px] bg-yellow-500 mx-auto mt-3 rounded"></span>
            </SplitText>
          </div>
        </div>

        {/* Main Content */}
        <motion.div
          className="bg-white p-6 sm:p-10 rounded-3xl shadow-lg"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="flex flex-col lg:flex-row gap-12 items-start w-full">

            {/* Text Section */}
            <article className="lg:w-3/5 text-gray-700 text-base md:text-lg leading-relaxed font-inter">
              <motion.p
                className="text-justify mb-6 font-medium"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                Detect Electronics System Private Limited is actively involved in
                <strong> Civil Construction</strong> for Telecom Towers and MSC/BSC
                locations, as well as <strong>Industrial construction</strong> covering
                both structural and super-structural works.
              </motion.p>

              <motion.h3
                className="text-xl font-semibold text-gray-900 mt-8 mb-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                Telecom
              </motion.h3>
              <ul className="mt-2 list-none space-y-3">
                {[
                  "Construction of Ground Based & Roof Top Tower Foundations as per design and drawings.",
                  "Installation of Tower, GBM, Delta & Pole Structures.",
                  "Strengthening of existing tower structures.",
                  "Construction work for MSC & BSC locations.",
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    className="flex items-start text-gray-700 leading-relaxed gap-2 border-b border-gray-100 pb-2"
                    custom={i}
                    variants={listItemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    <span className="text-sky-500 mr-2 mt-1 text-lg">➤</span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>

              <motion.h3
                className="text-xl font-semibold text-gray-900 mt-8 mb-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                Industrial Construction
              </motion.h3>
              <ul className="mt-2 list-none space-y-3">
                {[
                  "Construction of factory sheds and administrative buildings.",
                  "Execution of structural and super-structural civil works as per industrial standards.",
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    className="flex items-start text-gray-700 leading-relaxed gap-2 border-b border-gray-100 pb-2"
                    custom={i}
                    variants={listItemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    <span className="text-sky-500 mr-2 mt-1 text-lg">➤</span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </article>

            {/* Image Slider Section - Right to Left Slide */}
            <div className="lg:w-2/5 w-full relative h-[500px] rounded-xl border-4 border-gray-200 shadow-xl overflow-hidden">
              <div
                ref={sliderRef}
                className="w-full h-full relative"
              >
                {/* Slides Container */}
                <div className="absolute inset-0 flex">
                  {images.map((src, index) => (
                    <div
                      key={index}
                      className="slide absolute top-0 left-0 w-full h-full flex-shrink-0"
                    >
                      <img
                        src={src}
                        alt={`Civil Construction ${index + 1}`}
                        className="w-full h-full object-cover"
                        draggable={false}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CivilConstruction;