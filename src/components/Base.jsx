import React, { useState } from 'react'; // Import useState
import { submitSubscription } from '../api'; // Import our API function

function Base() {
  // State for subscription form
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  // Subscription form submission handler
  const handleSubscribe = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      await submitSubscription({ email }); // Send email to API
      setEmail(''); // Clear form
      setSuccess('Subscribed successfully!');
    } catch (err) {
      setError(err.response?.data?.message || 'Subscription failed.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {/* --- Full-width Call to Action Banner --- */}
      <section 
        className="relative bg-cover bg-center py-20 md:py-32 flex items-center justify-center text-white text-center"
        style={{
          // IMPORTANT: Replace this URL with your actual background image URL
          backgroundImage: `url('/images/Rectangle.svg')` // Make sure this path is correct
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 max-w-3xl mx-auto px-4">
          <p className="text-2xl md:text-3xl font-semibold leading-relaxed mb-8">
            Learn more about our listing process, as well as our additional staging and design work.
          </p>
          <button className="px-10 py-4 bg-white text-blue-800 font-bold text-lg rounded-md shadow-lg hover:bg-gray-100 transition duration-300 transform hover:scale-105">
            LEARN MORE
          </button>
        </div>
      </section>

      {/* --- Footer Section (with updated Subscribe Form) --- */}
      <footer className="bg-blue-700 text-white py-8 md:py-12">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
          
          <nav className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2 mb-6 md:mb-0">
            <a href="#" className="hover:text-blue-200 transition duration-200">Home</a>
            <a href="#" className="hover:text-blue-200 transition duration-200">Services</a>
            <a href="#" className="hover:text-blue-200 transition duration-200">Projects</a>
            <a href="#" className="hover:text-blue-200 transition duration-200">Testimonials</a>
            <a href="#" className="hover:text-blue-200 transition duration-200">Contact</a>
          </nav>

          {/* ----- THIS IS THE UPDATED FORM ----- */}
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row items-center gap-4">
            <span className="text-lg font-medium">Subscribe Us</span>
            
            {/* Feedback messages */}
            <div className="flex flex-col">
              <div className="flex items-center gap-4">
                <input 
                  type="email" 
                  placeholder="Enter Email Address" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="px-4 py-2 rounded-md bg-blue-600 border border-blue-500 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-300 w-full sm:w-auto"
                  aria-label="Email address for subscription"
                  required
                />
                <button 
                  type="submit"
                  disabled={loading}
                  className="px-6 py-2 bg-white text-blue-700 font-semibold rounded-md hover:bg-gray-200 transition duration-200 w-full sm:w-auto disabled:bg-gray-300"
                >
                  {loading ? '...' : 'Subscribe'}
                </button>
              </div>
              {error && <div className="text-red-300 text-xs mt-1 text-center sm:text-left">{error}</div>}
              {success && <div className="text-green-300 text-xs mt-1 text-center sm:text-left">{success}</div>}
            </div>
            
          </form>
        </div>
      </footer>
    </div>
  );
}

export default Base;