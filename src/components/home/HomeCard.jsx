import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

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

const HomeCard = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center">
    {/* Join Us & Vendorship */}
        <div className="grid lg:grid-cols-2 gap-16 my-24 max-w-7xl">
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
                onClick={() => navigate("/career")}
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
                onClick={() => navigate("/contact")}
                className="text-green-600 font-semibold text-lg py-3 px-8 border-2 border-green-500 rounded-xl hover:shadow-lg transition-all duration-300 flex items-center gap-2"
                >
                Contact Us →
              </motion.button>
            </div>
          </motion.div>
        </div>
            </div>
  );
};

export default HomeCard;
