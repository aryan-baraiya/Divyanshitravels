// React import not required with automatic JSX runtime
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        
        <div className="footer-grid">
          
          {/* Column 1: About Brand */}
          <div className="footer-col brand-col">
            <a href="#home" className="footer-logo">
              <span className="logo-main-light">Divyanshi</span>
              <span className="logo-sub-light">Travels</span>
            </a>
            <p className="footer-about-text">
              Crafting premium travel experiences across the Indian subcontinent since 2014. 
              We specialize in custom family bonding journeys and safety-verified school/college expeditions.
            </p>
            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <svg className="social-icon" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"/>
                </svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg className="social-icon" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <svg className="social-icon" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-col link-col">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">Our Story</a></li>
              <li><a href="#services">Our Services</a></li>
              <li><a href="#packages">Tour Packages</a></li>
              <li><a href="#faq">FAQs</a></li>
              <li><a href="#inquiry">Get a Quote</a></li>
            </ul>
          </div>

          {/* Column 3: Travel Categories */}
          <div className="footer-col link-col">
            <h3>Tour Types</h3>
            <ul>
              <li><a href="#services">Multi-Gen Family Tours</a></li>
              <li><a href="#services">Group Sightseeing</a></li>
              <li><a href="#services">School Field Trips</a></li>
              <li><a href="#services">College Industrial Visits</a></li>
              <li><a href="#services">Coaching Excursions</a></li>
              <li><a href="#services">Bespoke Pilgrimage Tours</a></li>
            </ul>
          </div>

          {/* Column 4: Contact info */}
          <div className="footer-col contact-col">
            <h3>Divyanshi Office</h3>
            <p className="contact-address">
              57, New Nehru Colony Thatipur,<br />
              Near Model School, Gwalior,<br />
              Madhya Pradesh, India - 474001
            </p>
            <p className="contact-info-row">
              <strong>Phone:</strong> +91 98765 43210
            </p>
            <p className="contact-info-row">
              <strong>Email:</strong> plan@divyanshitravels.com
            </p>
            <p className="contact-info-row">
              <strong>Govt Reg No:</strong> MP-GW-2014-9844
            </p>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Divyanshi Travels. All Rights Reserved.</p>
          <div className="footer-meta-links">
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms of Service</a>
            <span className="footer-disclaimer">Forms via Web3Forms & WhatsApp</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
