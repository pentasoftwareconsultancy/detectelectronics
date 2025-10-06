import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaBolt,
  FaNetworkWired,
  FaHardHat,
  FaChevronRight,
  FaBroadcastTower,
} from "react-icons/fa";

const HomeServices = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [activeService, setActiveService] = useState(null);

  const services = [
    {
      icon: FaBroadcastTower,
      title: "Telecom Tower",
      description:
        "We provide expert installation & commissioning of BTS and WLL radio systems for seamless telecom infrastructure.",
      fullDescription:
        "We specialize in comprehensive telecom tower solutions including installation, commissioning, and maintenance of BTS and WLL systems. Our expert team ensures seamless connectivity and optimal performance for all your telecommunication needs.",
      features: ["BTS Installation", "WLL Systems", "Radio Systems", "Commissioning"],
    },
    {
      icon: FaBolt,
      title: "Electrical Solutions",
      description:
        "Complete electrical setup for telecom towers, including MSEDCL approvals, load handling & transformer installation.",
      fullDescription:
        "Complete electrical solutions including MSEDCL approvals, load management, transformer installations, and power distribution systems. We handle all regulatory requirements and ensure reliable power supply for your infrastructure.",
      features: ["MSEDCL Approvals", "Load Management", "Transformer Setup", "Power Distribution"],
    },
    {
      icon: FaNetworkWired,
      title: "Optical Fiber Cable",
      description:
        "End-to-end OFC services: route survey, trenching, ducting, and fiber laying for ultra-fast data transmission.",
      fullDescription:
        "End-to-end optical fiber cable solutions from initial route survey to final implementation. Our services include precise route marking, professional trenching, ducting, and fiber optic cable laying for high-speed data transmission.",
      features: ["Route Survey", "Trenching", "Ducting", "Fiber Laying"],
    },
    {
      icon: FaHardHat,
      title: "Civil Construction",
      description:
        "Robust civil construction services for GBT, RTT & BTS foundations, ensuring structural strength and compliance.",
      fullDescription:
        "Comprehensive civil construction services for various tower types including GBT, RTT, and BTS foundations. We ensure structural integrity and compliance with all construction standards and regulations.",
      features: ["GBT Construction", "RTT Foundations", "BTS Foundations", "Structural Work"],
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 15, duration: 0.8 },
    },
    hover: {
      y: -10,
      scale: 1.05,
      transition: { type: "spring", stiffness: 300, damping: 20 },
    },
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* ===== Header ===== */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-300"
          >
            Our Services
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 128 }}
            transition={{ delay: 0.5, duration: 1 }}
            viewport={{ once: true }}
            className="w-32 h-1.5 bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400 mx-auto rounded-full mt-4"
          />
          <p className="text-gray-300 text-base sm:text-lg md:text-xl mt-6 max-w-2xl mx-auto">
            Comprehensive solutions for telecommunications, electrical, optical fiber, and civil infrastructure.
          </p>
        </div>

        {/* ===== Services Grid ===== */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              whileHover="hover"
              onHoverStart={() => setHoveredCard(index)}
              onHoverEnd={() => setHoveredCard(null)}
              onClick={() => setActiveService(activeService === index ? null : index)}
              className="group cursor-pointer bg-gradient-to-br from-blue-700/40 via-indigo-600/30 to-cyan-400/40 backdrop-blur-lg rounded-2xl p-6 sm:p-8 border border-blue-500/30 hover:border-cyan-400/50 transition-all duration-500 shadow-lg hover:shadow-cyan-500/30"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-500 via-indigo-400 to-cyan-400 rounded-2xl flex items-center justify-center mb-5 shadow-2xl">
                <service.icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-cyan-200 transition-colors duration-300">
                {service.title}
              </h3>

              <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6 group-hover:text-gray-200 transition-colors duration-300">
                {service.description}
              </p>

              <div className="flex items-center text-cyan-300 group-hover:text-cyan-200 font-semibold text-sm sm:text-base transition-colors duration-300">
                <span className="mr-2">Read More</span>
                <motion.div
                  animate={{ x: hoveredCard === index ? [0, 5, 0] : 0 }}
                  transition={{ duration: 0.6, repeat: hoveredCard === index ? Infinity : 0 }}
                >
                  <FaChevronRight className="w-4 h-4" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ===== Modal (Expanded Detail) ===== */}
        <AnimatePresence>
          {activeService !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
              onClick={() => setActiveService(null)}
            >
              <motion.div
                initial={{ scale: 0.8, y: 50, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.8, y: -50, opacity: 0 }}
                transition={{ type: "spring", stiffness: 120, damping: 20 }}
                className="relative bg-gradient-to-br from-blue-800/90 via-indigo-700/80 to-cyan-500/90 rounded-3xl p-6 sm:p-10 max-w-2xl w-full border border-cyan-400/50 shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setActiveService(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-red-500/30 hover:bg-red-500/40 rounded-full flex items-center justify-center text-white text-2xl"
                >
                  ×
                </button>

                {activeService !== null && (() => {
                  const ActiveIcon = services[activeService].icon;
                  return (
                    <>
                      <div className="flex items-start mb-6">
                        <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 via-indigo-400 to-cyan-400 rounded-2xl flex items-center justify-center mr-4 sm:mr-6 shadow-lg">
                          <ActiveIcon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                            {services[activeService].title}
                          </h3>
                          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"></div>
                        </div>
                      </div>

                      <p className="text-gray-200 text-base sm:text-lg leading-relaxed mb-8">
                        {services[activeService].fullDescription}
                      </p>

                      <h4 className="text-lg sm:text-xl font-semibold text-cyan-300 mb-4">
                        Key Features
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                        {services[activeService].features.map((feature, idx) => (
                          <motion.div
                            key={feature}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.05 * idx }}
                            className="flex items-center bg-white/10 rounded-lg px-4 py-3 border border-white/10"
                          >
                            <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                            <span className="text-gray-200 text-sm sm:text-base">{feature}</span>
                          </motion.div>
                        ))}
                      </div>

                      <motion.button
                        whileHover={{
                          scale: 1.05,
                          boxShadow: "0 10px 30px rgba(56, 189, 248, 0.4)",
                        }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold py-3 sm:py-4 px-6 rounded-2xl text-sm sm:text-lg"
                      >
                        Get This Service
                      </motion.button>
                    </>
                  );
                })()}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default HomeServices;