import React from 'react';

const OpticalFiber = () => {
  const pageTitle = "OPTICAL FIBER CABLE";
  const articleContent = `In view of technology development in telecom infrastructure, Optical Fiber Cable occupied its own space to provide advanced 3G features for the fast growing world. OFC work is a part of DESIPL, which starts with Route survey, Route marking, Trenching, Ducting ( with required protection like GI, Half/Full round RCC, PCC, DWC), Back filling, Aerial OFC, DIT, Blowing, Splicing, Chambers for Splicing and Looping, Earthing, Termination & Route lit up. DESIPL provides complete solution required for OFC like trenching, ducting, blowing, splicing, termination.`;

  const imageUrl = "https://placehold.co/600x400/1F2937/FFFFFF?text=FIBER+OPTIC+CABLE+ILLUSTRATION";

  return (
    <div className="w-full bg-gradient-to-b py-16 antialiased">
      <div className="w-full mx-auto">
        
        {/* Header */}
        <header className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white mb-10 p-8 sm:p-12 text-center">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-widest uppercase mb-3">
            {pageTitle}
          </h1>
          <div className="w-20 h-1 bg-yellow-500 mx-auto rounded-full"></div>
        </header>

        {/* Main Content */}
        <main className="bg-white p-6 sm:p-10 rounded-3xl w-full">
          <div className="flex flex-col lg:flex-row gap-10 items-start w-full">
            
            {/* Text Section */}
            <article className="lg:w-3/5 text-gray-700 text-base leading-relaxed">
              <p className="text-justify md:text-left p-6 bg-blue-50/60 rounded-lg shadow-inner border border-blue-100 transition-all duration-300 hover:shadow-lg hover:scale-105">
                {articleContent}
              </p>
            </article>
            
            {/* Image Section */}
            <div className="lg:w-2/5 w-full">
              <img
                src={imageUrl}
                alt="Optical Fiber Cable"
                className="w-full h-auto object-cover rounded-xl shadow-xl border-4 border-gray-200 transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
              />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default OpticalFiber;
