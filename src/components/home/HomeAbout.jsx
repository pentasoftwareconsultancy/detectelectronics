import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaDownload, FaAward, FaUsers, FaRocket, FaShieldAlt } from 'react-icons/fa';
import CountUp from 'react-countup';

const HomeAbout = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (isInView) setVisible(true);
  }, [isInView]);

  // ✅ Actual Download Functionality
  const handleDownload = (type) => {
    let fileUrl = '';
    let fileName = '';

    if (type === 'presentation') {
      fileUrl = '/assets/presentation.pdf';
      fileName = 'Detect_Electronics_Presentation.pdf';
    } else if (type === 'eprofile') {
      fileUrl = '/assets/eprofile.pptx';
      fileName = 'Detect_Electronics_E-Profile.pptx';
    }

    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const stats = [
    { icon: FaAward, number: 23, text: 'Years Experience', suffix: '+', duration: 2.5 },
    { icon: FaUsers, number: 50, text: 'Expert Team', suffix: '+', duration: 2 },
    { icon: FaRocket, number: 100, text: 'Projects Completed', suffix: '+', duration: 3 },
    { icon: FaShieldAlt, number: 99, text: 'Quality Score', suffix: '%', duration: 2 },
  ];

  const floatingShapes = [
    { top: '15%', left: '5%', delay: 0, color: 'bg-blue-400/30' },
    { top: '20%', right: '10%', delay: 1, color: 'bg-cyan-300/30' },
    { top: '70%', left: '8%', delay: 2, color: 'bg-blue-200/40' },
    { top: '65%', right: '12%', delay: 1.5, color: 'bg-cyan-400/30' },
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      
      {/* Floating Shapes */}
      {floatingShapes.map((shape, i) => (
        <motion.div
          key={i}
          className={`absolute w-10 h-10 rounded-full ${shape.color} hidden lg:block`}
          style={{ top: shape.top, left: shape.left, right: shape.right }}
          animate={{
            y: [0, -25, 0],
            rotate: [0, 180, 360],
            scale: [1, 1.15, 1],
          }}
          transition={{ duration: 8, delay: shape.delay, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}

      <div className="max-w-7xl mx-auto">

        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <motion.h1
            className="text-5xl md:text-6xl lg:text-5xl font-extrabold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4"
            whileHover={{ scale: 1.03 }}
          >
            ABOUT US
          </motion.h1>
          <motion.div
            className="w-36 h-2 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto rounded-full mb-6"
            initial={{ width: 0 }}
            animate={{ width: 144 }}
            transition={{ duration: 1 }}
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto"
          >
            Leading the way in <span className="font-semibold text-blue-500">telecommunications</span> and{' '}
            <span className="font-semibold text-cyan-500">infrastructure</span> with decades of excellence.
          </motion.p>
        </motion.div>

        {/* Stats Section */}
        <motion.div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-white/90 backdrop-blur-md rounded-3xl p-6 text-center shadow-lg border border-blue-200 hover:shadow-xl hover:border-cyan-400 transition-all duration-500"
              initial={{ opacity: 0, y: 40 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 * index, type: 'spring', stiffness: 120 }}
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r from-blue-400 to-cyan-400 flex items-center justify-center shadow-lg">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-2">
                {visible ? <CountUp end={stat.number} suffix={stat.suffix} duration={stat.duration} /> : `0${stat.suffix}`}
              </h3>
              <p className="text-gray-700 font-medium">{stat.text}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Company Sections */}
        <motion.div className="space-y-12">
          
          {/* Who We Are */}
          <motion.div
            className="bg-white/80 backdrop-blur-lg rounded-3xl p-10 md:p-14 shadow-xl border border-blue-200 hover:shadow-2xl transition-all"
            initial={{ opacity: 0, y: 40 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent mb-4">
              Who We Are
            </h2>
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
              <span className="font-semibold text-blue-500">Detect Electronics Systems (I) Private Limited</span>, with{' '}
              <span className="font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">23+ years of experience</span>, providing exceptional services in <span className="font-semibold text-cyan-500">OFC, Civil, Telecom, Electrical, and Contract Management</span>.
            </p>
          </motion.div>

          {/* Achievements */}
          <motion.div
            className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-300 rounded-3xl p-10 md:p-14 shadow-xl text-white hover:shadow-2xl transition-all"
            initial={{ opacity: 0, y: 40 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.7 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Achievements</h2>
            <p className="text-white text-lg md:text-xl leading-relaxed">
              Timely project completions, quality management, and innovative telecom solutions by our dynamic and skilled team.
            </p>
          </motion.div>

          {/* Expertise */}
          <motion.div
            className="bg-white/80 backdrop-blur-lg rounded-3xl p-10 md:p-14 shadow-xl border border-cyan-200 hover:shadow-2xl transition-all"
            initial={{ opacity: 0, y: 40 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.9 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">
              Our Expertise
            </h2>
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
              Pioneers in Quality Controlled Turnkey works in Telecom, Civil, Industrial, and Public sectors with professionalism and excellence.
            </p>
          </motion.div>

          {/* Download Section */}
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 40 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1 }}
          >
            <h3 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent mb-6">
              Download Resources
            </h3>
            <p className="text-gray-700 text-lg md:text-xl mb-10">
              Explore our presentations and company profile for more details.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <motion.button
                onClick={() => handleDownload('presentation')}
                whileHover={{ scale: 1.05 }}
                className="bg-blue-400 hover:bg-cyan-400 text-white font-bold py-4 px-8 rounded-2xl shadow-lg transition-all"
              >
                <FaDownload className="inline-block mr-2" />
                Download Presentation
              </motion.button>
              <motion.button
                onClick={() => handleDownload('eprofile')}
                whileHover={{ scale: 1.05 }}
                className="bg-white text-cyan-500 font-bold py-4 px-8 rounded-2xl border-2 border-cyan-400 shadow transition-all"
              >
                <FaDownload className="inline-block mr-2" />
                Download E-Profile
              </motion.button>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </div>
  );
};

export default HomeAbout;