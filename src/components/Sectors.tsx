import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Car, Cpu, Zap, Factory, Heart, Shield } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Sectors: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

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

    // Timeline line animation
    tl.from(lineRef.current, {
      width: 0,
      duration: 1.5,
      ease: "power2.out"
    }, "-=0.5");

    // Sectors progressive reveal
    const sectors = timelineRef.current?.querySelectorAll('.sector-item');
    if (sectors) {
      tl.from(sectors, {
        opacity: 0,
        y: 50,
        scale: 0.8,
        duration: 0.6,
        stagger: 0.2,
        ease: "power2.out"
      }, "-=1");
    }

  }, []);

  const sectors = [
    {
      icon: <Cpu size={40} />,
      title: "Elettronica",
      description: "Microviti per PCB, connettori e dispositivi miniaturizzati",
      applications: ["Smartphone", "Computer", "Dispositivi IoT"],
      color: "#47C4E8"
    },
    {
      icon: <Car size={40} />,
      title: "Automotive",
      description: "Componenti per veicoli elettrici e tradizionali",
      applications: ["Motori", "Sistemi di controllo", "Sensori"],
      color: "#316DA7"
    },
    {
      icon: <Zap size={40} />,
      title: "Elettrotecnica",
      description: "Soluzioni per impianti elettrici e quadri di controllo",
      applications: ["Quadri elettrici", "Interruttori", "Relè"],
      color: "#47C4E8"
    },
    {
      icon: <Factory size={40} />,
      title: "Industriale",
      description: "Viteria per macchinari e impianti industriali",
      applications: ["Macchinari", "Automazione", "Robotica"],
      color: "#316DA7"
    },
    {
      icon: <Heart size={40} />,
      title: "Medicale",
      description: "Componenti biocompatibili per dispositivi medici",
      applications: ["Strumenti chirurgici", "Protesi", "Dispositivi diagnostici"],
      color: "#47C4E8"
    },
    {
      icon: <Shield size={40} />,
      title: "Aerospaziale",
      description: "Viteria ultra-precisione per applicazioni critiche",
      applications: ["Avionica", "Satelliti", "Sistemi di controllo"],
      color: "#316DA7"
    }
  ];

  return (
    <section id="sectors" ref={sectionRef} className="section">
      <div className="container">
        <div className="text-center mb-4">
          <h2 ref={titleRef}>Settori di Applicazione</h2>
          <p style={{ fontSize: '1.2rem', color: 'rgba(44, 62, 80, 0.8)', maxWidth: '600px', margin: '0 auto' }}>
            Le nostre soluzioni di microviteria servono i settori più esigenti dell'industria moderna
          </p>
        </div>

        <div ref={timelineRef} className="sectors-timeline" style={{ position: 'relative', marginTop: '4rem' }}>
          {/* Timeline line */}
          <div 
            ref={lineRef}
            style={{
              position: 'absolute',
              top: '50%',
              left: '0',
              height: '4px',
              background: 'linear-gradient(90deg, #47C4E8, #316DA7)',
              borderRadius: '2px',
              transform: 'translateY(-50%)',
              zIndex: 1
            }}
          />

          {/* Sectors grid */}
          <div className="grid grid-3" style={{ gap: '2rem', position: 'relative', zIndex: 2 }}>
            {sectors.map((sector, index) => (
              <div 
                key={index}
                className="sector-item"
                style={{
                  background: 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '20px',
                  padding: '2rem',
                  border: `2px solid ${sector.color}20`,
                  boxShadow: '0 15px 35px rgba(0, 0, 0, 0.1)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  position: 'relative',
                  overflow: 'hidden'
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
                {/* Background decoration */}
                <div 
                  style={{
                    position: 'absolute',
                    top: '-20px',
                    right: '-20px',
                    width: '80px',
                    height: '80px',
                    background: `${sector.color}10`,
                    borderRadius: '50%',
                    zIndex: 1
                  }}
                />

                <div style={{ position: 'relative', zIndex: 2 }}>
                  {/* Icon and title */}
                  <div 
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1rem',
                      marginBottom: '1rem',
                      color: sector.color
                    }}
                  >
                    {sector.icon}
                    <h3 style={{ margin: 0, color: '#2C3E50' }}>{sector.title}</h3>
                  </div>

                  {/* Description */}
                  <p style={{ marginBottom: '1.5rem', lineHeight: '1.6', color: 'rgba(44, 62, 80, 0.8)' }}>
                    {sector.description}
                  </p>

                  {/* Applications */}
                  <div>
                    <h4 style={{ fontSize: '0.9rem', marginBottom: '0.5rem', color: '#2C3E50' }}>
                      Applicazioni:
                    </h4>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                      {sector.applications.map((app, idx) => (
                        <li 
                          key={idx}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            marginBottom: '0.3rem',
                            fontSize: '0.9rem',
                            color: 'rgba(44, 62, 80, 0.7)'
                          }}
                        >
                          <div 
                            style={{
                              width: '4px',
                              height: '4px',
                              background: sector.color,
                              borderRadius: '50%'
                            }}
                          />
                          {app}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sectors;