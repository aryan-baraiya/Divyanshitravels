/* eslint-disable no-unused-vars */
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

    const waNumber = import.meta.env.VITE_WHATSAPP_NUMBER || '919424799608';
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
            <h2 className="inquiry-info-title">Contact Us</h2>

            <div className="contact-details-list">
              <div className="contact-item">
                <div className="contact-icon">
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="contact-text">
                  <h4>Route Manager (Calls Only)</h4>
                  <p>+91 98269 44051</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path fillRule="evenodd" clipRule="evenodd" d="M18.403 5.633A8.919 8.919 0 0 0 12.053 3c-4.948 0-8.976 4.027-8.978 8.977 0 1.58.413 3.126 1.198 4.488L3 21.116l4.759-1.249a8.95 8.95 0 0 0 4.29 1.093h.004c4.947 0 8.975-4.027 8.977-8.977a8.926 8.926 0 0 0-2.627-6.35m-6.35 11.82a7.436 7.436 0 0 1-3.791-1.043l-.272-.162-2.82.74.753-2.75-.177-.282a7.428 7.428 0 0 1-1.137-3.98c.002-4.114 3.348-7.461 7.467-7.461a7.435 7.435 0 0 1 5.275 2.188 7.43 7.43 0 0 1 2.185 5.277c-.002 4.115-3.348 7.462-7.46 7.462m4.095-5.594c-.225-.113-1.327-.655-1.533-.73-.205-.075-.354-.112-.504.112-.15.224-.58.73-.711.879-.13.149-.26.168-.485.056-.225-.113-.95-.35-1.81-1.117-.67-.597-1.121-1.335-1.253-1.56-.13-.225-.014-.347.099-.46.101-.101.225-.262.338-.393.112-.13.15-.224.224-.374.075-.15.038-.281-.018-.393-.057-.113-.505-1.217-.692-1.666-.181-.437-.366-.377-.504-.384a9.68 9.68 0 0 0-.429-.008c-.15 0-.393.056-.599.28-.206.225-.786.768-.786 1.87 0 1.104.804 2.17.917 2.32.113.15 1.582 2.415 3.833 3.387.536.231.954.369 1.28.473.537.171 1.026.147 1.412.09.43-.064 1.327-.542 1.514-1.037.187-.495.187-.918.13-1.006-.056-.088-.205-.13-.43-.243" fill="currentColor"/>
                  </svg>
                </div>
                <div className="contact-text">
                  <h4>WhatsApp & Calls</h4>
                  <p>+91 94247 99608</p>
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
          </div>

          {/* Right Column: Dynamic Form */}
          <div className="inquiry-form-box reveal reveal-right">
            <div className="inquiry-form-top">
              <h3 className="form-box-title">Contact to the guide</h3>
              {/* <p className="inquiry-info-desc">
                Connect with our travel experts directly on WhatsApp for instant route booking, fleet availability, and customized group rates.
              </p> */}
            </div>

            <a
              href={generateWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-image-link"
            >
              <img
                src="/whatsapp_logo.png"
                alt="WhatsApp Contact"
                className="whatsapp-bg-image"
              />
              <div className="whatsapp-overlay">
                <span className="whatsapp-overlay-text">Consult on WhatsApp</span>
              </div>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
