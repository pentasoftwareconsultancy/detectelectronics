import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import sem1Logo from "../../assets/sem11.png";
import sem2Logo from "../../assets/sem12.png";
import sem3Logo from "../../assets/sem13.png";
import sem4Logo from "../../assets/sem14.png";
import sem5Logo from "../../assets/sem15.png";
import sem6Logo from "../../assets/sem16.png";
import sem7Logo from "../../assets/sem17.jpg";

const clients = [
  sem1Logo,
  sem2Logo,
  sem3Logo,
  sem4Logo,
  sem5Logo,
  sem6Logo,
  sem7Logo,
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

const buttonVariants = {
  initial: { scale: 1 },
  hover: {
    scale: 1.05,
    backgroundColor: "#10B981",
    color: "white",
    transition: { duration: 0.3, ease: "easeInOut" },
  },
  tap: { scale: 0.95 },
};

const logoVariants = {
  hover: {
    scale: 1.1,
    rotate: [0, -5, 5, 0],
    transition: { duration: 0.4, ease: "easeInOut" },
  },
};

export default function FooterClients() {
  const navigate = useNavigate();
  const loopLogos = [...clients, ...clients];

  const handleContactNavigate = (type) => {
    navigate("/contact", {
      state: { inquiryType: type, timestamp: new Date().toISOString() },
    });
  };

  return (
    <footer className="bg-gradient-to-b bg-white py-20 px-8 overflow-hidden relative">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-green-100 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-yellow-100 rounded-full opacity-20 blur-3xl"></div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-7xl mx-auto relative z-10"
      >
        {/* Join Us & Vendorship */}
        <div className="grid lg:grid-cols-2 gap-16 mb-24">
          {/* Career Opportunity */}
          <motion.div variants={itemVariants} className="group">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 group-hover:border-green-200">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-7 h-7 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h1 className="text-4xl font-bold text-gray-800 mb-2">
                    Join Us
                  </h1>
                  <h2 className="text-xl font-semibold text-gray-700">
                    Career Opportunity
                  </h2>
                </div>
              </div>
              <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                DESIPL is an exciting place to work. We hire exceptional people,
                empowered to think independently and gain valuable career
                experience in a dynamic environment that fosters innovation and
                professional growth.
              </p>
              <motion.button
                variants={buttonVariants}
                initial="initial"
                whileHover="hover"
                whileTap="tap"
                onClick={() => handleContactNavigate("career")}
                className="text-green-600 font-semibold text-lg py-3 px-8 border-2 border-green-500 rounded-xl hover:shadow-lg transition-all duration-300 flex items-center gap-2"
              >
                Register here →
              </motion.button>
            </div>
          </motion.div>

          {/* Vendorship Opportunity */}
          <motion.div variants={itemVariants} className="group">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 group-hover:border-yellow-200">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-7 h-7 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                </div>
                <div>
                  <h2 className="text-4xl font-bold text-gray-800 mb-2">
                    Partner With Us
                  </h2>
                  <h3 className="text-xl font-semibold text-gray-700">
                    Vendorship Opportunity
                  </h3>
                </div>
              </div>
              <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                Know more about how to become a supplier for DESIPL, get
                opportunities to participate in our sourcing selection
                processes. All vendors may register online to work on exciting
                projects and grow with us.
              </p>
              <motion.button
                variants={buttonVariants}
                initial="initial"
                whileHover="hover"
                whileTap="tap"
                onClick={() => handleContactNavigate("vendorship")}
                className="text-green-600 font-semibold text-lg py-3 px-8 border-2 border-green-500 rounded-xl hover:shadow-lg transition-all duration-300 flex items-center gap-2"
              >
                Register here →
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Clients Section */}
        <motion.div variants={itemVariants}>
          <div className="flex items-center gap-8 mb-16">
            <motion.div
              className="bg-gradient-to-br from-yellow-400 to-yellow-600 w-24 h-24 flex items-center justify-center rounded-2xl shadow-lg"
              whileHover={{
                scale: 1.05,
                rotate: [0, -5, 5, 0],
                transition: { duration: 0.5 },
              }}
            >
              <svg
                className="w-12 h-12 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path d="M12 2L2 7l10 15 10-15z" />
                <path d="M2 7l10 15 10-15" />
                <path d="M12 2v20" />
              </svg>
            </motion.div>
            <div>
              <h2 className="text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-3">
                OUR CLIENTS
              </h2>
              <p className="text-xl text-gray-600">
                Precious & Happy clients who trust us
              </p>
            </div>
          </div>

          {/* Sliding Logos */}
          <motion.div
            className="flex gap-20 items-center"
            animate={{
              x: ["0%", "-50%"],
              y: [0, -10, 0, 10, 0], // 👈 adds wave-like vertical motion
            }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 10,
              ease: "linear",
            }}
          >
            {loopLogos.map((logo, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0"
                variants={logoVariants}
                whileHover="hover"
              >
                <img
                  src={logo}
                  alt={`Client ${(index % clients.length) + 1}`}
                  className="h-20 w-auto object-contain filter transition-all duration-300"
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Copyright Section */}
        <motion.div
          variants={itemVariants}
          className="max-w-7xl mx-auto mt-24 pt-12 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-4"
        >
          {/* Left Side - Company Maintainer */}
          <div className="text-sm text-gray-600">
            Maintain By:{" "}
            <span className="font-semibold text-green-600">
              Devcons Software
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
