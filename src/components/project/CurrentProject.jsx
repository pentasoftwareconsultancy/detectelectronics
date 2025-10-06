import React from "react";
import { motion } from "framer-motion";

const currentProjects = [
  {
    id: 1,
    title: "OFC (STL)",
    description: "100 KMs of Optical Fiber Cable laid",
    details:
      "OFC (STL) – 100 KMs\nHigh-speed connectivity, Reliable network backbone",
    status: "Ongoing",
  },
  {
    id: 2,
    title: "Electrical Upgradation Work",
    description: "Upgradation across 28 sites",
    details:
      "Electrical Upgradation Work – 28 sites\nEfficient power distribution, High voltage safety",
    status: "Ongoing",
  },
  {
    id: 3,
    title: "Civil, Electrical & EB Work",
    description: "INDUS / PACE – 55 Sites",
    details:
      "Civil, Electrical & EB Work (INDUS / PACE) – 55 Sites\nStructural reinforcement, Safety ensured",
    status: "Ongoing",
  },
];

export default function CurrentProject() {
  return (
    <section className="bg-gradient-to-b py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-extrabold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 drop-shadow-lg">
          Current Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {currentProjects.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 200, damping: 18 }}
              className="relative overflow-hidden rounded-2xl p-6 cursor-default backdrop-blur-xl border border-white/20 shadow-xl transition-all duration-500 bg-gradient-to-br from-[#1e3a8a]/80 via-[#1e40af]/70 to-[#3b82f6]/60 hover:shadow-[0_0_30px_rgba(59,130,246,0.4)]"
            >
              <h3 className="text-2xl font-semibold mb-2 text-white">
                {project.title}
              </h3>
              <p className="text-gray-200 mb-3">{project.description}</p>

              <span
                className={`px-2 py-1 rounded-full text-xs font-semibold ${
                  project.status === "Ongoing"
                    ? "bg-yellow-200/90 text-yellow-900"
                    : "bg-green-200/90 text-green-900"
                }`}
              >
                {project.status}
              </span>

              <div className="mt-4 border-t border-white/30 pt-4 text-gray-100 text-sm whitespace-pre-line leading-relaxed">
                {project.details}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
