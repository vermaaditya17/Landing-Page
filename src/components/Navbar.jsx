import React from 'react'

function Navbar() {
  return (
    <div className="w-full fixed top-0 left-0 z-50 bg-white shadow-sm ">

      {/* Main container */}
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-10">

        {/* Logo */}
        <img 
          src="../src/assets/logo.svg" 
          alt="logo" 
          className="w-32"
        />

        {/* Menu items */}
        <div className="flex items-center gap-12 text-black font-semibold">

          <h1 className="cursor-pointer hover:text-orange-500">HOME</h1>
          <h1 className="cursor-pointer hover:text-orange-500">SERVICES</h1>
          <h1 className="cursor-pointer hover:text-orange-500">ABOUT</h1>
          <h1 className="cursor-pointer hover:text-orange-500">PROJECTS</h1>
          <h1 className="cursor-pointer hover:text-orange-500">TESTIMONIALS</h1>

          {/* Contact Button */}
          <button className="bg-orange-500 px-6 py-2 rounded-xl hover:bg-white border border-orange-500 hover:text-orange-500 text-white transition">
            CONTACT
          </button>

        </div>

      </div>
    </div>
  )
}

export default Navbar
