// TelecomTower.jsx
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitText from "../animationComponents/SplitText";

gsap.registerPlugin(ScrollTrigger);

const TelecomTower = () => {
  const paraRef = useRef(null);
  const listRef = useRef([]);
  const imgRef = useRef(null);
  const sliderRef = useRef(null);

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

    // Auto slide animation for all images - right to left
    if (sliderRef.current) {
          const slides = sliderRef.current.querySelectorAll('.slide');
          const totalSlides = slides.length;
          
          // Set initial positions
          gsap.set(slides, {
            xPercent: (i) => i * 100
          });
    
          // Create timeline with pauses
          const tl = gsap.timeline({
            repeat: -1
          });
    
          // Add slide animations with pauses
          for (let i = 0; i < totalSlides; i++) {
            // Slide movement (1 second)
            tl.to(slides, {
              xPercent: `-=${100}`,
              duration: 1,
              ease: "power2.inOut",
              modifiers: {
                xPercent: gsap.utils.wrap(-100, (totalSlides - 1) * 100)
              }
            });
            
            // Pause (3 seconds)
            tl.to({}, {
              duration: 3
            });
          }
    
          // Start animation when in view
          ScrollTrigger.create({
            trigger: sliderRef.current,
            start: "top 80%",
            onEnter: () => tl.play(),
            onLeave: () => tl.pause(),
            onEnterBack: () => tl.play(),
            onLeaveBack: () => tl.pause(),
          });
        }
      }, []);

  return (
    <div className="w-full bg-gradient-to-b from-gray-50 to-gray-100 py-16 antialiased">
      <div className="w-full max-w-7xl mx-auto px-4">

        {/* Header Section */}
        <div
          className="w-full bg-cover bg-center relative py-24 md:py-32 text-center text-white mb-16 rounded-3xl overflow-hidden shadow-lg"
          style={{ backgroundImage: `url(/assets/TelecomTower.jpg)` }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
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
              <span className="block w-16 h-[2px] bg-yellow-500 mx-auto mt-3 rounded"></span>
            </SplitText>
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-white p-6 sm:p-10 rounded-3xl shadow-lg">
          <div className="flex flex-col lg:flex-row gap-12 items-start w-full">

            {/* Text Section */}
            <article className="lg:w-3/5 text-gray-700 text-base md:text-lg leading-relaxed">
              <p
                ref={paraRef}
                className="text-justify mb-6"
              >
                Detect Electronics System Private Limited provides the service at
                Radio Systems Installation & Commissioning of BTS & MSC Installation,
                Installation & Commissioning of 8 MB, 34MB & STM OFC System, C-DOT
                Equipment Installation & Commissioning, i.e. C-DOT 256, SBM Exchanges,
                MBM Exchanges, Installation & Commissioning of OCB Exchanges (2 K RSU
                and 10 K), Installation of EWSD Exchange (5K TAX) and Providing NTC on
                WLL System 1000 Nos.
              </p>

              <ul className="mt-4 list-none space-y-3">
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
                ].map((item, i) => (
                  <li
                    key={i}
                    ref={(el) => (listRef.current[i] = el)}
                    className="flex items-start text-gray-700 leading-relaxed"
                  >
                    <span className="text-blue-600 mr-2 mt-1 text-lg">➤</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>

            {/* Image Section with Auto Slide Animation */}
            <div className="w-full lg:w-2/5 justify-center lg:flex relative h-[640px]">
              <div
                ref={sliderRef}
                className="w-full h-full relative overflow-hidden rounded-xl border-4 border-gray-200 shadow-xl"
              >
                {/* Slides Container */}
                <div className="absolute inset-0 flex">
                  {[
                    "/assets/TelecomTower/telecomtower2.jpg",
                    "/assets/TelecomTower/telecomtower3.jpg",
                    "/assets/TelecomTower/telecomtower4.jpg",
                    "/assets/TelecomTower/telecomtower5.jpg",
                    "/assets/TelecomTower/telecomtower6.jpg"
                  ].map((src, index) => (
                    <div
                      key={index}
                      className="slide absolute top-0 left-0 w-full h-full flex-shrink-0"
                    >
                      <img
                        src={src}
                        alt={`Telecom Tower ${index + 2}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default TelecomTower;