import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, Phone, MapPin, Send, Clock, Building } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Contact: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    requestType: '',
    message: ''
  });

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    });

    // Title animation
    tl.from(titleRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power2.out"
    });

    // Form animation from left
    tl.from(formRef.current, {
      x: -100,
      opacity: 0,
      duration: 1,
      ease: "power2.out"
    }, "-=0.5");

    // Info animation from right
    tl.from(infoRef.current, {
      x: 100,
      opacity: 0,
      duration: 1,
      ease: "power2.out"
    }, "-=0.8");

    // Form inputs animation
    const inputs = formRef.current?.querySelectorAll('input, select, textarea');
    if (inputs) {
      tl.from(inputs, {
        opacity: 0,
        y: 30,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out"
      }, "-=0.5");
    }

  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Animate submit button
    const submitBtn = e.currentTarget.querySelector('.submit-btn');
    if (submitBtn) {
      gsap.to(submitBtn, {
        scale: 0.95,
        duration: 0.1,
        yoyo: true,
        repeat: 1,
        ease: "power2.out"
      });
    }

    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      company: '',
      requestType: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: <MapPin size={24} />,
      title: "Indirizzo",
      details: ["Via dell'Industria 123", "20100 Milano, Italia"],
      color: "#47C4E8"
    },
    {
      icon: <Phone size={24} />,
      title: "Telefono",
      details: ["+39 02 1234567", "+39 02 1234568"],
      color: "#316DA7"
    },
    {
      icon: <Mail size={24} />,
      title: "Email",
      details: ["info@microviteria.it", "vendite@microviteria.it"],
      color: "#47C4E8"
    },
    {
      icon: <Clock size={24} />,
      title: "Orari",
      details: ["Lun-Ven: 8:00-18:00", "Sab: 8:00-12:00"],
      color: "#316DA7"
    }
  ];

  const inputStyle = {
    width: '100%',
    padding: '12px 16px',
    border: '2px solid #E9ECEF',
    borderRadius: '8px',
    fontSize: '1rem',
    transition: 'all 0.3s ease',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    backdropFilter: 'blur(10px)'
  };

  return (
    <section id="contact" ref={sectionRef} className="section">
      <div className="container">
        <div className="text-center mb-4">
          <h2 ref={titleRef}>Contattaci</h2>
          <p style={{ fontSize: '1.2rem', color: 'rgba(44, 62, 80, 0.8)', maxWidth: '600px', margin: '0 auto' }}>
            Siamo qui per rispondere alle tue domande e discutere le tue esigenze di microviteria
          </p>
        </div>

        <div className="grid grid-2" style={{ gap: '4rem', alignItems: 'flex-start' }}>
          {/* Contact Form */}
          <div>
            <form ref={formRef} onSubmit={handleSubmit} style={{ 
              background: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(10px)',
              borderRadius: '20px',
              padding: '2.5rem',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
              border: '1px solid rgba(255, 255, 255, 0.2)'
            }}>
              <h3 style={{ marginBottom: '2rem', color: '#2C3E50' }}>Richiedi Informazioni</h3>
              
              <div style={{ display: 'grid', gap: '1.5rem' }}>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: '#2C3E50' }}>
                    Nome *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    style={inputStyle}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#47C4E8';
                      e.target.style.boxShadow = '0 0 0 3px rgba(71, 196, 232, 0.1)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = '#E9ECEF';
                      e.target.style.boxShadow = 'none';
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: '#2C3E50' }}>
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    style={inputStyle}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#47C4E8';
                      e.target.style.boxShadow = '0 0 0 3px rgba(71, 196, 232, 0.1)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = '#E9ECEF';
                      e.target.style.boxShadow = 'none';
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: '#2C3E50' }}>
                    Azienda
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    style={inputStyle}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#47C4E8';
                      e.target.style.boxShadow = '0 0 0 3px rgba(71, 196, 232, 0.1)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = '#E9ECEF';
                      e.target.style.boxShadow = 'none';
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: '#2C3E50' }}>
                    Tipo di Richiesta
                  </label>
                  <select
                    name="requestType"
                    value={formData.requestType}
                    onChange={handleInputChange}
                    style={inputStyle}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#47C4E8';
                      e.target.style.boxShadow = '0 0 0 3px rgba(71, 196, 232, 0.1)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = '#E9ECEF';
                      e.target.style.boxShadow = 'none';
                    }}
                  >
                    <option value="">Seleziona...</option>
                    <option value="preventivo">Richiesta Preventivo</option>
                    <option value="informazioni">Informazioni Prodotti</option>
                    <option value="personalizzato">Prodotto Personalizzato</option>
                    <option value="supporto">Supporto Tecnico</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: '#2C3E50' }}>
                    Messaggio *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    style={inputStyle}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#47C4E8';
                      e.target.style.boxShadow = '0 0 0 3px rgba(71, 196, 232, 0.1)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = '#E9ECEF';
                      e.target.style.boxShadow = 'none';
                    }}
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary submit-btn"
                  style={{ width: '100%', justifyContent: 'center', marginTop: '1rem' }}
                >
                  Invia Messaggio
                  <Send size={20} />
                </button>
              </div>
            </form>
          </div>

          {/* Contact Information */}
          <div ref={infoRef}>
            <div className="grid" style={{ gap: '2rem' }}>
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  style={{
                    background: 'rgba(255, 255, 255, 0.95)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: '15px',
                    padding: '2rem',
                    border: `2px solid ${info.color}20`,
                    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    gsap.to(e.currentTarget, {
                      y: -5,
                      duration: 0.3,
                      ease: "power2.out"
                    });
                  }}
                  onMouseLeave={(e) => {
                    gsap.to(e.currentTarget, {
                      y: 0,
                      duration: 0.3,
                      ease: "power2.out"
                    });
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                    <div style={{ color: info.color }}>
                      {info.icon}
                    </div>
                    <h4 style={{ margin: 0, color: '#2C3E50' }}>{info.title}</h4>
                  </div>
                  {info.details.map((detail, idx) => (
                    <p key={idx} style={{ margin: '0.5rem 0', color: 'rgba(44, 62, 80, 0.8)' }}>
                      {detail}
                    </p>
                  ))}
                </div>
              ))}
            </div>

            {/* Map placeholder */}
            <div style={{ marginTop: '2rem' }}>
              <div
                style={{
                  background: 'linear-gradient(135deg, rgba(71, 196, 232, 0.1), rgba(49, 109, 167, 0.1))',
                  borderRadius: '15px',
                  padding: '3rem',
                  textAlign: 'center',
                  border: '1px solid rgba(71, 196, 232, 0.2)'
                }}
              >
                <Building size={48} style={{ color: '#47C4E8', marginBottom: '1rem' }} />
                <h4 style={{ marginBottom: '1rem', color: '#2C3E50' }}>La Nostra Sede</h4>
                <p style={{ color: 'rgba(44, 62, 80, 0.8)' }}>
                  Situata nel cuore del distretto industriale milanese, 
                  la nostra sede è facilmente raggiungibile e dotata di 
                  moderne strutture produttive.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;