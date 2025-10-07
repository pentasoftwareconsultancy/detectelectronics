import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
// import img from "../../assets/ProjectManagementimg.jpeg";
import bg from "../../assets/ProjectManagementBG.jpeg";

export default function ProjectManagement() {
  const headerRef = useRef(null);
  const imgRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out", duration: 1 },
      });

      tl.from(headerRef.current, { y: -50, opacity: 0 })
        .from(imgRef.current, { x: -100, opacity: 0, scale: 0.9 }, "-=0.5")
        .from(textRef.current, { x: 100, opacity: 0 }, "-=0.7");
    });

    return () => ctx.revert(); // cleanup GSAP on unmount
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center overflow-hidden py-16">
      {/* Header */}
      <header
        ref={headerRef}
        className="w-full py-16 text-center text-white shadow-md bg-cover bg-center relative"
        style={{ backgroundImage: `url(${bg})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-opacity-70 pointer-events-none"></div>

        <div className="relative z-10">
          <h1 className="text-4xl font-bold tracking-wide ">
            PROJECT MANAGEMENT CONSULTANT
          </h1>
          <div className="w-20 h-1 bg-yellow-500 mx-auto mt-3"></div>
        </div>
      </header>

      {/* Content */}
      <main className="bg-white w-full flex flex-col md:flex-row items-center mt-16 rounded-3xl">
        {/* Image Card */}
        <div
          ref={imgRef}
          className="flex-1 rounded-2xl p-6 justify-center flex items-center"
        >
          <img
            src={"https://i.pinimg.com/1200x/21/2d/bd/212dbd9bd43198422c0f0e01ca3d1ade.jpg"}
            alt="Project Management"
            className="w-[700px] h-[600px] object-contain will-change-transform rounded-full"
            loading="lazy"
          />
        </div>

        {/* Text Card */}
        <div
          ref={textRef}
          className="flex-1 min-h-[500px] max-w-[800px] rounded-2xl p-6 will-change-transform justify-center flex flex-col text-lg"
        >
          <p className="text-gray-700 mb-4 leading-relaxed">
            Quality management is a method of ensuring the efficiency in designing,
            developing and implementing a product or service with respect to the
            system and its performance.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Quality management therefore uses quality assurance and control of
            processes as well as products to achieve more consistent quality. DESIPL
            considers Quality as a key factor at OFC areas...
          </p>
          <p className="text-gray-700 leading-relaxed">
            DESIPL acts as a bridge between the Client and Vendor to meet the
            quality measures by providing daily progress report of work...
          </p>
        </div>
      </main>
    </div>
  );
}