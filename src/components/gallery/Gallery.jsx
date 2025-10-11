import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/solid';

const GALLERY_TABS = [
  { label: 'All', value: 'all' },
  { label: 'GBT Construction', value: 'GBT' },
  { label: 'RTT Construction', value: 'RTT' },
  { label: 'Civil Work', value: 'Civil' },
  { label: 'Electrification', value: 'Electrification' },
  { label: 'Training', value: 'Training' },
];

const GALLERY_IMAGES = [
  { src: '/assets/img1.jpg', category: 'GBT', alt: 'GBT Construction Project A' },
  { src: '/assets/img2.jpg', category: 'GBT', alt: 'GBT Construction Project B' },
  { src: '/assets/img3.jpg', category: 'GBT', alt: 'GBT Construction Project C' },
  { src: '/assets/img4.jpg', category: 'GBT', alt: 'GBT Construction Project D' },
  { src: '/assets/img5.jpg', category: 'RTT', alt: 'RTT Construction Site A' },
  { src: '/assets/img6.jpg', category: 'RTT', alt: 'RTT Construction Site B' },
  { src: '/assets/img7.jpg', category: 'RTT', alt: 'RTT Construction Site C' },
  { src: '/assets/img8.jpg', category: 'RTT', alt: 'RTT Construction Site D' },
  { src: '/assets/img9.jpg', category: 'Civil', alt: 'Civil Work Foundation' },
  { src: '/assets/img10.jpg', category: 'Civil', alt: 'Civil Work Structure' },
  { src: '/assets/img11.jpg', category: 'Civil', alt: 'Civil Work Completion' },
  { src: '/assets/img12.jpg', category: 'Civil', alt: 'Civil Work Infrastructure' },
  { src: '/assets/img13.jpg', category: 'Electrification', alt: 'Electrification Setup' },
  { src: '/assets/img14.jpg', category: 'Electrification', alt: 'Electrification System' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 100, damping: 15 } },
  exit: { opacity: 0, y: -20, scale: 0.95, transition: { duration: 0.2 } },
};
const modalVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 300, damping: 30, duration: 0.4 } },
  exit: { opacity: 0, scale: 0.8, transition: { duration: 0.3 } },
};
const imageModalVariants = {
  hidden: { opacity: 0, scale: 1.1 },
  visible: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.9 },
};

const Gallery = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const filteredImages =
    activeTab === 'all'
      ? GALLERY_IMAGES
      : GALLERY_IMAGES.filter((img) => img.category === activeTab);

  const handleImageClick = (image) => {
    const index = filteredImages.findIndex((img) => img.src === image.src);
    setSelectedImage(image);
    setCurrentImageIndex(index);
  };

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

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedImage) return;
      if (e.key === 'Escape') setSelectedImage(null);
      else if (e.key === 'ArrowRight') handleNext();
      else if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, currentImageIndex]);

  useEffect(() => {
    document.body.style.overflow = selectedImage ? 'hidden' : 'unset';
  }, [selectedImage]);

  return (
    <section className="w-full min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 overflow-x-hidden">
      <div className="w-full px-4 sm:px-6 lg:px-10 py-16">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl font-extrabold text-[#1a3b7c] mb-4">Our Gallery</h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 mx-auto mb-6 rounded-full" />
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            "Discover our telecom and infrastructure projects, showcasing excellence and precision."
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
      shadow-lg backdrop-blur-sm
      ${
        activeTab === tab.value
          ? 'bg-gradient-to-br from-blue-700 via-indigo-600 to-cyan-400 text-white shadow-[0_0_40px_rgba(56,189,248,0.6)]'
          : 'bg-gradient-to-br from-blue-600/70 via-blue-400/60 to-gray-200/50 text-black hover:shadow-[0_0_20px_rgba(156,163,175,0.3)]'
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
      </div>

      {/* Modal — with normal blur background */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            key="modal"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/30 backdrop-blur-sm"
          >
            <div className="relative w-full h-full flex items-center justify-center">
              <motion.button
                className="absolute top-6 right-6 z-20 bg-black/60 hover:bg-black/80 rounded-full p-3 text-white"
                onClick={() => setSelectedImage(null)}
              >
                <XMarkIcon className="h-6 w-6" />
              </motion.button>

              <motion.img
                key={selectedImage.src}
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                draggable={false}
                variants={imageModalVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;