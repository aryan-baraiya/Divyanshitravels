import { useState } from 'react';
import './FAQ.css';

const FAQ_DATA = [
  {
    id: 1,
    question: "How can parents track the daily school bus location?",
    answer: "We provide secure credentials to our live GPS tracking link for real-time route monitoring and ETA updates."
  },
  {
    id: 2,
    question: "Do you offer door-to-door drop-offs for late coaching batches?",
    answer: "Yes, we deploy smaller vans to drop students directly at their residential gates for night batches."
  },
  {
    id: 3,
    question: "What background checks do you perform on drivers?",
    answer: "Every driver undergoes police verification, heavy commercial license checks, and regular medical audits."
  },
  {
    id: 4,
    question: "What happens in case of breakdowns or delays?",
    answer: "We send immediate SMS alerts and dispatch standby backup vehicles from our Udaipur hubs within 15 minutes."
  },
  {
    id: 5,
    question: "What contract options are available for institutions?",
    answer: "We offer customized annual service agreements using our fleet or your existing vehicles."
  }
];

export default function FAQ() {
  const [openId, setOpenId] = useState(null);

  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="faq-section">
      <div className="faq-container reveal">
        
        <div className="section-title-wrapper reveal">
          <span className="section-subtitle">Support</span>
          <h2 className="faq-main-title">Common Questions</h2>
          <p className="section-description">
            Quick answers about safety, routes, and contracts.
          </p>
        </div>

        <div className="faq-accordion-wrapper reveal reveal-scale">
          {FAQ_DATA.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div 
                key={item.id} 
                className={`faq-item ${isOpen ? 'faq-item-open' : ''}`}
              >
                <button 
                  className="faq-question-btn"
                  onClick={() => toggleFAQ(item.id)}
                  aria-expanded={isOpen}
                >
                  <span className="faq-question">{item.question}</span>
                  <span className="faq-toggle-icon">
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M19 9l-7 7-7-7" 
                      />
                    </svg>
                  </span>
                </button>
                
                <div className="faq-answer-wrapper">
                  <div className="faq-answer-content">
                    <p>{item.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
