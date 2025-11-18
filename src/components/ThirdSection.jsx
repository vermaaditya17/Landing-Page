import React from 'react'

function ThirdSection() {
  return (
    <div>
      <section className="bg-white font-sans overflow-hidden py-16">
      <div className="container mx-auto px-4">
        
        {/* ---------------------------------- */}
        {/* 3-COLUMN FEATURE CARDS (NO ARROWS) */}
        {/* ---------------------------------- */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          
          {/* Card 1: Potential ROI */}
          <div className="flex flex-col items-center md:items-start p-4">

            {/* 🟦 Yaha apna icon (SVG/PNG) put karna hai */}
            <img 
              src="/icon/home.svg" 
              alt="ROI Icon" 
              className="w-12 h-12 mb-3 mx-auto md:mx-0"
            />

            <h3 className="text-xl font-semibold text-gray-800 mb-2">Potential ROI</h3>
            <p className="text-gray-500 text-sm">
              Whether you are looking for a way to maximize returns on your current home...
            </p>
          </div>

          {/* Card 2: Design */}
          <div className="flex flex-col items-center md:items-start p-4">

            {/* 🟦 Yaha apna icon (SVG/PNG) put karna hai */}
            <img 
              src="/icon/paintbrush-2.svg" 
              alt="Design Icon" 
              className="w-12 h-12 mb-3 mx-auto md:mx-0"
            />

            <h3 className="text-xl font-semibold text-gray-800 mb-2">Design</h3>
            <p className="text-gray-500 text-sm">
              We charge a flat fee and guide you through your design process...
            </p>
          </div>

          {/* Card 3: Marketing */}
          <div className="flex flex-col items-center md:items-start p-4">

            {/* 🟦 Yaha apna icon (SVG/PNG) put karna hai */}
            <img 
              src="/icon/circle-dollar-sign.svg" 
              alt="Marketing Icon" 
              className="w-12 h-12 mb-3 mx-auto md:mx-0"
            />

            <h3 className="text-xl font-semibold text-gray-800 mb-2">Marketing</h3>
            <p className="text-gray-500 text-sm">
              Tracking sales strategies and using market analytics...
            </p>
          </div>

        </div>


        {/* ---------------------------------- */}
        {/* PHOTO GALLERY SECTION */}
        {/* ---------------------------------- */}

        <div className="relative py-16 mt-8">

          {/* MAIN IMAGE */}
          <div className="relative w-full max-w-lg mx-auto shadow-2xl rounded-xl overflow-hidden z-10">
              <img
                  src="/images/Showing.svg"
                  alt="Group discussion"
                  className="w-full h-full object-cover"
              />
          </div>

          {/* SMALL LEFT */}
          <div className="absolute top-10 left-1/4 transform -translate-x-full w-36 h-36 shadow-lg rounded-lg overflow-hidden z-20 hidden lg:block">
              <img
                  src="/images/Handshaking.svg"
                  alt="Small image 1"
                  className="w-full h-full object-cover"
              />
          </div>
          
          {/* SMALL RIGHT */}
          <div className="absolute bottom-10 right-1/4 transform translate-x-full w-36 h-36 shadow-lg rounded-lg overflow-hidden z-20 hidden lg:block">
              <img
                  src="/images/couple.svg"
                  alt="Small image 3"
                  className="w-full h-full object-cover"
              />
          </div>

          {/* SHAPES */}
          <div className="absolute top-1/4 left-1/4 w-8 h-8 bg-orange-500 rounded-lg transform -translate-x-full z-0 hidden md:block"></div>
          <div className="absolute top-1/4 right-1/4 w-12 h-12 border-4 border-blue-500 rounded-lg transform translate-x-full z-0 hidden md:block"></div>
          <div className="absolute top-1/2 left-1/4 w-4 h-4 bg-blue-500 rounded-sm transform -translate-x-full z-0 hidden md:block"></div>

        </div>


        {/* ---------------------------------- */}
        {/* ABOUT US SECTION */}
        {/* ---------------------------------- */}

        <div className="text-center mt-20">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">About Us</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full mb-8"></div>
          
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed mb-8">
            We combine design, strategy, and real-estate expertise to help clients unlock the full potential of their properties. Our team focuses on data-driven decisions, aesthetic improvements, and targeted marketing to deliver measurable results.
We don’t just complete projects — we build lasting relationships through trust, transparency, and performance.
          </p>
          
          <button className="px-8 py-3 border border-blue-500 text-blue-500 font-semibold rounded-full hover:bg-blue-50 transition duration-300">
            LEARN MORE
          </button>
        </div>

      </div>
    </section>
    </div>
  )
}

export default ThirdSection
