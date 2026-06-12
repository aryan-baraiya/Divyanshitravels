import { useState, useEffect } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-left">
          <a href="#services" className="navbar-desktop-link" onClick={closeMobileMenu}>
            Services
          </a>

          <button 
            className={`navbar-toggle ${isMobileMenuOpen ? 'toggle-active' : ''}`}
            onClick={toggleMobileMenu}
            aria-label="Toggle navigation menu"
            aria-expanded={isMobileMenuOpen}
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>

          <div className={`navbar-menu-wrapper ${isMobileMenuOpen ? 'menu-open' : ''}`}>
            <ul className="navbar-menu">
              <li className="navbar-item">
                <a href="#services" className="navbar-link" onClick={closeMobileMenu}>Services</a>
              </li>
              <li className="navbar-item">
                <a href="#about" className="navbar-link" onClick={closeMobileMenu}>About</a>
              </li>
              <li className="navbar-item">
                <a href="#inquiry" className="navbar-link" onClick={closeMobileMenu}>Inquire Now</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="navbar-center">
          <a href="#home" className="navbar-logo" onClick={closeMobileMenu}>
            <span className="logo-main">Divyanshi</span>
            <span className="logo-sub">Travels</span>
          </a>
        </div>

        <div className="navbar-right">
          <a href="#inquiry" className="navbar-cta-btn" onClick={closeMobileMenu}>
            Inquire Now
          </a>
        </div>
      </div>
    </nav>
  );
}
