import { useState } from 'react';
import './Packages.css';

const PACKAGES_DATA = [
  {
    id: 'school-transport-loop',
    title: 'School Transport Route',
    category: 'commute',
    duration: 'Daily Route',
    image: '/school_bus.png',
    description: 'RTO-compliant 50-seater buses. Optimized student/staff routes with CCTV and wardens.',
    highlights: ['Daily student & teacher pickup', 'CCTV & live GPS tracking', 'Verified safety wardens'],
    inclusions: ['Speed Governor', 'CCTV Recording', 'Panic Alarm System', 'Parent SMS Alerts']
  },
  {
    id: 'university-shuttle',
    title: 'University Shuttle',
    category: 'commute',
    duration: 'Shuttle Service',
    image: '/college_shuttle.png',
    description: 'AC 32-seater mini-buses. Shuttles connecting campus directly to residential hubs.',
    highlights: ['Shift-aligned schedules', 'Staff & student route sync', 'Comfortable high-back seats'],
    inclusions: ['32-Seater AC Fleet', 'Fitness Audited Bus', 'GPS Route Sync', 'On-time Guarantee']
  },
  // {
  //   id: 'all-india-tour',
  //   title: 'All India Tours',
  //   category: 'tour',
  //   duration: 'Holiday Tour',
  //   image: '/kerala_houseboat.png',
  //   description: 'Custom private excursions. Personal itinerary planning, premium stays, and state permits.',
  //   highlights: ['Custom family & couple packages', 'Luxury SUVs & private coach', 'Handpicked hotel bookings'],
  //   inclusions: ['Customized Itinerary', 'Local Guide Booking', 'Interstate Tolls Covered', '24/7 Helpline Support']
  // },
  {
    id: 'excursion-charter',
    title: 'Excursion Charter',
    category: 'charter',
    duration: 'Group Charter',
    image: '/school_bus_transit.png',
    description: 'Excursion mini-coaches and vans for student picnics, industrial visits, and travel camps.',
    highlights: ['Academic excursions & picnics', 'Volvo luxury 53-seater coach', 'Full group insurance included'],
    inclusions: ['Volvo AC Coach', 'Experienced Tour Escort', 'RTO permits handled', 'Coordinator Free Slots']
  }
];

export default function Packages({ onSelectPackage }) {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredPackages = activeFilter === 'all'
    ? PACKAGES_DATA
    : PACKAGES_DATA.filter(pkg => pkg.category === activeFilter);

  const handleInquireClick = (packageName) => {
    onSelectPackage(packageName);
    // Smooth scroll to inquiry form
    const formElement = document.getElementById('inquiry');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="packages" className="packages-section">
      <div className="packages-container">
        
        <div className="section-title-wrapper reveal">
          <span className="section-subtitle">Routes & Packages</span>
          <h2 className="packages-main-title">Travel Solutions</h2>
          <p className="section-description">
            Select a category below to configure your custom group route or vacation tour.
          </p>
        </div>

        {/* Filter Controls */}
        <div className="filter-tabs reveal">
          <button 
            className={`filter-btn ${activeFilter === 'all' ? 'filter-active' : ''}`}
            onClick={() => setActiveFilter('all')}
          >
            All Services
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'commute' ? 'filter-active' : ''}`}
            onClick={() => setActiveFilter('commute')}
          >
            Daily Commutes
          </button>
          {/* <button 
            className={`filter-btn ${activeFilter === 'tour' ? 'filter-active' : ''}`}
            onClick={() => setActiveFilter('tour')}
          >
            All India Tours
          </button> */}
          <button 
            className={`filter-btn ${activeFilter === 'charter' ? 'filter-active' : ''}`}
            onClick={() => setActiveFilter('charter')}
          >
            Excursion Charters
          </button>
        </div>

        {/* Packages Grid */}
        <div className="packages-grid reveal">
          {filteredPackages.map((pkg, idx) => (
            <div key={pkg.id} className="package-card">
              <div className="package-img-box">
                <img src={pkg.image} alt={pkg.title} className="package-img" />
                <div className="package-duration">{pkg.duration}</div>
              </div>
              
              <div className="package-content">
                <h3 className="package-title">{pkg.title}</h3>
                <p className="package-description">{pkg.description}</p>
                
                {/* Highlights */}
                <div className="package-highlights-box">
                  <h4>Benefits:</h4>
                  <ul className="package-highlights">
                    {pkg.highlights.map((highlight, idx) => (
                      <li key={idx}>{highlight}</li>
                    ))}
                  </ul>
                </div>

                {/* Inclusions */}
                <div className="package-inclusions-box">
                  <div className="inclusion-tags">
                    {pkg.inclusions.map((inclusion, idx) => (
                      <span key={idx} className="inclusion-tag">{inclusion}</span>
                    ))}
                  </div>
                </div>

                {/* Card Footer: Inquiry Link */}
                <div className="package-footer">
                  <button 
                    onClick={() => handleInquireClick(pkg.title)}
                    className="package-inquire-btn"
                    style={{ width: '100%', textAlign: 'center' }}
                  >
                    Select Option
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
