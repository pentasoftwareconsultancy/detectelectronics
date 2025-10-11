import React from "react";
import { motion } from "framer-motion";
import { FaBroadcastTower } from "react-icons/fa";

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
  critical: "Critical Towers",
};

export default function CompletedProject() {
  const projects = [
    {
      id: 1,
      title: "Optical Fiber Cable Installation",
      description: "Optical Fiber Cable laid across multiple sites.",
      domain: "telecom",
      details:
        "Optical Fiber Cable \n IDEA: 300 KMs, RJIL: 400 KMs, STL: 300 KMs, NIPL: 50KMs, BSNL: 200KMs",
      features: ["Timely ROW Permission", "Speedy Rollout", "Seamless Connectivity"],
      tech: ["fiber"],
      status: "Completed",
    },
    {
      id: 2,
      title: "Tower/Pole Structure Constructions",
      description: "Installation of GBT & RTT towers.",
      domain: "telecom",
      details: "TOWERS - 2200 Nos.",
      features: ["Precision Excavation", "Rapid Erection", "Modular Design", "Quality Foundation Work","Alignment Accuracy", "Safety-Compliant Construction" ],
      tech: ["towers"],
      status: "Completed",
    },
    {
      id: 3,
      title: "Electrical Laisioning & EV Supply Charging",
      description: "HT/LT electrical work across telecom sites.",
      domain: "telecom",
      details: "ELECTRICAL (HT/LT Work) - 1500 SITES",
      features: ["Seamless Liaisoning", "Quick Approvals", "Load Assessment Expertise", "EV-Ready Infrastructure", 
        "Safety-Driven Installation", "Transformer I&C", "DG Set & BATT Bank, UPS I&C" ],
      tech: ["electrical"],
      status: "Completed",
    },
    {
      id: 4,
      title: "RF Installation & Network Optimization",
      description: "Radio Frequency installation for multiple vendors.",
      domain: "telecom",
      details:
        "RF Installation (IDEA / ALCATEL / SAMSUNG / NOKIA) - 2000+ SITES",
      features: ["End-to-End RF Deployment", "Precision Antenna Alignment", "Seamless Integration", "VSWR & Power Testing", 
        "High-Frequency Optimization", "Field Drive Testing", "Coverage & Quality Analysis", "Network Benchmarking", 
        "Data Reporting & Insights" ],
      tech: ["rf"],
      status: "Completed",
    },
    {
      id: 5,
      title: "FTTH Projects",
      description: "End-to-end fiber-to-the-home deployment and service management.",
      domain: "telecom",
      details: "FTTH Network – 500+ connections",
      features: ["High-speed connectivity", "Last-mile fiber deployment"],
      tech: ["om"],
      status: "Completed",
    },
    {
      id: 6,
      title: "Critical Tower Strengthening",
      description: "Strengthening of critical telecom towers.",
      domain: "telecom",
      details: "Strengthening of Critical Towers – 100",
      features: ["Structural reinforcement", "Safety ensured"],
      tech: ["critical"],
      status: "Completed",
    },
  ];

  return (
    <section className="bg-gradient-to-b py-16 relative overflow-hidden">
      <div className="container mx-auto px-6 z-10">
        <h2 className="text-5xl text-center mb-16 font-extrabold text-[#1a3b7c] drop-shadow-lg">
          Our Completed Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 200, damping: 18 }}
              className="relative overflow-hidden rounded-2xl p-6 cursor-default backdrop-blur-xl border border-white/20 shadow-xl transition-all duration-500 bg-gradient-to-br from-[#1e3a8a]/80 via-[#1e40af]/70 to-[#3b82f6]/60 hover:shadow-[0_0_30px_rgba(59,130,246,0.4)]"
            >
              <div className="flex items-center mb-3 space-x-3">
                <span className="text-4xl">{logos[project.domain]}</span>
                <h3 className="text-2xl font-extrabold tracking-wide text-white">
                  {project.title}
                </h3>
              </div>

              <p className="text-gray-200 mb-3">{project.description}</p>

              <span
                className={`px-2 py-1 rounded-full text-xs font-semibold ${
                  project.status === "Completed"
                    ? "bg-green-200/90 text-green-900"
                    : "bg-yellow-200/90 text-yellow-900"
                }`}
              >
                {project.status}
              </span>

              <div className="mt-4 border-t border-white/30 pt-4">
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
          ))}
        </div>
      </div>
    </section>
  );
}
