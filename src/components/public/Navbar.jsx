import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import { useLocation } from "react-router-dom"; // ✅ Added to get current path
import Logo from "../../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const location = useLocation(); // ✅ Added

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { name: "HOME", link: "/" },
    {
      name: "INFRA",
      link: "#",
      dropdown: [
        { name: "Telecom Tower", link: "/telecom-tower" },
        { name: "Optical Fibre Cable", link: "/optical-fiber" },
        { name: "Civil Construction", link: "/civil-construction" },
        { name: "Electrical Solution", link: "/electrical-solution" },
      ],
    },
    {
      name: "PROJECT",
      link: "#",
      dropdown: [
        { name: "Completed Project", link: "/completed-projects" },
        { name: "Current Project", link: "/current-projects" },
        { name: "Project Management", link: "/project-management" },
      ],
    },
    {
      name: "MANAGEMENT",
      link: "#",
      dropdown: [
        { name: "About Detect Electronics", link: "/about-electronics" },
        { name: "Mission & Vision", link: "/mission-vision" },
        { name: "Certifications", link: "/certifications" },
        { name: "Board of Directors", link: "/board-of-directors" },
      ],
    },
    { name: "CAREER", link: "/career" },
    { name: "GALLERY", link: "/gallery" },
    { name: "CONTACT US", link: "/contact" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 300, damping: 24 } },
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed w-full z-50 transition-all duration-500 backdrop-filter backdrop-blur-lg ${isScrolled
        ? "bg-white/90 shadow-md py-2"
        : "bg-white/20 py-4"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <motion.div whileHover={{ scale: 1.05 }} className="flex-shrink-0">
          <img
            src={Logo}
            alt="Detect Electronics"
            className={`transition-all duration-500 ${isScrolled ? "h-12" : "h-16"}`}
          />
        </motion.div>

        {/* Desktop Menu */}
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="hidden lg:flex items-center space-x-6">
          {navItems.map((item) => (
            <motion.div
              key={item.name}
              variants={itemVariants}
              className="relative"
              onMouseEnter={() => setActiveDropdown(item.name)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              {item.dropdown ? (
                <>
                  <motion.a
                    href={item.link}
                    // ✅ Updated: Active dropdown parent always blue, inactive white at top
                    className={`flex items-center px-3 py-2 font-semibold transition-colors duration-300 ${item.dropdown.some((sub) => location.pathname === sub.link)
                      ? "text-blue-600"                    // ✅ Active parent blue
                      : isScrolled
                        ? "text-gray-800 hover:text-blue-600"
                        : "text-white hover:text-blue-300"
                      }`}
                  >
                    {item.name}
                    <FaChevronDown className="ml-1 w-3 h-3" />
                  </motion.a>
                  <AnimatePresence>
                    {activeDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-56 bg-white rounded-2xl shadow-xl border border-blue-100 overflow-hidden z-50"
                      >
                        {item.dropdown.map((sub) => (
                          <motion.a
                            key={sub.name}
                            href={sub.link}
                            className={`block px-6 py-3 font-medium border-b border-blue-50 last:border-b-0 transition-all duration-300 ${
                              location.pathname === sub.link
                                ? "text-blue-600 bg-blue-50"                 // ✅ Active dropdown link blue
                                : isScrolled
                                  ? "text-gray-700 hover:text-blue-600 hover:bg-blue-50" // ✅ Scrolled: gray
                                  : "text-black hover:text-blue-300 hover:bg-white/10"   // ✅ Top: white
                            }`}
                          >
                            {sub.name}
                          </motion.a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </>
              ) : (
                <motion.a
                  href={item.link}
                  // ✅ Updated: Active link blue, inactive white at top
                  className={`px-3 py-2 font-semibold transition-colors duration-300 ${location.pathname === item.link
                    ? "text-blue-600"
                    : isScrolled
                      ? "text-gray-800 hover:text-blue-600"
                      : "text-white hover:text-blue-300"
                    }`}
                >
                  {item.name}
                </motion.a>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center">
          <button onClick={toggleMenu} className="text-gray-700 hover:text-blue-600 p-2 rounded-lg hover:bg-blue-50 transition-colors duration-300">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* Mobile Menu */}
<AnimatePresence>
  {isOpen && (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.3 }}
      className="lg:hidden bg-white/95 backdrop-blur-xl shadow-2xl border-t border-blue-100"
    >
      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="px-4 pt-2 pb-6 space-y-1">
        {navItems.map((item) => (
          <motion.div key={item.name} variants={itemVariants}>
            {item.dropdown ? (
              <div className="border-b border-blue-50 last:border-b-0">
                <button
                  onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                  className={`flex items-center justify-between w-full px-4 py-4 font-semibold text-left transition-colors duration-300 ${
                    item.dropdown.some((sub) => location.pathname === sub.link)
                      ? "text-blue-600"
                      : isScrolled
                        ? "text-gray-800 hover:text-blue-600"
                        : "text-gray-800 hover:text-blue-600" // ✅ Changed from white to gray for mobile
                  }`}
                >
                  {item.name}
                  <FaChevronDown className="w-3 h-3" />
                </button>
                <AnimatePresence>
                  {activeDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="pl-6 bg-blue-50/50 rounded-lg mx-4 mb-2 overflow-hidden"
                    >
                      {item.dropdown.map((sub) => (
                        <motion.a
                          key={sub.name}
                          href={sub.link}
                          className={`block px-4 py-3 font-medium border-b last:border-b-0 transition-all duration-300 ${
                            location.pathname === sub.link
                              ? "text-blue-600 bg-blue-100"
                              : isScrolled
                                ? "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                                : "text-gray-800 hover:text-blue-600 hover:bg-white/10" // ✅ Changed from black to gray for mobile
                          }`}
                          onClick={() => setIsOpen(false)}
                        >
                          {sub.name}
                        </motion.a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <a
                href={item.link}
                className={`block px-4 py-4 font-semibold border-b last:border-b-0 transition-colors duration-300 ${
                  location.pathname === item.link
                    ? "text-blue-600"
                    : isScrolled
                      ? "text-gray-800 hover:text-blue-600"
                      : "text-gray-800 hover:text-blue-600" // ✅ Changed from white to gray for mobile
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            )}
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
