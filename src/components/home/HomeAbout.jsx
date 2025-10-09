import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FaDownload,
  FaAward,
  FaUsers,
  FaRocket,
  FaShieldAlt,
} from "react-icons/fa";
import CountUp from "react-countup";

const HomeAbout = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });
  const [visible, setVisible] = useState(false);
  const [flippedCard, setFlippedCard] = useState(null); // ✅ Only one card flips at a time

  useEffect(() => {
    if (isInView) setVisible(true);
  }, [isInView]);

  const handleCardFlip = (index) => {
    // ✅ On mobile (<768px), allow tap flipping
    if (window.innerWidth < 768) {
      setFlippedCard(flippedCard === index ? null : index);
    }
  };

  const handleDownload = (type) => {
    let fileUrl = "";
    let fileName = "";

    if (type === "presentation") {
      fileUrl = "/assets/detectelectronics.pdf";
      fileName = "Detect_Electronics_Presentation.pdf";
    }

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
    { icon: FaRocket, number: 250, text: "Sits", suffix: "+", duration: 3 },
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
      points: [
        "LAN Setup: Reliable and high-speed local network connectivity for offices.",
        "WAN Solutions: Secure and efficient wide-area networking across locations.",
        "Network Cabling: Structured cabling for stable and organized infrastructure.",
        "IP Surveillance: Intelligent monitoring and security over IP networks.",
      ],
    },
    {
      title: "FTTx Rollout",
      points: [
        "Deployment Phases: From initial survey to final activation across networks.",
        "Service Coverage: Scalable rollout from local zones to city-wide networks.",
        "Project Timeline: Structured execution with milestone-based progress tracking.",
      ],
    },
    {
      title: "E2E OFC Network Rollout",
      points: [
        "Fiber Quality: High-grade optical fibers ensuring superior transmission.",
        "Network Speed: Ultra-fast data transfer across long distances.",
        "Scalability: Seamless expansion for future network demands.",
        "Monitoring & Maintenance: Continuous tracking for optimal performance.",
      ],
    },
  ];

  return (
    <div
      id="home-about"
      className="relative min-h-screen bg-gradient-to-b from-[#E8F2FF] via-[#F4F9FF] to-white py-20 px-6 md:px-12 overflow-hidden"
    >
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
          Discover who we are, what we’ve achieved, and how our expertise drives
          excellence in every project we deliver.
        </p>
      </motion.div>

      {/* 📊 Stats Section */}
      <motion.div
        ref={ref}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mb-24 text-center"
      >
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 * index, duration: 0.8, type: "spring" }}
            className="flex flex-col items-center justify-center"
          >
            <stat.icon className="text-5xl text-blue-500 mb-4" />
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
        ))}
      </motion.div>

      {/* ☁ Hosting Section */}
      <div className="grid md:grid-cols-3 gap-10 mb-24">
        {hosting.map((card, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 * i }}
            className="group [perspective:1000px] w-full h-[340px] cursor-pointer"
            onClick={() => handleCardFlip(i)}
          >
            <div
              className={`relative w-full h-full transition-transform duration-[800ms] [transform-style:preserve-3d] [will-change:transform]
    ${
      flippedCard === i
        ? "[transform:rotateY(180deg)]"
        : "md:group-hover:[transform:rotateY(180deg)]"
    }`}
            >
              {/* Front Side */}
              <div
                className="absolute flex flex-col justify-center items-center w-full h-full border border-[#1a3b7c]/20 rounded-2xl shadow-lg
    [backface-visibility:hidden] [-webkit-backface-visibility:hidden] bg-gradient-to-br from-[#eaf1ff] via-[#d4e4fb] to-[#b7d2f8]"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-[#1a3b7c] text-center">
                  {card.title}
                </h2>
                <p className="text-gray-600 mt-3 text-lg md:text-base">
                  Hover / Tap to explore
                </p>
              </div>

              {/* Back Side */}
              <div
                className="absolute flex flex-col justify-start w-full h-full p-8 border border-[#1a3b7c]/20 rounded-2xl shadow-lg
    [backface-visibility:hidden] [-webkit-backface-visibility:hidden] [transform:rotateY(180deg)]
    [will-change:transform] bg-gradient-to-br from-[#b7d2f8] via-[#d4e4fb] to-[#eaf1ff] text-[#1a3b7c] overflow-y-auto"
              >
                <ul className="space-y-3 text-gray-800 text-base leading-relaxed">
                  {card.points.map((point, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="w-2 h-2 bg-[#1a3b7c] rounded-full mt-2 mr-3"></span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* 📥 Download Section */}
      <motion.div
        className="text-center mt-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 40 }}
        animate={visible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
      >
        <h3 className="text-4xl md:text-5xl font-extrabold text-[#1a3b7c] mb-6 tracking-tight">
          Download Resources
        </h3>
        <p className="text-gray-700 text-lg md:text-xl mb-10 leading-relaxed">
          Explore our presentations and company profile for more details.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <motion.button
            onClick={() => handleDownload("presentation")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold py-4 px-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-2"
          >
            <FaDownload className="inline-block mr-2 text-lg" />
            Download PDF
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default HomeAbout;
