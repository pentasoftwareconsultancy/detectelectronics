// ProjectManagement.jsx
import React from "react";
import { motion } from "framer-motion";
import SplitText from "../animationComponents/SplitText";
import bg from "../../assets/ProjectManagementBG.jpeg";

const ProjectManagement = () => {
  // Motion variants
  const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const imageVariant = {
    hidden: { opacity: 0, x: -50, scale: 0.95 },
    visible: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const textVariant = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.3 } },
  };

  return (
    <div className="w-full bg-gradient-to-b from-gray-50 to-gray-100 py-16 antialiased">
      <div className="w-full max-w-7xl mx-auto px-4">

        {/* Header Section */}
        <div
          className="w-full bg-cover bg-center relative py-24 md:py-32 text-center text-white mb-16 rounded-3xl overflow-hidden shadow-lg"
          style={{ backgroundImage: `url(${bg})` }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="relative z-10">
            <SplitText
              text="PROJECT MANAGEMENT CONSULTANT"
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
              <span className="block w-16 h-[2px] bg-yellow-500 mx-auto mt-3 rounded"></span>
            </SplitText>
          </div>
        </div>

        {/* Main Content */}
        <motion.div
          className="bg-white p-6 sm:p-10 rounded-3xl shadow-lg flex flex-col lg:flex-row gap-12 items-start"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >

          {/* Image Section */}
          <motion.div
            className="lg:w-2/5 w-full flex justify-center"
            variants={imageVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <img
              src="https://i.pinimg.com/1200x/21/2d/bd/212dbd9bd43198422c0f0e01ca3d1ade.jpg"
              alt="Project Management"
              className="rounded-3xl shadow-2xl w-full max-w-lg object-cover"
              loading="lazy"
            />
          </motion.div>

          {/* Text Section */}
          <motion.div
            className="lg:w-3/5 w-full flex flex-col text-gray-700 text-base md:text-lg leading-relaxed gap-4"
            variants={textVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <p>
              Quality management is a method of ensuring the efficiency in designing, developing, and implementing a product or service with respect to the system and its performance.
            </p>
            <p>
              Quality management therefore uses quality assurance and control of processes as well as products to achieve more consistent quality. DESIPL considers Quality as a key factor at OFC areas.
            </p>
            <p>
              DESIPL acts as a bridge between the Client and Vendor to meet the quality measures by providing daily progress report of work.
            </p>
          </motion.div>

        </motion.div>
      </div>
    </div>
  );
};

export default ProjectManagement;
