import { useState, useEffect } from 'react';
import './InquiryForm.css';

export default function InquiryForm({ selectedPackage, selectedVehicle }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    commuteType: 'daily',
    institution: '',
    route: '',
    destination: '', // Holds travel service choice
    vehiclePreference: '', // Selected preferred vehicle
    groupSize: '',   // Passengers count
    timing: '',      // Class timings / Dates
    message: ''
  });

  const [formStatus, setFormStatus] = useState({
    submitting: false,
    success: false,
    error: null
  });

  // Pre-fill fleet choice if selected from fleet card lists
  useEffect(() => {
    if (selectedPackage) {
      const isCharter = selectedPackage.toLowerCase().includes('charter') || 
                        selectedPackage.toLowerCase().includes('excursion');
      const isTour = selectedPackage.toLowerCase().includes('tour') || 
                     selectedPackage.toLowerCase().includes('india');
      
      // Allow updating form state based on external selection
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setFormData(prev => ({
        ...prev,
        destination: selectedPackage,
        commuteType: isCharter ? 'charter' : isTour ? 'tour' : 'daily'
      }));
    }
  }, [selectedPackage]);

  // Pre-fill vehicle preference when chosen from the Fleet card
  useEffect(() => {
    if (selectedVehicle) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setFormData(prev => ({
        ...prev,
        vehiclePreference: selectedVehicle
      }));
    }
  }, [selectedVehicle]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Compile the WhatsApp deep link message
  const generateWhatsAppUrl = () => {
    const { name, phone, email, commuteType, institution, route, destination, vehiclePreference, groupSize, timing, message } = formData;
    
    let typeLabel = 'Daily Commute';
    if (commuteType === 'tour') typeLabel = 'All India Tour';
    else if (commuteType === 'charter') typeLabel = 'Excursion Charter';

    const textMessage = `Hello Divyanshi Travels, I would like to inquire about travel/transit services:
• Name: ${name || 'Not provided'}
• Phone: ${phone || 'Not provided'}
• Email: ${email || 'Not provided'}
• Service Type: ${typeLabel}
• Institution/Family Group: ${institution || 'Not specified'}
• Preferred Route/Pickup/Destination: ${route || 'Not specified'}
• Selected Fleet/Package Category: ${destination || 'Not selected'}
• Preferred Vehicle Choice: ${vehiclePreference || 'No specific preference'}
• Passengers/Commuters Count: ${groupSize || 'Not specified'}
• Dates/Class Timings: ${timing || 'Not specified'}
• Additional Notes: ${message || 'None'}`;

    const waNumber = import.meta.env.VITE_WHATSAPP_NUMBER || '919876543210';
    return `https://wa.me/${waNumber}?text=${encodeURIComponent(textMessage)}`;
  };

  // Submit via Web3Forms API
  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ submitting: true, success: false, error: null });

    let serviceTypeLabel = 'Daily Commute Route';
    if (formData.commuteType === 'tour') {
      serviceTypeLabel = 'All India Tour Package';
    } else if (formData.commuteType === 'charter') {
      serviceTypeLabel = 'Excursion Charter';
    }

    const payload = {
      access_key: import.meta.env.VITE_WEB3FORMS_KEY || "", 
      subject: `New Travel Inquiry from ${formData.name}`,
      from_name: "Divyanshi Travels Portal",
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      service_type: serviceTypeLabel,
      institution_family: formData.institution,
      route_pickup_dest: formData.route,
      fleet_package_selection: formData.destination,
      vehicle_preference: formData.vehiclePreference,
      passenger_count: formData.groupSize,
      timings_dates: formData.timing,
      message: formData.message
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(payload)
      });

      const result = await response.json();
      
      if (response.status === 200 || result.success) {
        setFormStatus({ submitting: false, success: true, error: null });
        setFormData({
          name: '',
          phone: '',
          email: '',
          commuteType: 'daily',
          institution: '',
          route: '',
          destination: '',
          vehiclePreference: '',
          groupSize: '',
          timing: '',
          message: ''
        });
      } else {
        setFormStatus({ submitting: false, success: false, error: result.message || "Submission failed" });
      }
    } catch (err) {
      console.error(err);
      setFormStatus({ submitting: false, success: false, error: "Network error. Please try again." });
    }
  };

  return (
    <section id="inquiry" className="inquiry-section">
      <div className="inquiry-container">
        <div className="inquiry-grid">
          
          {/* Left Column: Direct Contacts */}
          <div className="inquiry-info-box reveal reveal-left">
            <span className="section-subtitle">Get A Quote</span>
            <h2 className="inquiry-info-title">Plan Your Transit</h2>
            <p className="inquiry-info-desc">
              Request a custom route quote or contact our managers directly. feasibility details provided within 2 hours.
            </p>

            <div className="contact-details-list">
              <div className="contact-item">
                <div className="contact-icon">
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="contact-text">
                  <h4>Route Manager</h4>
                  <p>+91 98765 43210</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="contact-text">
                  <h4>Email</h4>
                  <p>plan@divyanshitravels.com</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="contact-text">
                  <h4>Office</h4>
                  <p>102, Shanti Complex, Udaipur, Rajasthan - 313001</p>
                </div>
              </div>
            </div>

            <div className="inquiry-hours">
              <span className="pulse-dot"></span>
              <p>Active Desk: 7:00 AM – 9:00 PM</p>
            </div>
          </div>

          {/* Right Column: Dynamic Form */}
          <div className="inquiry-form-box reveal reveal-right">
            <h3 className="form-box-title">Travel Planner</h3>
            
            {formStatus.success ? (
              <div className="form-success-state animated-fade-in">
                <div className="success-icon">
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h4>Inquiry Submitted!</h4>
                <p>
                  Thank you. Your travel requirements have been logged by our desk. 
                  Our planning team will reach out shortly to discuss rates and feasibility.
                </p>
                <button 
                  onClick={() => setFormStatus({ submitting: false, success: false, error: null })}
                  className="reset-form-btn"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="inquiry-form">
                
                <div className="form-tabs">
                  <button
                    type="button"
                    className={`form-tab-btn ${formData.commuteType === 'daily' ? 'active-tab' : ''}`}
                    onClick={() => setFormData(prev => ({ ...prev, commuteType: 'daily' }))}
                  >
                    Daily Commute
                  </button>
                  <button
                    type="button"
                    className={`form-tab-btn ${formData.commuteType === 'tour' ? 'active-tab' : ''}`}
                    onClick={() => setFormData(prev => ({ ...prev, commuteType: 'tour' }))}
                  >
                    All India Tour
                  </button>
                  <button
                    type="button"
                    className={`form-tab-btn ${formData.commuteType === 'charter' ? 'active-tab' : ''}`}
                    onClick={() => setFormData(prev => ({ ...prev, commuteType: 'charter' }))}
                  >
                    Excursion Charter
                  </button>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Contact Person *</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      required 
                      placeholder="e.g. Principal Sharma / Rajesh Kumar" 
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number *</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone" 
                      required 
                      placeholder="e.g. +91 98765 43210" 
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      required 
                      placeholder="e.g. admin@school.com" 
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="institution">
                      {formData.commuteType === 'tour' 
                        ? 'Family / Group Name *' 
                        : 'School / College / Organization Name *'}
                    </label>
                    <input 
                      type="text" 
                      id="institution" 
                      name="institution" 
                      required
                      placeholder={formData.commuteType === 'tour'
                        ? 'e.g. Sharma Family / Rajesh & Party'
                        : 'e.g. St. Paul\'s School / Apex College'} 
                      value={formData.institution}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="route">
                      {formData.commuteType === 'tour' 
                        ? 'Destination / Places to Visit' 
                        : 'Preferred Route / Pickup Area'}
                    </label>
                    <input 
                      type="text" 
                      id="route" 
                      name="route" 
                      placeholder={formData.commuteType === 'tour'
                        ? 'e.g. Kerala backwaters / Udaipur Sightseeing'
                        : 'e.g. Shastri Nagar to Sector 4'} 
                      value={formData.route}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="destination">
                      {formData.commuteType === 'tour' ? 'Preferred Tour Package' : 'Preferred Fleet / Service'}
                    </label>
                    <select 
                      id="destination" 
                      name="destination"
                      value={formData.destination}
                      onChange={handleChange}
                    >
                      <option value="">-- Select Option --</option>
                      <option value="School Transport (Students & Teachers)">School Transport (Students & Teachers)</option>
                      <option value="University Shuttle (Students & Faculty)">University Shuttle (Students & Faculty)</option>
                      <option value="All India Family & Couple Tours">All India Family & Couple Tours</option>
                      <option value="School & College Excursion Trips">School & College Excursions</option>
                    </select>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="vehiclePreference">Preferred Vehicle (Optional)</label>
                    <select 
                      id="vehiclePreference" 
                      name="vehiclePreference"
                      value={formData.vehiclePreference}
                      onChange={handleChange}
                    >
                      <option value="">-- No preference (Any suitable) --</option>
                      <option value="Maruti Swift Dzire">Maruti Swift Dzire (Sedan)</option>
                      <option value="Honda Amaze">Honda Amaze (Sedan)</option>
                      <option value="Toyota Innova Crysta">Toyota Innova Crysta (Premium SUV)</option>
                      <option value="Mahindra Scorpio">Mahindra Scorpio (Rugged SUV)</option>
                      <option value="MG Hector">MG Hector (Luxury SUV)</option>
                      <option value="Maruti Ertiga">Maruti Ertiga (Affordable MUV)</option>
                      <option value="Maruti Eeco">Maruti Eeco (Budget Commuter)</option>
                      <option value="18 Seater Mini Bus">18 Seater Mini Bus (Bus)</option>
                      <option value="26 Seater Luxury Bus">26 Seater Luxury Bus (Bus)</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="groupSize">
                      {formData.commuteType === 'tour' 
                        ? 'Number of Passengers *' 
                        : 'Approx. Number of Commuters *'}
                    </label>
                    <input 
                      type="number" 
                      id="groupSize" 
                      name="groupSize" 
                      required 
                      min="1" 
                      placeholder={formData.commuteType === 'tour' ? 'e.g. 4 people' : 'e.g. 50 staff/students'} 
                      value={formData.groupSize}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group" style={{ flex: '1 1 100%' }}>
                    <label htmlFor="timing">
                      {formData.commuteType === 'tour' 
                        ? 'Travel Dates / Duration' 
                        : 'Class / Commute Timings'}
                    </label>
                    <input 
                      type="text" 
                      id="timing" 
                      name="timing" 
                      placeholder={formData.commuteType === 'tour'
                        ? 'e.g. Oct 15 - Oct 22 / 5 Days'
                        : 'e.g. 7:30 AM - 2:00 PM'} 
                      value={formData.timing}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">
                    {formData.commuteType === 'tour'
                      ? 'Custom itinerary request or special preferences'
                      : 'Route requirements / Specific safety requests'}
                  </label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows="3" 
                    placeholder={formData.commuteType === 'tour'
                      ? 'Enter any specific sightseeing preferences, hotel standards, food requirements, or special driver instructions.'
                      : 'Enter details like boarding points, specific stop requests, female attendant requirement, RTO check logs, etc.'}
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>

                {formStatus.error && (
                  <div className="form-error-msg">
                    Error: {formStatus.error}. Note: If testing locally, Web3Forms requires a valid access key. 
                    You can still use the "Chat on WhatsApp" button below to inquire instantly.
                  </div>
                )}

                {/* Submit Actions */}
                <div className="form-actions-box">
                  <button 
                    type="submit" 
                    disabled={formStatus.submitting}
                    className="submit-email-btn"
                  >
                    {formStatus.submitting ? 'Submitting Request...' : 'Send Travel Request'}
                  </button>
                  
                  <div className="form-action-divider">
                    <span>or</span>
                  </div>

                  <a 
                    href={generateWhatsAppUrl()} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="submit-whatsapp-btn"
                  >
                    <svg className="wa-icon" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.458L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436.002 9.858-4.42 9.86-9.86.001-2.63-1.019-5.101-2.87-6.956C16.61 1.934 14.136.915 11.5.914 6.062.914 1.64 5.338 1.637 10.78c-.001 1.765.467 3.488 1.355 5.017l-.989 3.612 3.712-.973zm12.115-6.757c-.301-.15-1.78-.879-2.056-.979-.275-.1-.475-.15-.675.15-.2.3-.775.979-.95 1.179-.175.2-.35.225-.65.075-.301-.15-1.267-.467-2.414-1.492-.893-.797-1.496-1.782-1.672-2.082-.175-.3-.019-.462.13-.611.135-.134.301-.35.45-.525.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.675-1.625-.925-2.225-.244-.588-.493-.508-.675-.517-.175-.008-.375-.01-.575-.01-.2 0-.525.075-.8 1.075-.275 1-.95 2.45-.95 2.45s-.1 1.767 1.025 2.892c.625.625 1.2 1.15 1.9 1.6.7.45 1.3.8 2.05.9 1.125.15 2.25.1 3.25-.05.8-.12 1.625-.67 1.825-1.27.2-.6.2-1.12.15-1.22-.05-.1-.2-.15-.5-.3z"/>
                    </svg>
                    Consult on WhatsApp
                  </a>
                </div>

              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
