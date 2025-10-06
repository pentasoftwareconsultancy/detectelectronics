import React from "react";
import MAV from "../../assets/mission-and-vision.png";
import SplitText from "../animationComponents/SplitText";

const MissionAndVision = () => {
  return (
    <section className="flex flex-col items-center w-full mt-16 mb-16">
      {/* Header Section */}
      <div
        className="w-full bg-cover bg-center py-16 text-center text-white relative"
        style={{
          backgroundImage: `url(${MAV})`,
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10">
          <SplitText
            text="Mission & Vision"
            className="text-4xl md:text-5xl font-semibold tracking-wide inline-block"
            delay={100} // delay before animation starts
            duration={0.6} // animation duration per letter
            ease="power3.out"
            splitType="chars" // split into characters
            from={{ opacity: 0, y: 40 }} // starting state
            to={{ opacity: 1, y: 0 }} // ending state
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
            onLetterAnimationComplete={() => console.log("Mission & Vision")} // inline callback
          >
            <span className="block w-16 h-[2px] bg-yellow-500 mx-auto mt-3"></span>
          </SplitText>
        </div>
      </div>

      {/* Content Section */}
      <div className="w-full flex flex-col md:flex-row items-center justify-center bg-white shadow-md mt-10 py-10 px-5 md:px-16 rounded-b-lg"></div>
    </section>
  );
};

export default MissionAndVision;
