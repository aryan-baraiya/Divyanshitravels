import { useState } from 'react';
import './Fleet.css';

const FLEET_DATA = [
  {
    id: 'swift-dzire',
    name: 'Maruti Swift Dzire',
    category: 'sedan',
    capacity: '4+1 Seats',
    luggage: '2 Bags',
    ac: 'Fully AC',
    type: 'Comfort Sedan',
    description: 'Comfort sedan with premium ride quality. Ideal for city tours and airport runs.',
    image: '/swift_dzire.png'
  },
  {
    id: 'honda-amaze',
    name: 'Honda Amaze',
    category: 'sedan',
    capacity: '4+1 Seats',
    luggage: '2 Bags',
    ac: 'Fully AC',
    type: 'Luxury Sedan',
    description: 'Generous legroom with a modern cabin. Perfect for small families.',
    image: '/udaipur_hero.png'
  },
  {
    id: 'innova-crysta',
    name: 'Toyota Innova Crysta',
    category: 'suv',
    capacity: '7+1 Seats',
    luggage: '4 Bags',
    ac: 'Climate Control',
    type: 'Premium SUV',
    description: 'Gold standard of tourist vehicles. Captain seats and high stability.',
    image: '/innova_crysta.png'
  },
  {
    id: 'scorpio',
    name: 'Mahindra Scorpio',
    category: 'suv',
    capacity: '7+1 Seats',
    luggage: '3 Bags',
    ac: 'Fully AC',
    type: 'Rugged SUV',
    description: 'Classic power with high clearance. Ideal for forts and rough terrain.',
    image: '/scorpio_classic.png'
  },
  {
    id: 'mg-hector',
    name: 'MG Hector',
    category: 'suv',
    capacity: '5 Seats',
    luggage: '3 Bags',
    ac: 'Fully AC',
    type: 'Luxury SUV',
    description: 'Panoramic cabin with smart layout. Premium executive choice.',
    image: '/udaipur_hero.png'
  },
  {
    id: 'ertiga',
    name: 'Maruti Ertiga',
    category: 'muv',
    capacity: '6+1 Seats',
    luggage: '3 Bags',
    ac: 'Double AC Vent',
    type: 'Affordable MUV',
    description: 'Practical family commuter with flexible seating. Economical choice.',
    image: '/coaching_van.png'
  },
  {
    id: 'eeco',
    name: 'Maruti Eeco',
    category: 'muv',
    capacity: '5 or 7 Seats',
    luggage: '2 Bags',
    ac: 'Optional AC',
    type: 'Budget Commuter',
    description: 'Practical budget van. Great for simple transfers and local runs.',
    image: '/coaching_van.png'
  },
  {
    id: '18-seater-bus',
    name: '18 Seater Mini Bus',
    category: 'bus',
    capacity: '18 Seats',
    luggage: 'Spacious Boot',
    ac: 'AC & Air Suspension',
    type: 'Luxury Mini Coach',
    description: 'Individual pushback seats and PA audio. Perfect for wedding guests.',
    image: '/charter_coach.png'
  },
  {
    id: '26-seater-bus',
    name: '26 Seater Luxury Bus',
    category: 'bus',
    capacity: '26 Seats',
    luggage: 'Large Luggage Hold',
    ac: 'Fully AC & Audio',
    type: 'Travel Coach',
    description: 'Spacious layout with massive boot. Ideal for student groups.',
    image: '/school_bus_transit.png'
  }
];

export default function Fleet({ onSelectVehicle }) {
  const [activeTab, setActiveTab] = useState('all');

  const filteredFleet = activeTab === 'all'
    ? FLEET_DATA
    : FLEET_DATA.filter(car => car.category === activeTab);

  const handleBookClick = (vehicleName) => {
    onSelectVehicle(vehicleName);
    const formElement = document.getElementById('inquiry');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="fleet" className="fleet-section">
      <div className="fleet-container">
        
        <div className="section-title-wrapper reveal">
          <span className="section-subtitle">Our Fleet</span>
          <h2 className="fleet-main-title">Select Your Vehicle</h2>
          <p className="section-description">
            Choose from our range of verified premium sedans, SUVs, and passenger coaches.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="fleet-tabs reveal">
          <button 
            className={`fleet-tab-btn ${activeTab === 'all' ? 'active' : ''}`}
            onClick={() => setActiveTab('all')}
          >
            All Fleet
          </button>
          <button 
            className={`fleet-tab-btn ${activeTab === 'sedan' ? 'active' : ''}`}
            onClick={() => setActiveTab('sedan')}
          >
            Sedans
          </button>
          <button 
            className={`fleet-tab-btn ${activeTab === 'suv' ? 'active' : ''}`}
            onClick={() => setActiveTab('suv')}
          >
            SUVs
          </button>
          <button 
            className={`fleet-tab-btn ${activeTab === 'muv' ? 'active' : ''}`}
            onClick={() => setActiveTab('muv')}
          >
            Budget MUVs
          </button>
          <button 
            className={`fleet-tab-btn ${activeTab === 'bus' ? 'active' : ''}`}
            onClick={() => setActiveTab('bus')}
          >
            Buses & Coaches
          </button>
        </div>

        {/* Fleet Grid */}
        <div className="fleet-grid">
          {filteredFleet.map((car, idx) => (
            <div key={car.id} className={`fleet-card reveal reveal-scale delay-${(idx % 3) + 1}`}>
              <div className="fleet-img-box">
                <img src={car.image} alt={car.name} className="fleet-img" />
                <div className="fleet-badge">{car.type}</div>
              </div>
              
              <div className="fleet-content">
                <h3 className="fleet-title">{car.name}</h3>
                <p className="fleet-description">{car.description}</p>
                
                {/* Vehicle Specs */}
                <div className="fleet-specs">
                  <div className="spec-item">
                    <svg className="spec-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <span>{car.capacity}</span>
                  </div>
                  <div className="spec-item">
                    <svg className="spec-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                    <span>{car.luggage}</span>
                  </div>
                  <div className="spec-item">
                    <svg className="spec-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <span>{car.ac}</span>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="fleet-footer" style={{ borderTop: 'none', paddingTop: 0 }}>
                  <button 
                    onClick={() => handleBookClick(car.name)}
                    className="fleet-inquire-btn"
                    style={{ width: '100%', textAlign: 'center' }}
                  >
                    Select Vehicle
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
