import React, { useRef, useEffect } from "react";
import SplitText from "../animationComponents/SplitText";
import { gsap } from "gsap";

const BoardOfDirectors = () => {
  const imageRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const elements = [
      { ref: imageRef, from: { x: -100, opacity: 0 } }, // image from left
      { ref: textRef, from: { y: 50, opacity: 0 } }, // text from bottom
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elObj = elements.find((e) => e.ref.current === entry.target);
            if (elObj) {
              gsap.to(elObj.ref.current, {
                x: 0,
                y: 0,
                opacity: 1,
                duration: 1,
                ease: "power3.out",
              });
              observer.unobserve(entry.target);
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((el) => {
      if (el.ref.current) {
        gsap.set(el.ref.current, el.from);
        observer.observe(el.ref.current);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full bg-gray-50 py-16 antialiased">
      <div className="w-full max-w-7xl mx-auto px-4">

        {/* Header Section */}
        <div
          className="w-full bg-cover bg-center relative py-24 md:py-32 text-center text-white mb-16 rounded-3xl shadow-lg overflow-hidden"
          style={{ backgroundImage: `url(/assets/BoardOfDirectors.jpg)` }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative z-10">
            <SplitText
              text="BOARD OF DIRECTOR"
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
        <div className="bg-white p-6 sm:p-10 rounded-3xl shadow-lg flex flex-col md:flex-row items-center gap-8">
          
          {/* Image */}
          <div
            ref={imageRef}
            className="md:w-1/3 w-full h-[500px] flex justify-center mb-6 md:mb-0 relative rounded-3xl"
            style={{
              boxShadow: "0 0 25px #2384c5",
              animation: "glowBorder 2s ease-in-out infinite",
              borderRadius: "1.5rem",
            }}
          >
            <style>
              {`
                @keyframes glowBorder {
                  0% {
                    box-shadow: 0 0 5px #2384c5, 0 0 10px #2384c5, 0 0 20px #2384c5;
                  }
                  50% {
                    box-shadow: 0 0 20px #2384c5, 0 0 40px #2384c5, 0 0 60px #2384c5;
                  }
                  100% {
                    box-shadow: 0 0 5px #2384c5, 0 0 10px #2384c5, 0 0 20px #2384c5;
                  }
                }
              `}
            </style>
              
            <img
              src="/assets/director.png"
              alt="DirectorImage"
              className="rounded-3xl shadow-xl w-full md:w-[500px] object-top"
            />
          </div>
          {/* Text */}
          <div
            ref={textRef}
            className="md:w-2/3 w-full text-gray-800 md:pl-10 leading-relaxed"
          >
            <h3 className="text-2xl font-extrabold text-[#2384c5]">MR. Satish Ajabe</h3>
            <p className="text-[16px] mb-4 ml-7">Managing Director</p>
            <p>
              MR. Satish (M.D) has started his career at a young age of 21 after completing
              Bachelor of Engineering from Pune University and founded Detect
              Electronics System (I) Private Limited (DESIPL) with a modest
              capital, in the year 1998. Today, he heads a successful enterprise
              Detect Electronics Systems (I) Private Limited, one of the top
              companies in IT and Telecom infrastructure. DESIPL erected 1000+
              mobile towers and laid hundreds of kilometers of OFC network under
              his management in Maharashtra and other states.
            </p>
            <p className="mt-4">
              He is well known in the industry for his expertise and timely
              delivery of services. Satish is also expanding ambitiously into
              other verticals like education and hospitality. With a visionary
              mindset, he aims to make DESIPL a highly dedicated telecom
              infrastructure service provider all over India.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default BoardOfDirectors;
