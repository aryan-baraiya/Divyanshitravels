import { useState } from 'react';
import './Services.css';

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(2); // Default to middle card (All India Tours)

  return (
    <section id="services" className="services-section">
      <div className="services-container">
        <div className="section-title-wrapper reveal">
          <span className="section-subtitle">Our Services</span>
          <h2 className="services-main-title">Professional Passenger Transit</h2>
          <p className="section-description">
            Providing structured daily commutes and custom travel solutions.
          </p>
        </div>

        <div className="services-accordion reveal">
          {/* Card 1: School Transport */}
          <div 
            className={`service-card ${activeIndex === 0 ? 'expanded' : ''}`}
            onMouseEnter={() => setActiveIndex(0)}
            onClick={() => setActiveIndex(0)}
          >
            <div className="service-img-wrapper">
              <img 
                src="/school_bus_transit.png" 
                alt="Safe school transport bus fleet" 
                className="service-card-img" 
              />
              <div className="service-badge">School Transport</div>
            </div>
            <div className="service-info-wrapper">
              <h3>Students & Staff Commute</h3>
              <p className="service-description-text">
                Safe, scheduled daily routes for school students and staff with absolute safety protocols.
              </p>
              {/* <ul className="service-features">
                <li>
                  <svg className="check-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Female wardens on board</span>
                </li>
                <li>
                  <svg className="check-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>CCTV & emergency panic buttons</span>
                </li>
                <li>
                  <svg className="check-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Real-time GPS tracking</span>
                </li>
                <li>
                  <svg className="check-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Optimized route logistics</span>
                </li>
              </ul> */}
              <a href="#inquiry" className="service-btn">
                Inquire Now
              </a>
            </div>
          </div>

          {/* Card 2: College & University Transport */}
          <div 
            className={`service-card ${activeIndex === 1 ? 'expanded' : ''}`}
            onMouseEnter={() => setActiveIndex(1)}
            onClick={() => setActiveIndex(1)}
          >
            <div className="service-img-wrapper">
              <img 
                src="/college_shuttle.png" 
                alt="University and college shuttle bus" 
                className="service-card-img" 
              />
              <div className="service-badge institutional">University Shuttles</div>
            </div>
            <div className="service-info-wrapper">
              <h3>Faculty & Student Commutes</h3>
              <p className="service-description-text">
                Timetable-aligned shuttle networks connecting residential areas directly to college campuses.
              </p>
              {/* <ul className="service-features">
                <li>
                  <svg className="check-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Lectures-aligned schedules</span>
                </li>
                <li>
                  <svg className="check-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>High-back comfort seating</span>
                </li>
                <li>
                  <svg className="check-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Premium AC mini-coaches</span>
                </li>
                <li>
                  <svg className="check-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>24/7 dedicated transit desk</span>
                </li>
              </ul> */}
              <a href="#inquiry" className="service-btn">
                Inquire Now
              </a>
            </div>
          </div>

          {/* Card 3: All India Tours */}
          <div 
            className={`service-card ${activeIndex === 2 ? 'expanded' : ''}`}
            onMouseEnter={() => setActiveIndex(2)}
            onClick={() => setActiveIndex(2)}
          >
            <div className="service-img-wrapper">
              <img 
                src="/kerala_houseboat.png" 
                alt="All India family and group holiday tour" 
                className="service-card-img" 
              />
              <div className="service-badge">All India Tours</div>
            </div>
            <div className="service-info-wrapper">
              <h3>Family & Group Holiday Tours</h3>
              <p className="service-description-text">
                Bespoke tour packages with luxury vehicle support and hotel stays across tourist destinations.
              </p>
              {/* <ul className="service-features">
                <li>
                  <svg className="check-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Tailored holiday itineraries</span>
                </li>
                <li>
                  <svg className="check-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Luxury SUVs & Tourist Coaches</span>
                </li>
                <li>
                  <svg className="check-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Premium verified hotels</span>
                </li>
                <li>
                  <svg className="check-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>24/7 central tourist helpline</span>
                </li>
              </ul> */}
              <a href="#inquiry" className="service-btn">
                Inquire Now
              </a>
            </div>
          </div>

          {/* Card 4: Trips for School Colleges */}
          <div 
            className={`service-card ${activeIndex === 3 ? 'expanded' : ''}`}
            onMouseEnter={() => setActiveIndex(3)}
            onClick={() => setActiveIndex(3)}
          >
            <div className="service-img-wrapper">
              <img 
                src="/student_travel.png" 
                alt="School and college excursion trip" 
                className="service-card-img" 
              />
              <div className="service-badge institutional">Academic Outings</div>
            </div>
            <div className="service-info-wrapper">
              <h3>Institution Excursion Trips</h3>
              <p className="service-description-text">
                Fully coordinated tours, visits, and field trips for schools, universities, and coaching hubs.
              </p>
              {/* <ul className="service-features">
                <li>
                  <svg className="check-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Group travel insurance cover</span>
                </li>
                <li>
                  <svg className="check-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Experienced tour coordinators</span>
                </li>
                <li>
                  <svg className="check-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Bulk institutional discounts</span>
                </li>
                <li>
                  <svg className="check-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Permits & toll support</span>
                </li>
              </ul> */}
              <a href="#inquiry" className="service-btn">
                Inquire Now
              </a>
            </div>
          </div>

          {/* Card 5: Wedding Transport */}
          <div 
            className={`service-card ${activeIndex === 4 ? 'expanded' : ''}`}
            onMouseEnter={() => setActiveIndex(4)}
            onClick={() => setActiveIndex(4)}
          >
            <div className="service-img-wrapper">
              <img 
                src="/innova_crysta.png" 
                alt="Premium wedding transport vehicle" 
                className="service-card-img" 
              />
              <div className="service-badge">Wedding Transport</div>
            </div>
            <div className="service-info-wrapper">
              <h3>Elegant Wedding Guest Transfers</h3>
              <p className="service-description-text">
                Premium wedding transport for bride, groom, and guests with clean, comfortable, and timely coordination.
              </p>
              {/* <ul className="service-features">
                <li>
                  <svg className="check-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Luxury cars and guest vehicles</span>
                </li>
                <li>
                  <svg className="check-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Point-to-point event coordination</span>
                </li>
                <li>
                  <svg className="check-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>On-time pickups for ceremonies</span>
                </li>
                <li>
                  <svg className="check-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Well-maintained, spotless vehicles</span>
                </li>
              </ul> */}
              <a href="#inquiry" className="service-btn">
                Inquire Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
