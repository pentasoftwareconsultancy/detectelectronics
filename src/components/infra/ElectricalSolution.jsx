import React from "react";
import { motion } from "framer-motion";
import img from "../../assets/TelecomTower.png"; // replace with your actual image path
import SplitText from "../animationComponents/SplitText";
import Electrical from "../../assets/Electrical.jpg";

const ElectricalSolution = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section className="overflow-hidden py-16">
      {/* ===== Header Section ===== */}
      <div
        className="w-full bg-cover bg-center relative py-20 text-center text-white mb-16"
        style={{ backgroundImage: `url(${Electrical})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10">
          <SplitText
            text="ELECTRICAL CONSTRUCTION"
            className="text-4xl md:text-5xl font-semibold tracking-wide inline-block"
            delay={100}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
          >
            <span className="block w-16 h-[2px] bg-yellow-500 mx-auto mt-3"></span>
          </SplitText>
        </div>
      </div>

      {/* ===== Content Section ===== */}
      <motion.div
        className="mx-auto px-6 md:px-10 py-12 bg-white mt-16 rounded-3xl"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.p
          className="text-gray-700 text-base md:text-lg mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Detect Electronics System Private Limited is actively involved in
          Electrical Construction works for Telecom, Industrial, and
          Infrastructure sectors, providing complete electrical installation and
          commissioning services.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Left Content */}
          <motion.ul
            className="space-y-5 text-gray-800 text-[15px] border-l border-gray-200 pl-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              "Electrical Panel Installation and Commissioning",
              "Cable Laying (HT/LT Power Cables, Control Cables)",
              "Earthing System Installation",
              "Lighting and Power Distribution System",
              "Generator and Power Backup Setup",
              "Solar Power Integration for Telecom Sites",
              "Electrical Maintenance and Fault Rectification",
              "Testing and Certification as per Standards",
            ].map((item, index) => (
              <motion.li
                key={index}
                className="flex items-start gap-2 border-b border-gray-200 pb-2"
                custom={index}
                variants={listItemVariants}
              >
                <span className="text-sky-500 font-bold">›</span>
                <span>{item}</span>
              </motion.li>
            ))}
          </motion.ul>

          {/* Right Image */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            viewport={{ once: true }}
          >
            <img
              src={img}
              alt="Electrical Construction"
              className="rounded-4xl shadow-2xl w-full max-w-lg object-cover"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ElectricalSolution;