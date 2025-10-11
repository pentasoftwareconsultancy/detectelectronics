import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const activePath = location.pathname;
  const logo = "/assets/logo.png";
  const frames = [
  "/assets/Frame1.png",
  "/assets/Frame2.png",
  "/assets/Frame3.png",
];
  const [currentFrame, setCurrentFrame] = useState(0);

  // 🔹 Faster logo animation interval adjusted for smoother loop
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFrame((prev) => (prev + 1) % frames.length);
    }, 600);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40); // 🔹 reduced scroll threshold
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
        { name: "Telecom Tower Division", link: "/infra/telecom-tower" },
        { name: "Optical Fibre Cable Division", link: "/infra/optical-fiber" },
        { name: "Civil Construction Division", link: "/infra/civil-construction" },
        { name: "Electrical Solution Division", link: "/infra/electrical-solution" },
      ],
    },
    {
      name: "PROJECT",
      link: "#",
      dropdown: [
        { name: "Completed Project", link: "/project/completed" },
        { name: "Current Project", link: "/project/current" },
        { name: "Project Management", link: "/project/management" },
      ],
    },
    {
      name: "MANAGEMENT",
      link: "#",
      dropdown: [
        // { name: "About Detect Electronics", link: "/management/about-electronics" },
        { name: "Mission & Vision", link: "/management/mission-vision" },
        { name: "Certifications", link: "/management/certifications" },
        { name: "Board of Director", link: "/management/board" },
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
    hidden: { y: -15, opacity: 0 }, // 🔹 smaller motion offset
    visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 250, damping: 20 } },
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-xl shadow-md py-1.5" // 🔹 reduced shadow + padding
          : "bg-gradient-to-r from-blue-50 to-cyan-50/80 backdrop-blur-lg py-2.5" // 🔹 less top padding
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex-shrink-0 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <img
            src={frames[currentFrame]}
            alt="Detect Electronics"
            className={`transition-all duration-500 cursor-pointer ${
              isScrolled ? "h-16" : "h-18" // 🔹 reduced logo height
            }`}
          />
        </motion.div>

        {/* Desktop Menu */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="hidden lg:flex items-center space-x-3 cursor-pointer" // 🔹 reduced spacing
        >
          {navItems.map((item) => {
            const isActive =
              (item.link !== "#" && activePath === item.link) ||
              item.dropdown?.some((sub) => activePath === sub.link);

            return (
              <motion.div
                key={item.name}
                variants={itemVariants}
                className="relative"
                onMouseEnter={() => setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {item.dropdown ? (
                  <>
                    <motion.button
                      onClick={() =>
                        setActiveDropdown(activeDropdown === item.name ? null : item.name)
                      }
                      className={`flex items-center px-2.5 py-1.5 font-semibold text-sm transition-colors duration-300 cursor-pointer ${
                        isActive
                          ? "text-blue-600 border-b-2 border-blue-600"
                          : "text-gray-800 hover:text-blue-600"
                      }`} // 🔹 reduced padding + font size
                    >
                      {item.name}
                      <FaChevronDown className="ml-1 w-3 h-3" />
                    </motion.button>
                    <AnimatePresence>
                      {activeDropdown === item.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-1.5 w-52 bg-white rounded-xl shadow-lg border border-blue-100 overflow-hidden z-50"
                        >
                          {item.dropdown.map((sub) => (
                            <motion.button
                              key={sub.name}
                              onClick={() => navigate(sub.link)}
                              className={`block w-full text-left px-5 py-2.5 text-sm font-medium border-b border-blue-50 last:border-b-0 ${
                                activePath === sub.link
                                  ? "text-blue-600 bg-blue-50"
                                  : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                              }`}
                            >
                              {sub.name}
                            </motion.button>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <motion.button
                    onClick={() => navigate(item.link)}
                    className={`px-2.5 py-1.5 font-semibold text-sm transition-colors duration-300 ${
                      isActive
                        ? "text-blue-600 border-b-2 border-blue-600"
                        : "text-gray-800 hover:text-blue-600"
                    }`}
                  >
                    {item.name}
                  </motion.button>
                )}
              </motion.div>
            );
          })}
        </motion.div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-gray-700 hover:text-blue-600 p-2 rounded-lg hover:bg-blue-50 transition-colors duration-300"
          >
            {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />} {/* 🔹 slightly smaller */}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white/95 backdrop-blur-xl shadow-xl border-t border-blue-100"
          >
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="px-3 pt-2 pb-5 space-y-1"
            >
              {navItems.map((item) => {
                const isActive =
                  (item.link !== "#" && activePath === item.link) ||
                  item.dropdown?.some((sub) => activePath === sub.link);

                return (
                  <motion.div key={item.name} variants={itemVariants}>
                    {item.dropdown ? (
                      <div className="border-b border-blue-50 last:border-b-0">
                        <button
                          onClick={() =>
                            setActiveDropdown(activeDropdown === item.name ? null : item.name)
                          }
                          className={`flex items-center justify-between w-full px-3 py-3 font-semibold text-left text-sm transition-colors duration-300 ${
                            isActive
                              ? "text-blue-600 bg-blue-50"
                              : "text-gray-800 hover:text-blue-600"
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
                              className="pl-5 bg-blue-50/50 rounded-lg mx-3 mb-2 overflow-hidden"
                            >
                              {item.dropdown.map((sub) => (
                                <motion.button
                                  key={sub.name}
                                  onClick={() => {
                                    navigate(sub.link);
                                    setIsOpen(false);
                                  }}
                                  className={`block w-full text-left px-3 py-2.5 text-sm font-medium border-b border-blue-100 last:border-b-0 ${
                                    activePath === sub.link
                                      ? "text-blue-600 bg-blue-100"
                                      : "text-gray-700 hover:text-blue-600"
                                  }`}
                                >
                                  {sub.name}
                                </motion.button>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <button
                        onClick={() => {
                          navigate(item.link);
                          setIsOpen(false);
                        }}
                        className={`block w-full text-left px-3 py-3 font-semibold text-sm border-b border-blue-50 last:border-b-0 transition-colors duration-300 ${
                          isActive
                            ? "text-blue-600 bg-blue-50"
                            : "text-gray-800 hover:text-blue-600"
                        }`}
                      >
                        {item.name}
                      </button>
                    )}
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
