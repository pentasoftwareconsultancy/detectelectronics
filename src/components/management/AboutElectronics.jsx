import React, { useRef, useEffect } from "react";
import AboutElectro from "../../assets/AboutElectro.jpg";
import SplitText from "../animationComponents/SplitText";
import { gsap } from "gsap";
import SplitType from "split-type";

const AboutElectronics = () => {
  const contentRef = useRef([]);
  const splitRef = useRef([]);

  useEffect(() => {
    const splitRefs = [...splitRef.current];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = contentRef.current.indexOf(entry.target);
            if (splitRefs[index]) {
              gsap.fromTo(
                splitRefs[index].lines,
                { y: 50, opacity: 0 },
                {
                  y: 0,
                  opacity: 1,
                  duration: 0.8,
                  ease: "power3.out",
                  stagger: 0.25,
                }
              );
              observer.unobserve(entry.target);
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    contentRef.current.forEach((el, idx) => {
      if (!el) return;
      splitRefs[idx] = new SplitType(el, { type: "lines" });
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
      splitRefs.forEach((s) => s.revert());
    };
  }, []);

  return (
    <div className="w-full bg-gradient-to-b from-gray-50 to-gray-100 py-16 antialiased">
      <div className="w-full max-w-7xl mx-auto px-4">

        {/* Header Section */}
        <div
          className="w-full bg-cover bg-center relative py-24 md:py-32 text-center text-white mb-16 rounded-3xl overflow-hidden shadow-lg"
          style={{ backgroundImage: `url(${AboutElectro})` }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="relative z-10">
            <SplitText
              text="ABOUT DETECT ELECTRONICS"
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

        {/* Content Section */}
        <div className="bg-white p-6 sm:p-10 rounded-3xl shadow-lg text-gray-800 leading-relaxed">
          {[ 
            `Detect Electronics Systems (I) Private Limited, a sister company of Detect Electronics System with 23 years of experience, marks its presence in the market by providing customer-satisfactory service. DESIPL consists of well-trained and skilled manpower in OFC, Civil Engineering, Telecommunications, Electrical, and Contract Management fields.`,
            `It has attained laurels in timely completion of projects and quality management. This success has been possible because of its dynamic and diligent team working towards developing the best solutions in telecom system implementation, integration, maintenance, electrical and civil construction, and quality management.`,
            `It has proved itself as a pioneer in Quality Controlled Turnkey works across diversified sectors. Our strong reputation has earned us mega projects in Telecommunication, Public Works, Cooperative, and Industrial sectors. Still aiming high, we look forward to extending our services to many more customers who want to see their projects see the light of the day.`,
          ].map((text, index) => (
            <p
              key={index}
              ref={(el) => (contentRef.current[index] = el)}
              className="mb-6 text-base md:text-lg cursor-pointer"
            >
              {text}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutElectronics;
