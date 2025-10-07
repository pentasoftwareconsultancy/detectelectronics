import React from "react";
import Fiber from "../../assets/OpticFiber.jpg";
import Cable from "../../assets/Cable.jpg";
import SplitText from "../animationComponents/SplitText"

const OpticalFiber = () => {
  const articleContent = `In view of technology development in telecom infrastructure, Optical Fiber Cable occupied its own space to provide advanced 3G features for the fast growing world. OFC work is a part of DESIPL, which starts with Route survey, Route marking, Trenching, Ducting ( with required protection like GI, Half/Full round RCC, PCC, DWC), Back filling, Aerial OFC, DIT, Blowing, Splicing, Chambers for Splicing and Looping, Earthing, Termination & Route lit up. DESIPL provides complete solution required for OFC like trenching, ducting, blowing, splicing, termination.`;

  return (
    <div className="w-full bg-gradient-to-b py-16 antialiased">
      <div className="w-full mx-auto">
        {/* Header */}
        <div
          className="w-full bg-cover bg-center relative py-20 text-center text-white mb-16"
          style={{ backgroundImage: `url(${Cable})` }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="relative z-10">
            <SplitText
              text="OPTICAL FIBER CABLE"
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
              <span className="block w-16 h-[2px] bg-yellow-500 mx-auto mt-3"></span>
            </SplitText>
          </div>
        </div>

        {/* Main Content */}
        <main className="bg-white p-6 sm:p-10 rounded-3xl w-full">
          <div className="flex flex-col lg:flex-row gap-10 items-start w-full">
            {/* Text Section */}
            <article className="lg:w-3/5 text-gray-700 text-base leading-relaxed">
              <p className="text-justify md:text-left p-6">{articleContent}</p>
            </article>

            {/* Image Section */}
            <div className="lg:w-2/5 w-full">
              <img
                src={Fiber}
                alt="Optical Fiber Cable"
                className="w-full h-96 object-cover rounded-xl shadow-xl border-4 border-gray-200 transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
              />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default OpticalFiber;
