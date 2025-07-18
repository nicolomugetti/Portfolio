import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Award, Shield, Target, Users, CheckCircle, Star } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Quality: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const certificationsRef = useRef<HTMLDivElement>(null);

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

    // Stats animation with counters
    const statItems = statsRef.current?.querySelectorAll('.stat-item');
    if (statItems) {
      tl.from(statItems, {
        opacity: 0,
        y: 60,
        scale: 0.8,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        onComplete: () => {
          // Animate counters
          statItems.forEach((item) => {
            const counter = item.querySelector('.counter');
            const target = parseInt(counter?.getAttribute('data-target') || '0');
            const obj = { value: 0 };
            
            gsap.to(obj, {
              value: target,
              duration: 2,
              ease: "power2.out",
              onUpdate: () => {
                if (counter) {
                  counter.textContent = Math.round(obj.value).toString();
                }
              }
            });
          });
        }
      }, "-=0.5");
    }

    // Certifications animation
    const certItems = certificationsRef.current?.querySelectorAll('.cert-item');
    if (certItems) {
      tl.from(certItems, {
        opacity: 0,
        y: 40,
        duration: 0.6,
        stagger: 0.15,
        ease: "power2.out"
      }, "-=1");
    }

  }, []);

  const stats = [
    {
      icon: <Award size={40} />,
      value: 20,
      suffix: "+",
      label: "Anni di Esperienza",
      color: "#47C4E8"
    },
    {
      icon: <Users size={40} />,
      value: 500,
      suffix: "+",
      label: "Clienti Soddisfatti",
      color: "#316DA7"
    },
    {
      icon: <Target size={40} />,
      value: 99,
      suffix: "%",
      label: "Precisione Garantita",
      color: "#47C4E8"
    },
    {
      icon: <Shield size={40} />,
      value: 100,
      suffix: "%",
      label: "Controllo Qualità",
      color: "#316DA7"
    }
  ];

  const certifications = [
    {
      name: "ISO 9001:2015",
      description: "Sistema di Gestione Qualità",
      icon: <CheckCircle size={24} />
    },
    {
      name: "ISO 14001",
      description: "Gestione Ambientale",
      icon: <CheckCircle size={24} />
    },
    {
      name: "IATF 16949",
      description: "Automotive Quality",
      icon: <CheckCircle size={24} />
    },
    {
      name: "RoHS Compliant",
      description: "Conformità Ambientale",
      icon: <CheckCircle size={24} />
    }
  ];

  return (
    <section id="quality" ref={sectionRef} className="section" style={{ background: '#F8F9FA' }}>
      <div className="container">
        <div className="text-center mb-4">
          <h2 ref={titleRef}>Qualità e Certificazioni</h2>
          <p style={{ fontSize: '1.2rem', color: 'rgba(44, 62, 80, 0.8)', maxWidth: '600px', margin: '0 auto' }}>
            Standard di eccellenza e certificazioni internazionali per garantire la massima qualità
          </p>
        </div>

        {/* Statistics */}
        <div ref={statsRef} className="grid grid-4 mb-4" style={{ gap: '2rem' }}>
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="stat-item"
              style={{
                background: 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(10px)',
                borderRadius: '20px',
                padding: '2rem',
                textAlign: 'center',
                border: `2px solid ${stat.color}20`,
                boxShadow: '0 15px 35px rgba(0, 0, 0, 0.1)',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                gsap.to(e.currentTarget, {
                  y: -10,
                  scale: 1.05,
                  duration: 0.3,
                  ease: "power2.out"
                });
              }}
              onMouseLeave={(e) => {
                gsap.to(e.currentTarget, {
                  y: 0,
                  scale: 1,
                  duration: 0.3,
                  ease: "power2.out"
                });
              }}
            >
              <div style={{ color: stat.color, marginBottom: '1rem', display: 'flex', justifyContent: 'center' }}>
                {stat.icon}
              </div>
              <div style={{ fontSize: '3rem', fontWeight: 'bold', color: '#2C3E50', marginBottom: '0.5rem' }}>
                <span className="counter" data-target={stat.value}>0</span>
                <span>{stat.suffix}</span>
              </div>
              <p style={{ margin: 0, color: 'rgba(44, 62, 80, 0.8)', fontWeight: '500' }}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div style={{ marginTop: '4rem' }}>
          <h3 style={{ textAlign: 'center', marginBottom: '2rem', color: '#2C3E50' }}>
            Le Nostre Certificazioni
          </h3>
          <div ref={certificationsRef} className="grid grid-4" style={{ gap: '1.5rem' }}>
            {certifications.map((cert, index) => (
              <div 
                key={index}
                className="cert-item"
                style={{
                  background: 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '15px',
                  padding: '1.5rem',
                  textAlign: 'center',
                  border: '2px solid #47C4E820',
                  boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
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
                <div style={{ color: '#47C4E8', marginBottom: '1rem', display: 'flex', justifyContent: 'center' }}>
                  {cert.icon}
                </div>
                <h4 style={{ margin: '0 0 0.5rem 0', color: '#2C3E50', fontSize: '1.1rem' }}>
                  {cert.name}
                </h4>
                <p style={{ margin: 0, color: 'rgba(44, 62, 80, 0.7)', fontSize: '0.9rem' }}>
                  {cert.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Quality Process */}
        <div style={{ marginTop: '4rem', textAlign: 'center' }}>
          <div 
            style={{
              background: 'linear-gradient(135deg, rgba(71, 196, 232, 0.1), rgba(49, 109, 167, 0.1))',
              borderRadius: '20px',
              padding: '3rem',
              border: '1px solid rgba(71, 196, 232, 0.2)'
            }}
          >
            <Star size={48} style={{ color: '#47C4E8', marginBottom: '1rem' }} />
            <h3 style={{ marginBottom: '1rem', color: '#2C3E50' }}>
              Il Nostro Impegno per la Qualità
            </h3>
            <p style={{ fontSize: '1.1rem', color: 'rgba(44, 62, 80, 0.8)', maxWidth: '800px', margin: '0 auto' }}>
              Ogni prodotto passa attraverso rigorosi controlli di qualità utilizzando tecnologie all'avanguardia. 
              La nostra filosofia è semplice: zero compromessi sulla precisione e sull'affidabilità.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quality;