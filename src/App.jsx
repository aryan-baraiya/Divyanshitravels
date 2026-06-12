import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import FullScreenHero from './components/FullScreenHero';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Packages from './components/Packages';
import Fleet from './components/Fleet';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import InquiryForm from './components/InquiryForm';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [selectedPackage, setSelectedPackage] = useState('');
  const [selectedVehicle, setSelectedVehicle] = useState('');

  const handleSelectPackage = (packageName) => {
    setSelectedPackage(packageName);
  };

  const handleSelectVehicle = (vehicleName) => {
    setSelectedVehicle(vehicleName);
  };

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const handleIntersection = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);
    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => observer.observe(el));

    // Re-check elements on load just in case they are already visible
    setTimeout(() => {
      const activeElements = document.querySelectorAll('.reveal');
      activeElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)) {
          el.classList.add('active');
        }
      });
    }, 100);

    return () => {
      revealElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="app-wrapper">
      {/* Navigation */}
      <Navbar />

      <main>
        {/* Hero Section */}
        <FullScreenHero />

        {/* Story Section */}
        <AboutUs />

        {/* Specializations / Services */}
        <Services />

        {/* Packages Display */}
        <Packages onSelectPackage={handleSelectPackage} />

        {/* Fleet Display */}
        <Fleet onSelectVehicle={handleSelectVehicle} />

        {/* Customer Reviews */}
        <Testimonials />

        {/* Accordion FAQs */}
        <FAQ />

        {/* Dynamic Booking Form */}
        <InquiryForm selectedPackage={selectedPackage} selectedVehicle={selectedVehicle} />
      </main>

      {/* Footer Details */}
      <Footer />
    </div>
  );
}

export default App;
