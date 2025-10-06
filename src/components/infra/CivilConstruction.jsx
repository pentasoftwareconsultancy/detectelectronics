import React from "react";
import img from "../../assets/CivilConstruction.jpg";
import SplitText from "../animationComponents/SplitText"

const CivilConstruction = () => {
  return (
    <section className="my-16">
      {" "}

      {/* Header Section */}
      <div
        className="w-full bg-cover bg-center relative py-20 text-center text-white mb-16"
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10">
          <SplitText
            text="CIVIL CONSTRUCTION"
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

      {/* Content Section */}
      <div className="bg-white mx-auto px-6 md:px-10 py-16 rounded-3xl">
        {" "}
        {/* more vertical padding */}
        <p className="text-gray-700 text-base md:text-lg mb-10">
          Detect electronics system private limited involved in Civil
          construction of GBT, RTT & BTS foundation for mobile towers.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {" "}
          {/* added more gap */}
          {/* Left Content */}
          <ul className="space-y-5 text-gray-800 text-[15px] border-l border-gray-200 pl-4">
            {[
              "Tower Foundation RTT (9, 12,15,18,21,24,30Mtrs)",
              "Tower Foundation GBT – 4 Leg & Itrans (40 Mtrs, 60Mtrs, 80 Mtrs)",
              "Tower Foundation Monopole – 20 mtr,40mtr",
              "Tower Erection RTT (9, 12,15,18,21,24,30Mtrs)",
              "Tower Erection GBT (40 Mtrs, 60Mtrs, 80 Mtrs)",
              "BTS Foundation",
              "Tower painting",
              "Tower Strengthening",
            ].map((item, index) => (
              <li
                key={index}
                className="flex items-start gap-2 border-b border-gray-200 pb-2"
              >
                <span className="text-sky-500 font-bold">›</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          {/* Right Image */}
          <div className="flex justify-center">
            <img
              src={img}
              alt="Civil Construction"
              className="rounded-3xl shadow-2xl w-full max-w-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CivilConstruction;
