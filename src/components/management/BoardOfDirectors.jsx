import React, { useRef, useEffect } from "react";
import BOD from "../../assets/BoardOfDirectors.jpg";
import visionImage from "../../assets/vision.jpeg";
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
              observer.unobserve(entry.target); // animate only once
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((el) => {
      if (el.ref.current) {
        gsap.set(el.ref.current, el.from); // set initial state
        observer.observe(el.ref.current);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="flex flex-col items-center w-full mt-16 mb-16">
      {/* Header Section */}
      <div
        className="w-full bg-cover bg-center py-16 text-center text-white relative"
        style={{ backgroundImage: `url(${BOD})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10">
          <SplitText
            text="BOARD OF DIRECTORS"
            className="text-4xl md:text-5xl font-semibold tracking-wide inline-block"
            delay={100}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
            onLetterAnimationComplete={() =>
              console.log("BOARD OF DIRECTORS")
            }
          >
            <span className="block w-16 h-[2px] bg-yellow-500 mx-auto mt-3"></span>
          </SplitText>
        </div>
      </div>

      {/* Content Section */}
      <div className="w-full flex flex-col md:flex-row items-center justify-center bg-white shadow-md mt-10 py-10 px-5 md:px-16 rounded-3xl">
        {/* Image */}
        <div
          ref={imageRef}
          className="md:w-1/3 w-full flex justify-center mb-6 md:mb-0"
        >
          <img
            src={visionImage}
            alt="Vision"
            className="rounded-md shadow-lg w-80 md:w-[350px]"
          />
        </div>

        {/* Text */}
        <div
          ref={textRef}
          className="md:w-2/3 w-full text-gray-800 md:pl-10 leading-relaxed"
        >
          <h3 className="text-2xl font-semibold text-gray-700 mb-4">
            <strong>MR. Satish Ajabe (M.D)</strong>
          </h3>
          <p>
            Satish has started his career at a young age of 21 after completing
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
    </section>
  );
};

export default BoardOfDirectors;
