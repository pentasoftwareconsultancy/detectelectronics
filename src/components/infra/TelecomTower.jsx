// TelecomTower.jsx
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import bg from "../../assets/TelecomTower.png"
import SplitText from "../animationComponents/SplitText";

gsap.registerPlugin(ScrollTrigger);

const TelecomTower = () => {
  const paraRef = useRef(null);
  const listRef = useRef([]);
  const imgRef = useRef(null);

  useEffect(() => {
    // Paragraph animation - float in from left
    if (paraRef.current) {
      gsap.fromTo(
        paraRef.current,
        { x: -200, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: paraRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }

    // List items animation - fade-in with stagger
    if (listRef.current.length > 0) {
      gsap.fromTo(
        listRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: listRef.current[0],
            start: "top 90%",
            toggleActions: "play none none none",
          },
        }
      );
    }

    // Image animation - slide in from right
    if (imgRef.current) {
      gsap.fromTo(
        imgRef.current,
        { opacity: 0, x: 150 },
        {
          opacity: 1,
          x: 0,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: imgRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }
  }, []);

  return (
    <div className="font-sans py-16">
      {/* Header with Background Image */}
      <div
        className="relative w-full h-64 flex flex-col items-center justify-center bg-cover text-white bg-center"
        style={{
          backgroundImage:
            `url(${bg})`,
        }}
      >
        {/* Overlay for text visibility */}
        <div className="absolute inset-0 bg-opacity-50"></div>

        {/* Header text */}
        <div className="relative z-10">
            <SplitText
              text="TELECOM TOWER"
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
      <div className="mx-auto p-6 md:p-16 my-16 rounded-3xl bg-white">
        <p
          ref={paraRef}
          className="text-gray-800 mb-8 text-justify leading-relaxed"
        >
          Detect Electronics System Private Limited provides the service at
          Radio Systems Installation & Commissioning of BTS & WLL SYSTEM,
          Installation & Commissioning of 8 MB, 34MB & STM OFC System, C-DOT
          Equipment Installation & Commissioning, i.e. C-DOT 256, SBM Exchanges,
          MBM Exchanges, Installation & Commissioning of OCB Exchanges (2 K RSU
          and 10 K), Installation of EWSD Exchange (5K TAX) and Providing NTC on
          WLL System 1000 Nos.
        </p>

        {/* List + Image Side by Side */}
        <div className="flex flex-col md:flex-row gap-10 items-start">
          {/* List Section */}
          <ul className="flex-1 list-none space-y-3">
            {[ 
              "Site Engineering Survey", 
              "Confirmation of Infrastructure completion & functionality", 
              "Transmission & RF Data For the Site", 
              "Layout / plan for equipment installation", 
              "Material checkup at Site and Far end", 
              "BTS & Transmission Rack installation & grouting", 
              "Installation of indoor and outdoor Cable Trays", 
              "Installation of Battery Bank & S.M.P.S.", 
              "Connectorisation (IF,RF,PCM Alarm etc)", 
              "Cable laying (RF,IF,Jumpers, PCM, Alarm,AC/DC Supply OFC etc.)", 
              "Routing & proper fixing of all cables", 
              "Antenna installation GSM & MW (Azimuth, Height, tilt)", 
              "Weather proofing, earthing kits installation etc.", 
              "Equipments Earthing, EGB & IGB, Hatch plate installation", 
              "Labelling all cables, VSWR, Power / level measurements", 
              "Commissioning and alignment of MW Link", 
              "Commissioning of BTS & Integration, call test, Alarm test", 
              "Site Cleaning & handover of extra material", 
              "Drive test, optimization of network etc.", 
              "ASM & AGE implementation & Acceptance Test", 
            ].map((item, i) => {
              listRef.current[i] = null; // Reset ref
              return (
                <li
                  key={i}
                  ref={(el) => (listRef.current[i] = el)}
                  className="flex items-start text-gray-700 leading-relaxed"
                >
                  <span className="text-blue-600 mr-2 mt-1 text-lg">➤</span>
                  <span>{item}</span>
                </li>
              );
            })}
          </ul>

          {/* Image Section */}
          <div className="flex-1 flex justify-center md:justify-end">
            <img
              ref={imgRef}
              src="http://www.detectelectronics.com/images/infrastructure/telecom-tower-infrastructure.jpg"
              alt="Telecom Tower"
              className="w-full md:w-[550px] rounded-lg shadow-lg object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TelecomTower;