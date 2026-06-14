// React import not required with automatic JSX runtime
import './Hero.css';

export default function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-bg-overlay"></div>
      <div className="hero-container">
        <div className="hero-grid">
          
          {/* Left Column: Hero Text and Action Buttons */}
          <div className="hero-content animated-fade-in">
            <span className="hero-label">Trusted Travel Partner</span>
            <h1 className="hero-title">
              Safe, Reliable & <br />
              <span>Smart Transit.</span>
            </h1>
            <p className="hero-subtitle">
              Udaipur's premium daily transport and tours. GPS-tracked, CCTV-secured school commutes, institutional loops, and custom All India tours.
            </p>
            <div className="hero-actions">
              <a href="#packages" className="hero-btn-primary">
                Explore Services
              </a>
              <a
                href={
                  `https://wa.me/${import.meta.env.VITE_WHATSAPP_NUMBER || '919424799608'}?text=${encodeURIComponent(
                    'Hello Divyanshi Travels, I am interested in arranging daily passenger transport. Please guide me on routes and fleet.'
                  )}`
                }
                className="hero-btn-secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="wa-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.458L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436.002 9.858-4.42 9.86-9.86.001-2.63-1.019-5.101-2.87-6.956C16.61 1.934 14.136.915 11.5.914 6.062.914 1.64 5.338 1.637 10.78c-.001 1.765.467 3.488 1.355 5.017l-.989 3.612 3.712-.973zm12.115-6.757c-.301-.15-1.78-.879-2.056-.979-.275-.1-.475-.15-.675.15-.2.3-.775.979-.95 1.179-.175.2-.35.225-.65.075-.301-.15-1.267-.467-2.414-1.492-.893-.797-1.496-1.782-1.672-2.082-.175-.3-.019-.462.13-.611.135-.134.301-.35.45-.525.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.675-1.625-.925-2.225-.244-.588-.493-.508-.675-.517-.175-.008-.375-.01-.575-.01-.2 0-.525.075-.8 1.075-.275 1-.95 2.45-.95 2.45s-.1 1.767 1.025 2.892c.625.625 1.2 1.15 1.9 1.6.7.45 1.3.8 2.05.9 1.125.15 2.25.1 3.25-.05.8-.12 1.625-.67 1.825-1.27.2-.6.2-1.12.15-1.22-.05-.1-.2-.15-.5-.3z"/>
                </svg>
                Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* Right Column: Floating Feature Badges */}
          <div className="hero-visual animated-fade-in">
            <div className="hero-badge-card animate-float">
              <div className="badge-item">
                <span className="badge-icon">🛡️</span>
                <div className="badge-info">
                  <h4>CCTV Secured</h4>
                  <p>Continuous safety monitoring</p>
                </div>
              </div>
              <div className="badge-item">
                <span className="badge-icon">📍</span>
                <div className="badge-info">
                  <h4>GPS Live Link</h4>
                  <p>Real-time vehicle tracking</p>
                </div>
              </div>
              <div className="badge-item">
                <span className="badge-icon">⭐</span>
                <div className="badge-info">
                  <h4>10+ Years Trust</h4>
                  <p>Pioneering group travel</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      <div className="hero-scroll-indicator">
        <span className="mouse">
          <span className="wheel"></span>
        </span>
        <span className="arrow"></span>
      </div>
    </section>
  );
}
