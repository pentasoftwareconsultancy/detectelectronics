import React from "react";
import Fiber from "../../assets/OpticFiber.jpg";
import Cable from "../../assets/Cable.jpg";
import SplitText from "../animationComponents/SplitText";

const OpticalFiber = () => {
  const articleContent = `In view of technology development in telecom infrastructure, Optical Fiber Cable (OFC) has become the backbone of modern telecom networks, providing high-speed data transmission and advanced 3G/4G/5G features. DESIPL handles complete OFC work, starting with Route Survey, Route Marking, Trenching, Ducting (with protection like GI, Half/Full round RCC, PCC, DWC), Backfilling, Aerial OFC, DIT, Blowing, Splicing, Chambers for Splicing and Looping, Earthing, Termination & Route Lit Up. DESIPL ensures end-to-end solutions, including trenching, ducting, blowing, splicing, and termination.`;

  return (
    <div className="w-full bg-gradient-to-b from-gray-50 to-gray-100 py-16 antialiased">
      <div className="w-full max-w-7xl mx-auto px-4">

        {/* Header Section */}
        <div
          className="w-full bg-cover bg-center relative py-24 md:py-32 text-center text-white mb-16 rounded-3xl overflow-hidden shadow-lg"
          style={{ backgroundImage: `url(${Cable})` }}
        >
          {/* Overlay for readability */}
          <div className="absolute inset-0 bg-black/60"></div>

          <div className="relative z-10">
            <SplitText
              text="OPTICAL FIBER CABLE"
              className="text-4xl md:text-5xl font-bold tracking-wide inline-block"
              delay={100}
              duration={0.6}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
            >
              <span className="block w-20 h-1 bg-yellow-500 mx-auto mt-4 rounded"></span>
            </SplitText>
          </div>
        </div>

        {/* Main Content */}
        <main className="bg-white p-6 sm:p-10 rounded-3xl shadow-lg">
          <div className="flex flex-col lg:flex-row gap-12 items-start w-full">

            {/* Text Section */}
            <article className="lg:w-3/5 text-gray-700 text-base md:text-lg leading-relaxed">
              <p className="text-justify">{articleContent}</p>

              <ul className="mt-6 list-none space-y-3">
                {[
                  "Route Survey & Marking",
                  "Trenching & Ducting (GI, RCC, PCC, DWC)",
                  "Backfilling & Site Restoration",
                  "Aerial OFC Installation",
                  "DIT & Blowing Techniques",
                  "Splicing & Termination",
                  "Chambers for Splicing and Looping",
                  "Earthing & Route Lit Up",
                  "Complete End-to-End OFC Solutions",
                ].map((item, i) => (
                  <li key={i} className="flex items-start text-gray-700 leading-relaxed">
                    <span className="text-blue-600 mr-2 mt-1 text-lg">➤</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>

            {/* Image Section */}
            <div className="lg:w-2/5 w-full flex justify-center">
              <img
                src={Fiber}
                alt="Optical Fiber Cable"
                className="w-full md:w-[400px] lg:w-full h-full rounded-xl shadow-xl border-4 border-gray-200 transition-transform duration-300 hover:scale-105 hover:shadow-2xl object-cover"
              />
            </div>

          </div>
        </main>
      </div>
    </div>
  );
};

export default OpticalFiber;
