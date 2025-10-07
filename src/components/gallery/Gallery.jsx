import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MagnifyingGlassIcon, XMarkIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

import img1 from '../../assets/img1.jpg';
import img2 from '../../assets/img2.jpg';
import img3 from '../../assets/img3.jpg';
import img4 from '../../assets/img4.jpg';
import img5 from '../../assets/img5.jpg';
import img6 from '../../assets/img6.jpg';
import img7 from '../../assets/img7.jpg';
import img8 from '../../assets/img8.jpg';
import img9 from '../../assets/img9.jpg';
import img10 from '../../assets/img10.jpg';
import img11 from '../../assets/img11.jpg';
import img12 from '../../assets/img12.jpg';
import img13 from '../../assets/img13.jpg';
import img14 from '../../assets/img14.jpg';


const GALLERY_TABS = [
  { label: 'All', value: 'all' },
  { label: 'GBT Construction', value: 'GBT' },
  { label: 'RTT Construction', value: 'RTT' },
  { label: 'Civil Work', value: 'Civil' },
  { label: 'Electrification', value: 'Electrification' },
];

const GALLERY_IMAGES = [
  { src: img1, category: 'GBT', alt: 'GBT Construction Project A' },
  { src: img2, category: 'GBT', alt: 'GBT Construction Project B' },
  { src: img3, category: 'GBT', alt: 'GBT Construction Project C' },
  { src: img4, category: 'GBT', alt: 'GBT Construction Project D' },
  { src: img5, category: 'RTT', alt: 'RTT Construction Site A' },
  { src: img6, category: 'RTT', alt: 'RTT Construction Site B' },
  { src: img7, category: 'RTT', alt: 'RTT Construction Site C' },
  { src: img8, category: 'RTT', alt: 'RTT Construction Site D' },
  { src: img9, category: 'Civil', alt: 'Civil Work Foundation' },
  { src: img10, category: 'Civil', alt: 'Civil Work Structure' },
  { src: img11, category: 'Civil', alt: 'Civil Work Completion' },
  { src: img12, category: 'Civil', alt: 'Civil Work Infrastructure' },
  { src: img13, category: 'Electrification', alt: 'Electrification Setup' },
  { src: img14, category: 'Electrification', alt: 'Electrification System' },
];



// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20,
    scale: 0.95
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  },
  exit: {
    opacity: 0,
    y: -20,
    scale: 0.95,
    transition: {
      duration: 0.2
    }
  }
};

const modalVariants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30,
      duration: 0.4
    }
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    transition: {
      duration: 0.3
    }
  }
};

const imageModalVariants = {
  hidden: { opacity: 0, scale: 1.1 },
  visible: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.9 }
};

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 }
};

const Gallery = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Filter images based on active tab
  const filteredImages = activeTab === 'all'
    ? GALLERY_IMAGES
    : GALLERY_IMAGES.filter(img => img.category === activeTab);

  // Handle image selection
  const handleImageClick = (image) => {
    const index = filteredImages.findIndex(img => img.src === image.src);
    setSelectedImage(image);
    setCurrentImageIndex(index);
  };

  // Navigation in modal
  const handleNext = () => {
    const nextIndex = (currentImageIndex + 1) % filteredImages.length;
    setSelectedImage(filteredImages[nextIndex]);
    setCurrentImageIndex(nextIndex);
  };

  const handlePrev = () => {
    const prevIndex = (currentImageIndex - 1 + filteredImages.length) % filteredImages.length;
    setSelectedImage(filteredImages[prevIndex]);
    setCurrentImageIndex(prevIndex);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedImage) return;

      if (e.key === 'Escape') {
        setSelectedImage(null);
      } else if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, currentImageIndex]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedImage]);

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-blue-600">Gallery</span>
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 mx-auto mb-6 rounded-full" />
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Explore our construction projects and see the quality work we deliver across all sectors
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          {GALLERY_TABS.map((tab) => (
            <motion.button
              key={tab.value}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`relative px-6 py-3 rounded-full font-semibold text-lg transition-all duration-300
                shadow-lg border-2 backdrop-blur-sm
                ${activeTab === tab.value
                  ? 'bg-gradient-to-br from-blue-700/80 via-indigo-600/70 to-cyan-400/80 text-white border-transparent shadow-[0_0_40px_rgba(56,189,248,0.6)]'
                  : 'bg-gradient-to-br from-[#1e3a8a]/80 via-[#1e40af]/70 to-[#3b82f6]/60 text-white border-transparent hover:shadow-[0_0_30px_rgba(59,130,246,0.4)]'
                } outline-none focus:ring-4 focus:ring-blue-200`}
              onClick={() => setActiveTab(tab.value)}
            >
              {tab.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          key={activeTab}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 w-full"
        >
          <AnimatePresence mode="wait">
            {filteredImages.map((img) => (
              <motion.div
                key={`${img.src}-${activeTab}`}
                variants={itemVariants}
                layout
                className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl 
                transition-all duration-500 border border-gray-100 cursor-pointer w-full"
                onClick={() => handleImageClick(img)}
              >
                <div className="relative overflow-hidden w-full">
                  <motion.img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-110"
                    draggable={false}
                  />
                  <motion.div
                    className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500 flex items-center justify-center"
                  >
                    <motion.div
                      className="opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 
                      transition-all duration-300 bg-white/70 backdrop-blur-sm rounded-full p-4"
                    >
                      <MagnifyingGlassIcon className="h-8 w-8 text-white" />
                    </motion.div>
                  </motion.div>
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1.5 bg-gradient-to-r from-blue-700 via-indigo-600 to-cyan-400 text-white text-sm font-medium rounded-full shadow-md">
                      {img.category}
                    </span>
                  </div>
                </div>

                <div className="p-4 bg-gradient-to-b from-white to-gray-50">
                  <h3 className="font-semibold text-gray-800 text-lg mb-1 line-clamp-1">{img.alt}</h3>
                  <p className="text-gray-500 text-sm">Click to view full screen</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredImages.length === 0 && (
          <motion.div
            className="text-center py-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="text-gray-400 text-6xl mb-4">📷</div>
            <h3 className="text-2xl font-semibold text-gray-600 mb-2">No images found</h3>
            <p className="text-gray-500">Try selecting a different category</p>
          </motion.div>
        )}
      </div>

      {/* Full Screen Modal */}
      <AnimatePresence>
        {selectedImage && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              variants={backdropVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50"
              onClick={() => setSelectedImage(null)}
            />

            {/* Modal Content - Full Screen */}
            <motion.div
              key="modal"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
            >
              <div className="relative w-full h-full flex items-center justify-center">

                {/* Close Button */}
                <motion.button
                  className="absolute top-6 right-6 z-20 bg-black/50 hover:bg-black/70 backdrop-blur-sm rounded-full p-3 text-white transition-all duration-200 border border-white/20"
                  onClick={() => setSelectedImage(null)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <XMarkIcon className="h-6 w-6" />
                </motion.button>

                {/* Navigation Buttons */}
                {filteredImages.length > 1 && (
                  <>
                    <motion.button
                      className="absolute left-6 top-1/2 transform -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 backdrop-blur-sm rounded-full p-4 text-white transition-all duration-200 border border-white/20"
                      onClick={handlePrev}
                      whileHover={{ scale: 1.1, x: -2 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ChevronLeftIcon className="h-6 w-6" />
                    </motion.button>
                    <motion.button
                      className="absolute right-6 top-1/2 transform -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 backdrop-blur-sm rounded-full p-4 text-white transition-all duration-200 border border-white/20"
                      onClick={handleNext}
                      whileHover={{ scale: 1.1, x: 2 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ChevronRightIcon className="h-6 w-6" />
                    </motion.button>
                  </>
                )}

                {/* Image Container */}
                <div className="relative w-full h-full flex items-center justify-center p-8">
                  <motion.img
                    key={selectedImage.src}
                    src={selectedImage.src}
                    alt={selectedImage.alt}
                    className="max-w-full max-h-full object-contain rounded-lg"
                    draggable={false}
                    variants={imageModalVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    transition={{ duration: 0.4 }}
                  />
                </div>

                {/* Image Info Bar */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="max-w-4xl mx-auto text-center">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {selectedImage.alt}
                    </h3>
                    <div className="flex items-center justify-center gap-4 text-white/80">
                      <span className="px-3 py-1 bg-yellow-500 text-white text-sm font-medium rounded-full">
                        {selectedImage.category}
                      </span>
                      <span className="text-sm">
                        {currentImageIndex + 1} of {filteredImages.length}
                      </span>
                    </div>
                  </div>
                </motion.div>

                {/* Progress Indicator */}
                {filteredImages.length > 1 && (
                  <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
                    {filteredImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          setSelectedImage(filteredImages[index]);
                          setCurrentImageIndex(index);
                        }}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentImageIndex
                          ? 'bg-yellow-500 scale-125'
                          : 'bg-white/50 hover:bg-white/80'
                          }`}
                      />
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;