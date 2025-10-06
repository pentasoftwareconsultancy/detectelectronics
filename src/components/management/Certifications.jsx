import React, { useRef, useEffect } from 'react';
import Certificat from "../../assets/Certification.jpg";
import SplitText from '../animationComponents/SplitText';
import { gsap } from 'gsap';

const Certifications = () => {
  const listRef = useRef([]);
  const imageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === imageRef.current) {
              // Animate image
              gsap.fromTo(
                imageRef.current,
                { scale: 0.5, opacity: 0 },
                { scale: 1, opacity: 1, duration: 1, ease: "power3.out" }
              );
              observer.unobserve(entry.target);
            } else if (listRef.current.includes(entry.target)) {
              // Animate list items one by one
              gsap.fromTo(
                entry.target,
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
              );
              observer.unobserve(entry.target);
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    listRef.current.forEach((el) => el && observer.observe(el));
    if (imageRef.current) observer.observe(imageRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="flex flex-col items-center w-full mt-16 mb-16">
      {/* Header Section */}
      <div
        className="w-full bg-cover bg-center py-16 text-center text-white relative"
        style={{ backgroundImage: `url(${Certificat})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10">
          <SplitText
            text="CERTIFICATION"
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
      <div className="w-full flex flex-col md:flex-row justify-between items-start bg-white shadow-md mt-10 py-10 px-6 md:px-20 rounded-3xl">
        {/* Left – company details list */}
        <div className="md:w-1/2 w-full text-gray-800 text-sm md:text-base">
          <ul className="space-y-0">
            {[
              ["CORPORATE IDENTITY NUMBER", "U40104MH2008PTC188440"],
              ["GST NO.", "27AADCD0326Q1ZI"],
              ["PAN NO.", "AADCD0326Q"],
              ["TAN NO.", "NSKD03141F"],
              ["DIN NO.", "91266283"],
              ["PF NO.", "MH/AB/83251/APP/COMP/Cir.61/09"],
              ["ESIC", "ESI-2787/1905/CR-295/87/MED-13"],
              ["PTEC", "99211671264P"],
              ["IP-1 License", "588/2016"],
            ].map(([label, value], idx) => (
              <li
                key={label}
                ref={(el) => (listRef.current[idx] = el)}
                className="flex items-start py-4 border-b border-gray-200 opacity-0"
              >
                {/* chevron icon */}
                <svg
                  className="w-4 h-4 text-blue-600 flex-shrink-0 mr-4 mt-1"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M9 18l6-6-6-6" />
                </svg>

                <div>
                  <div className="text-gray-600">
                    {label} :{" "}
                    <span className="font-semibold text-gray-900">{value}</span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Right – certificate image */}
        <div className="md:w-1/2 w-full flex flex-col items-center mt-8 md:mt-0">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">
            Incorporation Certificate
          </h3>
          <img
            ref={imageRef}
            src={Certificat}
            alt="Incorporation Certificate"
            className="rounded-md shadow-lg w-72 md:w-[420px] object-contain scale-50 opacity-0"
          />
        </div>
      </div>
    </section>
  );
};

export default Certifications;
