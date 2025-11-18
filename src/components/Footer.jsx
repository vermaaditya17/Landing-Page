import React from 'react'

function Footer() {
  return (
    <footer className="bg-gray-700 py-6 font-sans border-t border-gray-300 top-0">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">

        {/* LEFT SIDE — COPYRIGHT TEXT */}
        <div className="text-gray-200 text-sm">
          © 2025 | All Rights Reserved | Designed by <span className="font-semibold">Aditya Verma</span>
        </div>

        {/* CENTER — LOGO */}
        <div className="my-4 md:my-0">
          <img 
            src="/images/logo.svg" 
            alt="Logo" 
            className="w-40 h-auto mx-auto" 
          />
        </div>

        {/* RIGHT — SOCIAL MEDIA ICONS */}
        <div className="flex items-center gap-4">

          {/* Instagram */}
          <a href="#" className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-200 transition">
            <img src="/icon/Group.svg" alt="Instagram" className="w-5" />
          </a>

          {/* Facebook */}
          <a href="#" className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-200 transition">
            <img src="/icon/Frame.svg" alt="Facebook" className="w-5" />
          </a>

          {/* Twitter */}
          <a href="#" className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-200 transition">
            <img src="/icon/Group-1.svg" alt="Twitter" className="w-5" />
          </a>

          {/* LinkedIn */}
          <a href="#" className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-200 transition">
            <img src="/icon/Linkedin.svg" alt="LinkedIn" className="w-5" />
          </a>
        </div>

      </div>
    </footer>
  )
}

export default Footer
