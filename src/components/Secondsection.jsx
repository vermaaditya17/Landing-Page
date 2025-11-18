import React from 'react';

const Secondsection = () => {
  return (
    <div className="min-h-screen bg-white font-sans overflow-hidden">
      
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col md:flex-row gap-12 md:gap-20 items-center">
          
          {/* LEFT SIDE TEXT */}
          <div className="md:w-5/12 text-center md:text-left">
            <h1 
              className="text-4xl sm:text-5xl font-extrabold mb-6"
              style={{ color: '#1a3a60' }}
            >
              Not Your Average Realtor
            </h1>
            
            <p className="text-gray-600 text-lg leading-relaxed max-w-lg mx-auto md:mx-0">
              Real estate has an eye for exquisite properties, personal curated nesting designs, 
              and effective marketing to get homeowners top dollar on the real estate market.
            </p>
          </div>

          {/* RIGHT SIDE IMAGES */}
          <div className="md:w-7/12 relative h-[500px] w-full mt-8 md:mt-0">

            {/* Decorations */}
            <div className="absolute -bottom-8 -left-8 w-16 h-16 opacity-50">
              <div className="w-full h-full border-2 border-dashed border-gray-200 rounded-lg transform -rotate-45"></div>
            </div>

            <div className="absolute top-0 left-0 w-16 h-16 bg-blue-50 opacity-50 rounded-full"></div>

            <div className="absolute top-12 left-1/3 w-8 h-8 bg-blue-500 rounded-full shadow-lg"></div>

            <div className="absolute top-1/2 left-1/4 w-6 h-6 bg-orange-500 rounded-full shadow-md"></div>

            <div className="absolute top-1/2 left-1/2 
                transform -translate-x-1/2 -translate-y-1/2 
                w-[450px] h-[450px] border border-gray-200 
                rounded-full border-opacity-70">
            </div>

            {/* MAIN CENTER IMAGE */}
            <div className="absolute top-1/2 left-1/2 
                transform -translate-x-1/2 -translate-y-1/2 
                w-72 h-72 sm:w-80 sm:h-80 
                rounded-full overflow-hidden 
                border-8 border-white shadow-xl z-20">
              
              <img
                src="/images/homeMan.svg"
                alt="Main Realtor"
                className="w-full h-full object-cover"
              />
            </div>

            {/* TOP RIGHT IMAGE */}
            <div className="absolute top-12 right-0 
                w-44 h-44 rounded-full overflow-hidden 
                border-8 border-white shadow-2xl z-30">
              
              <img
                src="/images/happyCouple.svg"
                alt="Happy Couple"
                className="w-full h-full object-cover"
              />
            </div>

            {/* BOTTOM RIGHT IMAGE */}
            <div className="absolute bottom-16 right-20 
                w-36 h-36 rounded-full overflow-hidden 
                border-8 border-white shadow-xl z-30">
              
              <img
                src="/images/smileman.svg"
                alt="Smiling Man"
                className="w-full h-full object-cover"
              />
            </div>

          </div>
        </div>
      </section>

      <div className="text-center pt-8 pb-16">
        <h2 className="text-3xl font-bold text-blue-800">Why Choose Us?</h2>
        <div className="w-4 h-4 bg-blue-500 rounded-full mx-auto mt-4"></div>
      </div>
    </div>
  );
};

export default Secondsection;
