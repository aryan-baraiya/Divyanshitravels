import './AboutUs.css';

export default function AboutUs() {
  return (
    <section id="about" className="about-section travel-promo-section">
      <div className="travel-promo-overlay" aria-hidden="true" />
      <div className="travel-promo-container">
        <div className="travel-promo-content reveal reveal-left">
          <span className="travel-promo-kicker">Trusted Transport Partner</span>
          <h2 className="travel-promo-title">
            Explore India
            <br />
            with Comfort &amp;
            <br />
            Confidence
          </h2>
          <p className="travel-promo-copy">
            Reliable transportation, tour packages, airport transfers, and unforgettable travel experiences across India.
          </p>
          <div className="travel-promo-actions">
            <a href="#inquiry" className="travel-promo-btn travel-promo-btn-primary">
              Book Now
            </a>
            <a href="#packages" className="travel-promo-btn travel-promo-btn-secondary">
              View Packages
            </a>
          </div>
        </div>

        <div className="travel-promo-visual reveal reveal-right" aria-hidden="true">
          <div className="travel-promo-frame">
            <img
              src="/school_bus_transit.png"
              alt="Divyanshi Travels coach on a mountain road"
              className="travel-promo-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
