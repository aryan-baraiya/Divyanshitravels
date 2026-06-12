import { useState } from 'react';
import './Testimonials.css';

const TESTIMONIALS_DATA = [
  {
    id: 1,
    quote: "Managed safety audits and logistics for our students seamlessly. An outstanding transport partner!",
    author: "Dr. Arvind R. Sharma",
    role: "Dean, Vivekananda Institute",
    tag: "Institutional Tour"
  },
  {
    id: 2,
    quote: "Perfect trip for our senior family members. A journey of absolute comfort and zero stress.",
    author: "The Iyer Family",
    role: "Family Group Tour",
    tag: "Family Tour"
  },
  {
    id: 3,
    quote: "Excellent group coordination and active medical support. Flawless transit management.",
    author: "Pradeep Goswami",
    role: "Director, Apex Academy",
    tag: "Institutional Tour"
  }
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? TESTIMONIALS_DATA.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === TESTIMONIALS_DATA.length - 1 ? 0 : prevIndex + 1
    );
  };

  const current = TESTIMONIALS_DATA[activeIndex];

  return (
    <section className="testimonials-section">
      <div className="testimonials-bg-overlay"></div>
      <div className="testimonials-container reveal">
        
        <div className="section-title-wrapper light-theme">
          <span className="section-subtitle">Reviews</span>
          <h2 className="testimonials-main-title">Client Stories</h2>
        </div>

        <div className="testimonial-slider-box reveal reveal-scale">
          
          {/* Big quotes mark */}
          <div className="quote-mark-icon">“</div>
          
          <div className="testimonial-content-wrapper">
            <span className="testimonial-tag">{current.tag}</span>
            <p className="testimonial-quote">
              {current.quote}
            </p>
            <div className="testimonial-author-box">
              <h4 className="testimonial-author">{current.author}</h4>
              <p className="testimonial-role">{current.role}</p>
            </div>
          </div>

          {/* Slider navigation */}
          <div className="testimonial-nav">
            <button 
              className="nav-btn prev-btn" 
              onClick={handlePrev}
              aria-label="Previous Testimonial"
            >
              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            {/* Dots */}
            <div className="nav-dots">
              {TESTIMONIALS_DATA.map((_, idx) => (
                <button
                  key={idx}
                  className={`dot ${idx === activeIndex ? 'dot-active' : ''}`}
                  onClick={() => setActiveIndex(idx)}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>

            <button 
              className="nav-btn next-btn" 
              onClick={handleNext}
              aria-label="Next Testimonial"
            >
              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
