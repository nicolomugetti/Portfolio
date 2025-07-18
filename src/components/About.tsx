import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Car, Cpu, Zap, Factory } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const About: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const iconsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    });

    // Image animation from left
    tl.from(imageRef.current, {
      x: -100,
      opacity: 0,
      duration: 1,
      ease: "power2.out"
    });

    // Text animation from right
    tl.from(textRef.current, {
      x: 100,
      opacity: 0,
      duration: 1,
      ease: "power2.out"
    }, "-=0.5");

    // Icons stagger animation
    tl.from(iconsRef.current?.children || [], {
      opacity: 0,
      y: 30,
      duration: 0.6,
      stagger: 0.2,
      ease: "power2.out"
    }, "-=0.3");

  }, []);

  const sectors = [
    { icon: <Car size={32} />, name: "Automotive", color: "#47C4E8" },
    { icon: <Cpu size={32} />, name: "Elettronica", color: "#316DA7" },
    { icon: <Zap size={32} />, name: "Elettrotecnica", color: "#47C4E8" },
    { icon: <Factory size={32} />, name: "Industriale", color: "#316DA7" }
  ];

  return (
    <section id="about" ref={sectionRef} className="section">
      <div className="container">
        <div className="grid grid-2" style={{ alignItems: 'center' }}>
          <div ref={imageRef} className="about-image">
            <div 
              style={{
                width: '100%',
                height: '400px',
                background: 'linear-gradient(135deg, rgba(71, 196, 232, 0.1), rgba(49, 109, 167, 0.1))',
                borderRadius: '20px',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.5rem',
                fontWeight: 'bold',
                color: '#316DA7',
                textAlign: 'center'
              }}
            >
              Stabilimento
              <br />
              Produttivo
            </div>
          </div>
          <div ref={textRef} className="about-text">
            <h2>Chi Siamo</h2>
            <p>
              Con oltre 20 anni di esperienza nel settore della microviteria di precisione, 
              siamo specializzati nella produzione di componenti di alta qualità per i settori 
              più esigenti dell'industria moderna.
            </p>
            <p>
              La nostra azienda si distingue per l'innovazione tecnologica, la precisione 
              millimetrica e l'affidabilità dei nostri prodotti. Ogni componente è realizzato 
              seguendo rigorosi standard di qualità e controlli di precisione.
            </p>
            <div ref={iconsRef} className="sectors-icons" style={{ marginTop: '2rem' }}>
              <h3 style={{ marginBottom: '1.5rem' }}>Settori di Applicazione</h3>
              <div className="grid grid-4" style={{ gap: '1rem' }}>
                {sectors.map((sector, index) => (
                  <div 
                    key={index}
                    className="sector-icon"
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      padding: '1rem',
                      background: 'rgba(255, 255, 255, 0.9)',
                      borderRadius: '12px',
                      border: `2px solid ${sector.color}`,
                      transition: 'all 0.3s ease'
                    }}
                  >
                    <div style={{ color: sector.color, marginBottom: '0.5rem' }}>
                      {sector.icon}
                    </div>
                    <span style={{ fontSize: '0.9rem', fontWeight: '500', color: '#2C3E50' }}>
                      {sector.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;