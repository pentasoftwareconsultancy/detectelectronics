import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitText from "../animationComponents/SplitText";

gsap.registerPlugin(ScrollTrigger);

const OpticalFiber = () => {
  const articleContent = `In view of technology development in telecom infrastructure, Optical Fiber Cable (OFC) has become the backbone of modern telecom networks, providing high-speed data transmission and advanced 5G features. DESIPL extend the services for optical fiber network in Maharashtra and Karnataka State for Telecom Operators.`;

  const paraRef = useRef(null);
  const listRef = useRef([]);
  const sliderRef = useRef(null);

  useEffect(() => {
    // Paragraph animation - float in from left on scroll
    if (paraRef.current) {
      gsap.fromTo(
        paraRef.current,
        { x: -200, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: paraRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }

    // List items animation - fade-in with stagger on scroll
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

    // Pause and Go slider animation
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
          style={{ backgroundImage: `url(/assets/Cable.jpg)` }}
        >
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
              <p ref={paraRef} className="text-justify mb-6">
                {articleContent}
              </p>

              <ul className="mt-6 list-none space-y-3">
                {[
                  "Right of Way",
                  "Route Feasibility Survey",
                  "OFC Routes Execution",
                  "Route Acceptance and Handover",
                  "FTTx Rollout",
                  "Aerial Fiber",
                  "Complete End-to-End OFC Solutions",
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

            {/* Image Slider Section - Pause and Go Effect */}
            <div className="lg:w-2/5 w-full relative h-[400px] rounded-xl border-4 border-gray-200 shadow-xl overflow-hidden">
              <div
                ref={sliderRef}
                className="w-full h-full relative"
              >
                {/* Slides Container */}
                <div className="absolute inset-0 flex">
                  {[
                    "/assets/OpticalFiber/opticfiber2.jpg",
                    "/assets/OpticalFiber/opticfiber3.jpg",
                    "/assets/OpticalFiber/opticfiber4.jpg",
                    "/assets/OpticalFiber/opticfiber5.jpg",
                    "/assets/OpticalFiber/opticfiber6.jpg"
                  ].map((src, index) => (
                    <div
                      key={index}
                      className="slide absolute top-0 left-0 w-full h-full flex-shrink-0"
                    >
                      <img
                        src={src}
                        alt={`Optical Fiber ${index + 2}`}
                        className="w-full h-full object-cover"
                        draggable={false}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </main>
      </div>
    </div>
  );
};

export default OpticalFiber;