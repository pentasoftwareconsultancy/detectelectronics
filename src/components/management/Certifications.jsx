import React, { useRef, useEffect, useState } from 'react';
import SplitText from '../animationComponents/SplitText';
import { gsap } from 'gsap';
import { motion, AnimatePresence } from 'framer-motion';

const Certifications = () => {
  const listRef = useRef([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // List of certification images (automatic numbering)
  const totalCerts = 2; // 🔹 change this to total number of certifications
  const certImages = Array.from({ length: totalCerts }, (_, i) => `/assets/Certification${i + 1}.jpg`);

  // Auto-slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % certImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [certImages.length]);

  // Animate list items on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (listRef.current.includes(entry.target)) {
              gsap.fromTo(
                entry.target,
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }
              );
              observer.unobserve(entry.target);
            }
          }
        });
      },
      { threshold: 0.2 }
    );
    listRef.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full bg-gray-50 py-16 antialiased">
      <div className="w-full max-w-7xl mx-auto px-4">

        {/* Header Section */}
        <div
          className="w-full bg-cover bg-center relative py-24 md:py-32 text-center text-white mb-16 rounded-3xl shadow-lg overflow-hidden"
          style={{ backgroundImage: `url(/assets/Certification.jpg)` }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative z-10">
            <SplitText
              text="CERTIFICATIONS"
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

        {/* Content Section */}
        <div className="bg-white p-6 sm:p-10 rounded-3xl shadow-lg flex flex-col md:flex-row items-start gap-8">

          {/* Left – company details list */}
          <div className="md:w-1/2 w-full text-gray-800 space-y-4">
            <ul className="space-y-0">
              {[
                ["CORPORATE IDENTITY NUMBER", "U40104MH2008PTC188440"],
                ["GST NO.", "27AADCD0326Q1ZI"],
                ["PAN NO.", "AADCD0326Q"],
                ["TAN NO.", "NSKD03141F"],
                ["DIN NO.", "91266283"],
                ["PF NO.", "MH/AB/83251/APP/COMP/Cir.61/09"],
                ["ESIC", "ESI-2787/1905/CR-295/87/MED-13"],
                ["PTEC", "99211671264P"],
                ["IP-1 License", "588/2016"],
              ].map(([label, value], idx) => (
                <li
                  key={label}
                  ref={(el) => (listRef.current[idx] = el)}
                  className="flex items-start py-4 border-b border-gray-200 opacity-0"
                >
                  <svg
                    className="w-4 h-4 text-blue-600 flex-shrink-0 mr-4 mt-1"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                  <div>
                    <div className="text-gray-600">
                      {label}: <span className="font-semibold text-gray-900">{value}</span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right – certificate image slider with original size shadow box */}
          <div className="md:w-1/2 w-full flex flex-col items-center mt-8 md:mt-0 relative">
            <h3 className="text-xl font-semibold text-gray-700 mb-6">Certificates</h3>
            <div className="w-full relative flex justify-center">
              {/* Shadow Box Container - Auto-sized to fit certificate */}
              <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-8 relative overflow-hidden max-w-full">
                {/* Inner shadow effect */}
                <div className="absolute inset-0 rounded-2xl shadow-inner bg-gradient-to-br from-gray-50 to-white pointer-events-none"></div>
                
                {/* Certificate Image - Original Size */}
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentIndex}
                    src={certImages[currentIndex]}
                    alt={`Certification ${currentIndex + 1}`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-full h-auto object-contain relative z-10"
                    style={{ maxHeight: '500px' }} // Adjust max height as needed
                  />
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certifications;