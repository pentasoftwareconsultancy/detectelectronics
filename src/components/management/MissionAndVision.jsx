import React from "react";
import SplitText from "../animationComponents/SplitText";

const MissionAndVision = () => {
  return (
    <div className="w-full bg-gradient-to-b from-gray-50 to-gray-100 py-16 antialiased">
      <div className="w-full max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <div
          className="w-full bg-cover bg-center relative py-24 md:py-32 text-center text-white mb-16 rounded-3xl shadow-lg overflow-hidden"
          style={{ backgroundImage: `url(/assets/mission-and-vision.png)` }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative z-10">
            <SplitText
              text="Mission, Vision & Values"
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
              <span className="block w-16 h-[2px] bg-gray-400 mx-auto mt-3 rounded"></span>
            </SplitText>
          </div>
        </div>

        {/* Mission Section */}
        <div className="bg-white p-6 sm:p-10 rounded-3xl flex flex-col md:flex-row items-center gap-8 mb-12 transform transition duration-300 hover:scale-105 hover:opacity-90">
          <div className="md:w-1/2 text-gray-800 space-y-4">
            <h2 className="text-2xl font-semibold text-[#2384c5]">
              Our Mission
            </h2>
            <p className="leading-relaxed">
              At <strong>Detect Electronics Systems (I) Pvt. Ltd.</strong>, our
              mission is to deliver reliable, innovative, and quality-driven
              infrastructure solutions across{" "}
              <strong>Telecom, Civil, Electrical, and OFC sectors</strong>.
            </p>
            <p className="leading-relaxed">
              We aim to achieve{" "}
              <strong>
                customer satisfaction through excellence in project execution
              </strong>
              , timely delivery, and continual improvement in technology and
              service quality.
            </p>
            <p className="leading-relaxed">
              By empowering skilled professionals and adopting advanced
              engineering practices, we strive to build a{" "}
              <strong>strong, connected, and future-ready India</strong>.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center relative group">
            <div className="relative rounded-3xl shadow-xl w-full md:w-5/6 overflow-hidden">
              <img
                src={"/assets/Mission.jpg"}
                alt="Mission"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>
        </div>

        {/* Vision Section */}
        <div className="bg-white p-6 sm:p-10 rounded-3xl flex flex-col md:flex-row items-center gap-8 mb-12 transform transition duration-300 hover:scale-105 hover:opacity-90">
          <div className="md:w-1/2 flex justify-center relative group">
            <div className="relative rounded-3xl shadow-xl w-full md:w-5/6 overflow-hidden">
              <img
                src={"/assets/CivilConstruction.jpg"}
                alt="Vision"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>
          <div className="md:w-1/2 text-gray-800 space-y-4">
            <h2 className="text-2xl font-semibold text-[#2384c5]">
              Our Vision
            </h2>
            <p className="leading-relaxed mt-4">
              To be recognized as a{" "}
              <strong>
                leading and trusted partner in telecom and infrastructure
                development
              </strong>
              , known for integrity, innovation, and commitment to quality.
            </p>
            <p className="leading-relaxed mt-4">
              We envision expanding our capabilities globally while upholding
              our core values —{" "}
              <strong>
                excellence, safety, sustainability, and client trust
              </strong>
              .
            </p>
            <p className="leading-relaxed mt-4">
              Through continuous growth and technological advancement, we aspire
              to contribute to the nation’s digital infrastructure and set new
              benchmarks in{" "}
              <strong>Telecom, OFC, and Civil Construction Services</strong>.
            </p>
          </div>
        </div>

        {/* Values Section */}
        <div className="bg-white p-6 sm:p-10 rounded-3xl flex flex-col md:flex-row items-center gap-8 transform transition duration-300 hover:scale-105 hover:opacity-90">
          <div className="md:w-1/2 text-gray-800 space-y-4">
            <h2 className="text-2xl font-semibold text-[#2384c5]">
              Our Values
            </h2>
            <ul className="mt-4 list-disc list-inside space-y-2">
              <li>
                <strong>Integrity:</strong> Upholding honesty and transparency
                in every project.
              </li>
              <li>
                <strong>Excellence:</strong> Delivering top-quality solutions
                and services consistently.
              </li>
              <li>
                <strong>Safety:</strong> Ensuring safety standards in all
                operations.
              </li>
              <li>
                <strong>Sustainability:</strong> Promoting environmentally
                responsible practices.
              </li>
              <li>
                <strong>Client Trust:</strong> Building lasting relationships
                through reliability and professionalism.
              </li>
            </ul>
          </div>
          <div className="md:w-1/2 flex justify-center relative group">
            <div className="relative rounded-3xl shadow-xl w-full md:w-5/6 overflow-hidden">
              <img
                src={"/assets/Values.jpg"}
                alt="Values"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionAndVision;
