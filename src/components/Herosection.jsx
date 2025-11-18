import React, { useState } from 'react'; // Import useState
import { submitContactForm } from '../api'; // Import our API function

function Herosection() {
  // State for form fields
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [city, setCity] = useState('');

  // State for feedback
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  // Form submission handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const formData = { fullName, email, mobile, city };
      await submitContactForm(formData); // Send data to API
      
      // Clear form
      setFullName('');
      setEmail('');
      setMobile('');
      setCity('');
      
      setSuccess('Consultation request sent successfully!');
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to send request.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative w-full mt-18"> {/* You might need to adjust margin-top based on your fixed Navbar height */}
      
      {/* Original image */}
      <img 
        src="../src/assets/herosection.svg" // Make sure this asset path is correct
        className="w-full h-[600px] object-cover"
        alt="Hero background"
      />

      <div className="absolute inset-0 flex items-center justify-between px-20">
        {/* Left-side text */}
        <div className="max-w-xl">
          <h1 className="text-5xl text-white font-bold leading-tight">
            Consultation,<br /> 
            Design,<br /> 
            & Marketing
          </h1>
        </div>

        {/* Right-side form */}
        <div className="w-[380px] p-8 rounded-xl shadow-2xl bg-slate-700/70 ">
          
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Get a Free Consultation
          </h2>

          {/* ----- THIS IS THE UPDATED FORM ----- */}
          <form onSubmit={handleSubmit} className="space-y-4">
            
            {/* Feedback messages */}
            {error && <div className="bg-red-100 text-red-700 p-2 rounded text-sm text-center">{error}</div>}
            {success && <div className="bg-green-100 text-green-700 p-2 rounded text-sm text-center">{success}</div>}

            <input
              type="text"
              placeholder="Full Name"
              value={fullName} // Added value
              onChange={(e) => setFullName(e.target.value)} // Added onChange
              className="w-full px-4 py-3 border border-slate-500 rounded-md
              bg-slate-600 text-white placeholder-slate-400 
              focus:outline-none focus:ring-2 focus:ring-orange-500"
              required // Added required
            />

            <input
              type="email"
              placeholder="Enter Email Address"
              value={email} // Added value
              onChange={(e) => setEmail(e.target.value)} // Added onChange
              className="w-full px-4 py-3 border border-slate-500 rounded-md
              bg-slate-600 text-white placeholder-slate-400 
              focus:outline-none focus:ring-2 focus:ring-orange-500"
              required // Added required
            />

            <input
              type="tel"
              placeholder="Mobile Number"
              value={mobile} // Added value
              onChange={(e) => setMobile(e.target.value)} // Added onChange
              className="w-full px-4 py-3 border border-slate-500 rounded-md
              bg-slate-600 text-white placeholder-slate-400 
              focus:outline-none focus:ring-2 focus:ring-orange-500"
              required // Added required
            />

            <input
              type="text"
              placeholder="Area, City"
              value={city} // Added value
              onChange={(e) => setCity(e.target.value)} // Added onChange
              className="w-full px-4 py-3 border border-slate-500 rounded-md
              bg-slate-600 text-white placeholder-slate-400 
              focus:outline-none focus:ring-2 focus:ring-orange-500"
              required // Added required
            />

            <button
              type="submit"
              disabled={loading} // Added disabled state
              className="w-full mt-4 px-6 py-3 bg-orange-500 text-white
              font-semibold rounded-md shadow-lg hover:bg-orange-600 
              transition duration-300 disabled:bg-gray-400"
            >
              {loading ? 'Sending...' : 'Get Quick Quote'} {/* Added loading text */}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Herosection;