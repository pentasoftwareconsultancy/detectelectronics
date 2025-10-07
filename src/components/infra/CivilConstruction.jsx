// CivilConstruction.jsx
import React from "react";
import { motion } from "framer-motion";
import SplitText from "../animationComponents/SplitText";
import img from "../../assets/CivilConstruction.jpg";

const CivilConstruction = () => {
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

  return (
    <div className="w-full bg-gradient-to-b from-gray-50 to-gray-100 py-16 antialiased">
      <div className="w-full max-w-7xl mx-auto px-4">

        {/* Header Section */}
        <div
          className="w-full bg-cover bg-center relative py-24 md:py-32 text-center text-white mb-16 rounded-3xl overflow-hidden shadow-lg"
          style={{ backgroundImage: `url(${img})` }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="relative z-10">
            <SplitText
              text="CIVIL CONSTRUCTION"
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
          className="bg-white p-6 sm:p-10 rounded-3xl shadow-lg"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="flex flex-col lg:flex-row gap-12 items-start w-full">

            {/* Text Section */}
            <article className="lg:w-3/5 text-gray-700 text-base md:text-lg leading-relaxed">
              <motion.p
                className="text-justify mb-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                Detect Electronics System Private Limited is involved in Civil
                construction of GBT, RTT & BTS foundation for mobile towers.
              </motion.p>

              <ul className="mt-4 list-none space-y-3">
                {[
                  "Tower Foundation RTT (9, 12,15,18,21,24,30Mtrs)",
                  "Tower Foundation GBT – 4 Leg & Itrans (40 Mtrs, 60Mtrs, 80 Mtrs)",
                  "Tower Foundation Monopole – 20 mtr,40mtr",
                  "Tower Erection RTT (9, 12,15,18,21,24,30Mtrs)",
                  "Tower Erection GBT (40 Mtrs, 60Mtrs, 80 Mtrs)",
                  "BTS Foundation",
                  "Tower painting",
                  "Tower Strengthening",
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    className="flex items-start text-gray-700 leading-relaxed gap-2 border-b border-gray-200 pb-2"
                    custom={i}
                    variants={listItemVariants}
                  >
                    <span className="text-sky-500 mr-2 mt-1 text-lg">➤</span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </article>

            {/* Image Section */}
            <div className="lg:w-2/5 w-full flex justify-center">
              <motion.img
                src={img}
                alt="Civil Construction"
                className="w-full md:w-[400px] lg:w-full h-full rounded-xl shadow-xl border-4 border-gray-200 transition-transform duration-300 hover:scale-105 hover:shadow-2xl object-cover"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                viewport={{ once: true }}
              />
            </div>

          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CivilConstruction;
