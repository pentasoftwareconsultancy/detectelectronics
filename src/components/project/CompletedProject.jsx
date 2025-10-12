import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaBroadcastTower, FaArrowRight } from "react-icons/fa";

const logos = {
  home: "🏠",
  telecom: <FaBroadcastTower className="text-blue-400 text-4xl" />,
  iot: "🌐",
  robotics: "🤖",
  drone: "🛸",
  energy: "⚡",
  irrigation: "💧",
};

const techNames = {
  fiber: "OFC",
  towers: "Towers",
  electrical: "Electrical",
  rf: "RF Installation",
  om: "FTTH",
  critical: "Skill Development",
};

export default function CompletedProject() {
  const [flippedCard, setFlippedCard] = useState(null);
  const handleFlip = (id) => setFlippedCard(flippedCard === id ? null : id);

  const projects = [
    // ... your projects array remains the same
    {
      id: 1,
      title: "Optical Fiber Cable Installation",
      description: "Optical Fiber Cable laid across multiple sites.",
      domain: "telecom",
      details:
        "Optical Fiber Cable \n IDEA: 300 KMs, RJIL: 400 KMs, STL: 300 KMs, NIPL: 50KMs, BSNL: 200KMs",
      features: ["Timely ROW Permission", "Speedy Rollout", "Seamless Connectivity"],
      about: "The Optical Fiber Installation and Commissioning process ensures high-speed, reliable communication networks. It begins with site survey and route planning, followed by mobilization of fiber cables, ducts, and splicing tools. Excavation, ducting, and fiber laying are carried out with care, followed by splicing, termination, and joint enclosure installation. The network is then tested with OTDR and power meters to verify signal quality. Once approved, it is documented, labeled, and activated, ensuring seamless connectivity.",
      tech: ["fiber"],
      status: "Completed",
    },
    {
      id: 2,
      title: "Tower Structure Constructions",
      description: "Installation of GBT & RTT towers.",
      domain: "telecom",
      details: "TOWERS - 2200 Nos.",
      features: ["Precision Excavation", "Rapid Erection", "Modular Design", "Quality Foundation Work","Alignment Accuracy", 
        "Safety-Compliant Construction" ],
        about: "The Telecom Tower Structure enables seamless mobile communication by hosting antennas, microwave dishes, and other transmission equipment. The process starts with site survey and soil testing to determine foundation design, followed by excavation and reinforced concrete work for durability. Mechanical erection of tower segments is carried out with precision bolting and alignment checks, after which antenna mounts, ladders, platforms, and lightning protection are installed. Finally, earthing, grounding, load testing, and safety inspections ensure compliance, and RF and electrical teams integrate equipment, completing the commissioning for reliable, long-term network performance.",
      tech: ["towers"],
      status: "Completed",
    },
    {
      id: 3,
      title: "Electrical Laisioning - EV Supply Charging",
      description: "HT/LT electrical work across telecom sites.",
      domain: "telecom",
      details: "ELECTRICAL (HT/LT Work) - 1500 SITES",
      features: ["Seamless Liaisoning", "Quick Approvals", "Load Assessment Expertise", "EV-Ready Infrastructure", 
        "Transformer I&C", "DG Set & BATT Bank, UPS I&C", "Safety-Driven Installation" ],
        about: "Ensuring a reliable and authorized power supply for telecom towers, this process covers load assessment, MSEB approvals, and liaisoning with electricity authorities. After approval, cabling, earthing, and energy meter installation are completed, followed by testing for voltage stability and phase balance. This guarantees safe, uninterrupted, and legally compliant power, enabling 24×7 network uptime and reducing operational costs.",
      tech: ["electrical"],
      status: "Completed",
    },
    {
      id: 4,
      title: "RF Installation - Network Optimization",
      description: "Radio Frequency installation for multiple vendors.",
      domain: "telecom",
      details:
        "RF Installation (IDEA / ALCATEL / SAMSUNG / NOKIA) - 2000+ SITES",
      features: ["End-to-End RF Deployment", "Precision Antenna Alignment", "Seamless Integration", "VSWR & Power Testing", 
        "High-Frequency Optimization", "Field Drive Testing", "Coverage & Quality Analysis", "Network Benchmarking", 
        "Data Reporting & Insights" ],
        about: "RF and Network Optimization ensuresstrong coverage, high capacity, and reliable connectivity. It starts with RF surveys and drive tests to identify gaps and interference, followed by parameter tuning of antennas, BTS, and microwave links. Continuous monitoring, KPI analysis, and adjustments improve data throughput, reduce call drops, and enhance user experience. The process concludes with performance validation and documentation, delivering an efficient, high-performing telecom network.",
      tech: ["rf"],
      status: "Completed",
    },
    {
      id: 5,
      title: "Fiber to Home (FTTH) - GPON Network",
      description: "End-to-end fiber-to-the-home deployment and service management.",
      domain: "telecom",
      details: "FTTH Network – 500+ connections",
      features: [ "Customer-Centric Deployment", "Seamless GPON Integration", "High-Speed Connectivity", "Precise Splicing & Termination", 
        "Advanced OTDR Testing", "Network Scalability", "High Reliability & Uptime"],
        about: "FTTH provides ultra-fast, reliable broadband directly to homes and businesses. The process includes network survey and route planning, followed by duct and fiber cable installation, splicing, termination, and testing. Finally, ONT installation, commissioning, and documentation ensure seamless, scalable, and future-ready connectivity for end users.",
      tech: ["om"],
      status: "Completed",
    },
    {
      id: 6,
      title: "Mobile Network Tech. Resources Skill Development",
      description: "Strengthening of critical telecom towers.",
      domain: "telecom",
      details: "Strengthening of Critical Towers – 100",
      features: [ "On-Site Internship Opportunities", "Soft Skills & Safety Training", "Comprehensive Training Programs", 
        "Hands-On Practical Learning", "Continuous Upskilling", "Corporate Training Support", "Talent Pool Development" ],
        about: "We provide hands-on training and skill development for telecom infrastructure, covering RF, Transmission, Fiber, and Core Network domains. The process includes theory, simulations, and field practice, followed by assessments and certifications. Continuous upskilling ensures a skilled, industry-ready workforce capable of supporting efficient network deployment and maintenance.",
      tech: ["critical"],
      status: "Completed",
    },
  ];

  return (
    <section className="bg-gradient-to-b py-16 relative overflow-hidden">
      <div className="container mx-auto px-6 z-10">
        <h2 className="text-5xl text-center mb-16 font-extrabold text-[#2384c5] drop-shadow-lg">
          Our Completed Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <div
              key={project.id}
              className="relative h-[540px] [perspective:1000px] cursor-pointer group"
              onClick={() => handleFlip(project.id)}
            >
              {/* Flip Animation Container */}
              <div
                className={`relative w-full h-full duration-700 transform-style-3d ${flippedCard === project.id ? "rotate-y-180" : ""
                  }`}
              >
                {/* Front Side - Your exact design */}
                <div className="absolute inset-0 w-full h-full backface-hidden">
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    transition={{ type: "spring", stiffness: 200, damping: 18 }}
                    className="relative overflow-hidden rounded-2xl p-6 cursor-default backdrop-blur-xl border border-white/20 shadow-xl transition-all duration-500 bg-gradient-to-br from-[#1e3a8a]/80 via-[#1e40af]/70 to-[#3b82f6]/60 hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] h-full flex flex-col"
                  >
                    <div className="flex items-center mb-3 space-x-3">
                      <span className="text-4xl">{logos[project.domain]}</span>
                      <h3 className="text-2xl font-extrabold tracking-wide text-white">
                        {project.title}
                      </h3>
                    </div>

                    <p className="text-gray-200 mb-3">{project.description}</p>

                    <span
                      className={`px-2 py-1 rounded-full text-xs font-semibold w-20 ${
                        project.status === "Completed"
                          ? "bg-green-200/90 text-green-900"
                          : "bg-yellow-200/90 text-yellow-900"
                      }`}
                    >
                      {project.status}
                    </span>

                    <div className="mt-4 border-t border-white/30 pt-4 flex-1">
                      <p className="text-sm text-gray-100 mb-3 whitespace-pre-line leading-relaxed">
                        {project.details}
                      </p>

                      <h4 className="text-md font-semibold mb-2 text-cyan-200">
                        Key Achivement:
                      </h4>
                      <ul className="list-disc list-inside text-gray-100 text-sm mb-3 space-y-1">
                        {project.features.map((f, i) => (
                          <li key={i}>{f}</li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 rounded-full text-xs font-medium bg-white/30 text-white backdrop-blur-md border border-white/20"
                          >
                            {techNames[tech]}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Back Side - Ready for your content */}
                <div
                  className={`absolute inset-0 w-full h-full rounded-2xl p-6 bg-gradient-to-br from-[#1e3a8a] via-[#1e40af] to-[#3b82f6] text-white shadow-xl rotate-y-180 backface-hidden overflow-y-auto`}
                >
                  {/* Add your back side content here */}
                  <div className="flex flex-col h-full">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center mb-3 space-x-3">
                      <span className="text-4xl">{logos[project.domain]}</span>
                      <h3 className="text-2xl font-extrabold tracking-wide text-white">
                        {project.title}
                      </h3>
                    </div>
                      <button
                        className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleFlip(project.id);
                        }}
                      >
                        <span className="text-white text-lg">×</span>
                      </button>
                    </div>
                    
                    {/* Your back side content goes here */}
                    <div className="text-justify mt-4 border-t border-white/30 pt-4 flex-1">
                      <p>{project.about}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .transform-style-3d {
          transform-style: preserve-3d;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
      `}</style>
    </section>
  );
}