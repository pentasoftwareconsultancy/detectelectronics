import React from "react";
import { motion } from "framer-motion";
import { FaRegHandshake, FaUserTie } from "react-icons/fa";

// Import client logos
import ericsson from "../../assets/ericsson.jpg";
import idea from "../../assets/idea.png";
import indus from "../../assets/indus.png";
import bsnl from "../../assets/bsnl.png";
import samsung from "../../assets/samsung.png";
import viom from "../../assets/viom.png";
import nokia from "../../assets/nokia.png";

// Animation Variants
const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: "easeOut" },
  }),
};

const HomeBlogs = () => {
  const clients = [ericsson, idea, indus, bsnl, samsung, viom, nokia];

  return (
    <section className=" py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Join Us Section */}
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-gray-800 mb-16 text-center"
        >
          Join Us
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 mb-24">
          {/* Career Opportunity */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.2}
            className="bg-white p-10 rounded-3xl shadow-lg hover:shadow-2xl transition duration-300"
          >
            <FaUserTie className="text-blue-400 text-5xl mb-6" />
            <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-800">
              Career Opportunity
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6 text-base md:text-lg">
              DESIPL is an exciting place to work. We hire exceptional people,
              empower them to think independently, and provide valuable career experience.
            </p>
            <a
              href="#"
              className="text-blue-400 font-semibold hover:underline inline-flex items-center text-base md:text-lg"
            >
              Register here →
            </a>
          </motion.div>

          {/* Vendorship Opportunity */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.4}
            className="bg-white p-10 rounded-3xl shadow-lg hover:shadow-2xl transition duration-300"
          >
            <FaRegHandshake className="text-blue-400 text-5xl mb-6" />
            <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-800">
              Vendorship Opportunity
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6 text-base md:text-lg">
              Learn how to become a supplier for DESIPL. Participate in sourcing processes and register online to work on projects.
            </p>
            <a
              href="#"
              className="text-blue-400 font-semibold hover:underline inline-flex items-center text-base md:text-lg"
            >
              Register here →
            </a>
          </motion.div>
        </div>

        {/* Clients Section */}
        <motion.h3
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-4"
        >
          Our Clients
        </motion.h3>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.2}
          className="text-lg md:text-xl text-gray-500 text-center mb-12"
        >
          We value our clients and cherish long-lasting partnerships.
        </motion.p>

        {/* Continuous Scroll Clients */}
        <div className="overflow-hidden relative">
          <motion.div
            className="flex gap-6 whitespace-nowrap"
            initial={{ x: 0 }}
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          >
            {/* Duplicate logos for continuous scroll */}
            {[...clients, ...clients].map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 p-4 bg-white rounded-xl shadow flex items-center justify-center"
              >
                <img
                  src={logo}
                  alt={`client-${index}`}
                  className="h-12 md:h-14 w-auto object-contain"
                />
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default HomeBlogs;