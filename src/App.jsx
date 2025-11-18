import React from 'react';

// Import all your components
import Navbar from './components/Navbar';
import Herosection from './components/Herosection';
import Secondsection from './components/Secondsection';
import ThirdSection from './components/ThirdSection';
import OurProjects from './components/OurProjects'; // The dynamic component
import HappyClients from './components/HappyClients'; // The dynamic component
import Base from './components/Base';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      
      {/* The Navbar is fixed, so we add padding-top to the main content 
          to prevent it from being hidden underneath. 
          The Navbar.jsx file shows py-4 and w-32 logo, 
          a height of ~80px-90px is a good guess. 
          Adjust 'pt-[90px]' as needed.
      */}
      <main className="pt-[80px]"> {/* Adjust this padding as needed! */}
        <Herosection />
        <Secondsection />
        <ThirdSection />
        <OurProjects />
        <HappyClients />
        <Base />
      </main>

      <Footer />
    </div>
  );
}

export default App;