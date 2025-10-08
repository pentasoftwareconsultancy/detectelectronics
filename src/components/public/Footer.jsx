import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import sem1Logo from "../../assets/sem11.png";
import sem2Logo from "../../assets/sem12.png";
import sem3Logo from "../../assets/sem13.png";
import sem4Logo from "../../assets/sem14.png";
import sem5Logo from "../../assets/sem15.png";
import sem6Logo from "../../assets/sem16.png";
import sem7Logo from "../../assets/sem17.jpg";
import sem8Logo from "../../assets/sem18.png";
import sem9Logo from "../../assets/sem19.jpg";
import sem10Logo from "../../assets/sem20.png";
import sem11Logo from "../../assets/sem21.jpg";
// import sem12Logo from "../../assets/sem22.jpg";

const clients = [
  sem1Logo,
  sem2Logo,
  sem3Logo,
  sem4Logo,
  sem5Logo,
  sem6Logo,
  sem7Logo,
  sem8Logo,
  sem9Logo,
  sem10Logo,
  sem11Logo,
  // sem12Logo,
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, duration: 0.8 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const logoVariants = {
  hover: {
    scale: 1.1,
    rotate: [0, -5, 5, 0],
    transition: { duration: 0.4, ease: "easeInOut" },
  },
};

export default function FooterClients() {
  const [scrollDuration, setScrollDuration] = useState(20); // default duration for desktop
  const loopLogos = [...clients, ...clients];

  useEffect(() => {
    const updateSpeed = () => {
      const width = window.innerWidth;
      if (width <= 480) setScrollDuration(10);
      else if (width <= 768) setScrollDuration(15);
      else setScrollDuration(20);
    };
    updateSpeed();
    window.addEventListener("resize", updateSpeed);
    return () => window.removeEventListener("resize", updateSpeed);
  }, []);

  return (
    <footer className="bg-gradient-to-b bg-white py-20 px-8 overflow-hidden relative">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-7xl mx-auto relative z-10"
      >
        {/* Clients Section */}
        <motion.div variants={itemVariants}>
          <div className="flex items-center mb-16 flex-col">
            
            
              <h2 className="text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-3">
                OUR CLIENTS
              </h2>
              <p className="text-xl text-gray-600">
                Precious & Happy clients who trust us
              </p>
            </div>
          

          {/* Sliding Logos */}
          <div className="overflow-hidden relative">
            <motion.div
              className="flex gap-10 w-max"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                repeat: Infinity,
                repeatType: "loop",
                duration: scrollDuration,
                ease: "linear",
              }}
            >
              {loopLogos.map((logo, index) => (
                <motion.div
                  key={index}
                  className="flex-shrink-0"
                  whileHover="hover"
                >
                  <img
                    src={logo}
                    alt={`Client ${index + 1}`}
                    className="h-16 md:h-20 w-auto object-contain"
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Copyright Section */}
        <motion.div
          variants={itemVariants}
          className="max-w-7xl mx-auto mt-24 pt-12 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-4"
        >
          {/* Left Side - Company Maintainer */}
          <div className="text-sm text-gray-600">
            Maintain By:{" "}
            <span className="font-semibold text-blue-600">
              Devcons Software Solutions Pvt. Ltd.
            </span>
          </div>

          {/* Right Side - Copyright */}
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} DESIPL. All rights reserved.
          </p>
        </motion.div>
      </motion.div>
    </footer>
  );
}
