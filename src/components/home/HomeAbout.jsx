import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FaDownload,
  FaAward,
  FaUsers,
  FaRocket,
  FaShieldAlt,
  FaArrowRight,
  FaNetworkWired,
  FaTools,
  FaSatellite,
} from "react-icons/fa";
import CountUp from "react-countup";

const HomeAbout = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });
  const [visible, setVisible] = useState(false);
  const [flippedCard, setFlippedCard] = useState(null);

  useEffect(() => {
    if (isInView) setVisible(true);
  }, [isInView]);

  const handleFlip = (index) => {
    setFlippedCard(flippedCard === index ? null : index);
  };

  const handleDownload = () => {
    let fileUrl = "/assets/detectelectronics.pdf";
    let fileName = "detectelectronics.pdf";

    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const stats = [
    {
      icon: FaAward,
      number: 25,
      text: "Years Experience",
      suffix: "+",
      duration: 2.5,
    },
    {
      icon: FaUsers,
      number: 50,
      text: "Expert Team",
      suffix: "+",
      duration: 2,
    },
    { icon: FaRocket, number: 250, text: "Sites", suffix: "+", duration: 3 },
    {
      icon: FaShieldAlt,
      number: 99,
      text: "Quality Score",
      suffix: "%",
      duration: 2,
    },
  ];

  const hosting = [
    {
      title: "IP Infrastructure",
      icon: FaNetworkWired,
      points: [
        "Shared Hosting: Affordable and easy-to-use option for small websites.",
        "VPS Hosting: More control and resources for growing websites.",
        "Dedicated Hosting: Full server control for maximum power and customization.",
        "Cloud Hosting: Scalable and reliable option for dynamic needs.",
      ],
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50",
    },
    {
      title: "FTTx Rollout",
      icon: FaTools,
      points: [
        "Plan Options: Choose from basic to premium hosting plans.",
        "Features: Comprehensive features from basic to advanced.",
        "Billing Cycle: Monthly, yearly, or custom plans to fit your needs.",
      ],
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "from-green-50 to-emerald-50",
    },
    {
      title: "E2E OFC Network Roll-out",
      icon: FaSatellite,
      points: [
        "Uptime Guarantee: Guaranteed uptime for reliability.",
        "Server Speed: Fast server response times.",
        "Scalability: Easily scale your hosting as your site grows.",
        "Monitoring & Optimization: Continuous optimization for performance.",
      ],
      gradient: "from-purple-500 to-indigo-500",
      bgGradient: "from-purple-50 to-indigo-50",
    },
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#E8F2FF] via-[#F4F9FF] to-white py-20 px-6 md:px-12 overflow-hidden">
      {/* 🏆 Header */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center mb-20"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold text-[#1a3b7c] mb-4">
          About Us
        </h1>
        <div className="w-36 h-1.5 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full mb-6" />
        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
          Discover who we are, what we've achieved, and how our expertise drives
          excellence in every project we deliver.
        </p>
      </motion.div>

      {/* 📊 Stats Section */}
      <motion.div
        ref={ref}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mb-24 text-center"
      >
        {stats.map((stat, index) => {
          const StatIcon = stat.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 * index, duration: 0.8, type: "spring" }}
              className="flex flex-col items-center justify-center"
            >
              <StatIcon className="text-5xl text-blue-500 mb-4" />
              <h3 className="text-5xl font-extrabold text-[#1a3b7c]">
                {visible ? (
                  <CountUp
                    end={stat.number}
                    suffix={stat.suffix}
                    duration={stat.duration}
                  />
                ) : (
                  `0${stat.suffix}`
                )}
              </h3>
              <p className="mt-2 text-lg font-medium text-gray-700">
                {stat.text}
              </p>
            </motion.div>
          );
        })}
      </motion.div>

      {/* 🎴 Flip Cards Section */}
      <div className="grid md:grid-cols-3 gap-8 mb-24">
        {hosting.map((card, i) => {
          const Icon = card.icon;
          return (
            <div
              key={i}
              className="relative h-96 [perspective:1000px] cursor-pointer group"
              onClick={() => handleFlip(i)}
            >
              {/* Flip Animation Container */}
              <div
                className={`relative w-full h-full duration-700 transform-style-3d ${
                  flippedCard === i ? "rotate-y-180" : ""
                }`}
              >
                {/* Front Side */}
                <div
                  className={`absolute inset-0 w-full h-full rounded-2xl p-8 bg-gradient-to-br ${card.bgGradient} shadow-xl border border-white/50 backface-hidden`}
                >
                  <div className="flex flex-col h-full justify-between">
                    <div>
                      <div
                        className={`w-16 h-16 bg-gradient-to-r ${card.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
                      >
                        <Icon className="text-2xl text-white" />
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                        {card.title}
                      </h2>
                      <ul className="space-y-3">
                        {card.points.slice(0, 2).map((point, idx) => (
                          <li
                            key={idx}
                            className="flex items-start text-gray-600 text-sm"
                          >
                            <span
                              className={`w-1.5 h-1.5 bg-gradient-to-r ${card.gradient} rounded-full mt-2 mr-3`}
                            ></span>
                            <span>{point.split(":")[0]}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex items-center justify-between pt-6 border-t border-gray-200/50">
                      <span className="text-gray-600 font-medium text-sm">
                        Click to explore
                      </span>
                      <div
                        className={`w-8 h-8 bg-gradient-to-r ${card.gradient} rounded-full flex items-center justify-center animate-bounce`}
                      >
                        <FaArrowRight className="text-white text-sm" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Back Side */}
                <div
                  className={`absolute inset-0 w-full h-full rounded-2xl p-8 bg-gradient-to-br ${card.gradient} text-white shadow-xl rotate-y-180 backface-hidden`}
                >
                  <div className="flex flex-col h-full">
                    <div className="flex items-center justify-between mb-6">
                      <Icon className="text-2xl text-white/80" />
                      <button
                        className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleFlip(i);
                        }}
                      >
                        <span className="text-white text-lg">×</span>
                      </button>
                    </div>

                    <h2 className="text-2xl md:text-3xl font-bold mb-6">
                      {card.title}
                    </h2>

                    <ul className="space-y-3 overflow-y-auto custom-scrollbar flex-1">
                      {card.points.map((point, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span className="text-white/90 leading-relaxed">
                            {point}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex items-center justify-between mt-6 pt-6 border-t border-white/30">
                      <span className="text-white/70 text-sm">
                        Click to return
                      </span>
                      <span className="text-white/70 rotate-180">↻</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* 📥 Download Section */}
      <motion.div
        className="text-center mt-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 40 }}
        animate={visible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        <h3 className="text-4xl md:text-5xl font-extrabold text-[#1a3b7c] mb-6 tracking-tight">
          Download Resources
        </h3>
        <p className="text-gray-700 text-lg md:text-xl mb-10 leading-relaxed">
          Explore our presentations and company profile for more details.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <motion.button
            onClick={() => handleDownload()}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold py-4 px-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-2"
          >
            <motion.span
              animate={{ y: [0, -6, 0] }} // move up 6px and back
              transition={{
                duration: 0.6,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
            >
              <FaDownload className="inline-block mr-2 text-lg" />
            </motion.span>
            Download PDF
          </motion.button>
        </div>
      </motion.div>

      <style jsx>{`
        .backface-hidden {
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }
        .transform-style-3d {
          transform-style: preserve-3d;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.3);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
        }
      `}</style>
    </div>
  );
};

export default HomeAbout;
