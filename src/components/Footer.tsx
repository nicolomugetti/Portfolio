import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, Phone, MapPin, Facebook, Linkedin, Twitter, ArrowUp } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Footer: React.FC = () => {
  const footerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: footerRef.current,
        start: "top 90%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    });

    // Footer content animation
    tl.from(contentRef.current, {
      opacity: 0,
      y: 40,
      duration: 1,
      ease: "power2.out"
    });

    // Animate footer sections
    const sections = contentRef.current?.querySelectorAll('.footer-section');
    if (sections) {
      tl.from(sections, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out"
      }, "-=0.5");
    }

  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer ref={footerRef} style={{
      background: 'linear-gradient(135deg, #2C3E50 0%, #34495E 100%)',
      color: 'white',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background pattern */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'url("data:image/svg+xml,<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 100 100\'><defs><pattern id=\'footerPattern\' width=\'20\' height=\'20\' patternUnits=\'userSpaceOnUse\'><circle cx=\'10\' cy=\'10\' r=\'1\' fill=\'%2347C4E8\' opacity=\'0.1\'/></pattern></defs><rect width=\'100\' height=\'100\' fill=\'url(%23footerPattern)\'/></svg>")',
        zIndex: 1
      }} />

      <div ref={contentRef} style={{ position: 'relative', zIndex: 2 }}>
        <div className="container" style={{ padding: '4rem 2rem 2rem' }}>
          <div className="grid grid-4" style={{ gap: '3rem' }}>
            {/* Company Info */}
            <div className="footer-section">
              <h3 style={{ 
                fontSize: '1.5rem', 
                marginBottom: '1.5rem',
                background: 'linear-gradient(135deg, #47C4E8, #316DA7)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                MicroViteria
              </h3>
              <p style={{ 
                marginBottom: '1.5rem', 
                lineHeight: '1.6',
                color: 'rgba(255, 255, 255, 0.8)'
              }}>
                Precisione in ogni dettaglio. Soluzioni innovative di microviteria 
                per elettronica, automotive e industria.
              </p>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <a href="#" style={{ 
                  color: '#47C4E8', 
                  transition: 'all 0.3s ease',
                  padding: '0.5rem',
                  borderRadius: '50%',
                  background: 'rgba(71, 196, 232, 0.1)'
                }}>
                  <Facebook size={20} />
                </a>
                <a href="#" style={{ 
                  color: '#47C4E8', 
                  transition: 'all 0.3s ease',
                  padding: '0.5rem',
                  borderRadius: '50%',
                  background: 'rgba(71, 196, 232, 0.1)'
                }}>
                  <Linkedin size={20} />
                </a>
                <a href="#" style={{ 
                  color: '#47C4E8', 
                  transition: 'all 0.3s ease',
                  padding: '0.5rem',
                  borderRadius: '50%',
                  background: 'rgba(71, 196, 232, 0.1)'
                }}>
                  <Twitter size={20} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-section">
              <h4 style={{ 
                marginBottom: '1.5rem',
                color: '#47C4E8',
                fontSize: '1.1rem'
              }}>
                Link Rapidi
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {['Home', 'Chi Siamo', 'Prodotti', 'Settori', 'Qualità', 'Contatti'].map((link, index) => (
                  <li key={index} style={{ marginBottom: '0.8rem' }}>
                    <a 
                      href={`#${link.toLowerCase().replace(' ', '')}`}
                      style={{ 
                        color: 'rgba(255, 255, 255, 0.8)',
                        textDecoration: 'none',
                        transition: 'all 0.3s ease',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.color = '#47C4E8';
                        e.target.style.paddingLeft = '0.5rem';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.color = 'rgba(255, 255, 255, 0.8)';
                        e.target.style.paddingLeft = '0';
                      }}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="footer-section">
              <h4 style={{ 
                marginBottom: '1.5rem',
                color: '#47C4E8',
                fontSize: '1.1rem'
              }}>
                Servizi
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {[
                  'Microviteria Elettronica',
                  'Componenti Automotive',
                  'Viteria Industriale',
                  'Prodotti Personalizzati',
                  'Consulenza Tecnica',
                  'Controllo Qualità'
                ].map((service, index) => (
                  <li key={index} style={{ marginBottom: '0.8rem' }}>
                    <span style={{ 
                      color: 'rgba(255, 255, 255, 0.8)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem'
                    }}>
                      <div style={{
                        width: '4px',
                        height: '4px',
                        background: '#47C4E8',
                        borderRadius: '50%'
                      }} />
                      {service}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="footer-section">
              <h4 style={{ 
                marginBottom: '1.5rem',
                color: '#47C4E8',
                fontSize: '1.1rem'
              }}>
                Contatti
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                  <MapPin size={18} style={{ color: '#47C4E8' }} />
                  <div>
                    <p style={{ margin: 0, color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.9rem' }}>
                      Via dell'Industria 123
                    </p>
                    <p style={{ margin: 0, color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.9rem' }}>
                      20100 Milano, Italia
                    </p>
                  </div>
                </div>
                
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                  <Phone size={18} style={{ color: '#47C4E8' }} />
                  <div>
                    <p style={{ margin: 0, color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.9rem' }}>
                      +39 02 1234567
                    </p>
                    <p style={{ margin: 0, color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.9rem' }}>
                      +39 02 1234568
                    </p>
                  </div>
                </div>
                
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                  <Mail size={18} style={{ color: '#47C4E8' }} />
                  <div>
                    <p style={{ margin: 0, color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.9rem' }}>
                      info@microviteria.it
                    </p>
                    <p style={{ margin: 0, color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.9rem' }}>
                      vendite@microviteria.it
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            marginTop: '3rem',
            paddingTop: '2rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem'
          }}>
            <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
              <p style={{ margin: 0, color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.9rem' }}>
                © 2024 MicroViteria. Tutti i diritti riservati.
              </p>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <a href="#" style={{ color: 'rgba(255, 255, 255, 0.6)', textDecoration: 'none', fontSize: '0.9rem' }}>
                  Privacy Policy
                </a>
                <a href="#" style={{ color: 'rgba(255, 255, 255, 0.6)', textDecoration: 'none', fontSize: '0.9rem' }}>
                  Termini di Servizio
                </a>
                <a href="#" style={{ color: 'rgba(255, 255, 255, 0.6)', textDecoration: 'none', fontSize: '0.9rem' }}>
                  Cookie Policy
                </a>
              </div>
            </div>
            
            <button
              onClick={scrollToTop}
              style={{
                background: 'linear-gradient(135deg, #47C4E8, #316DA7)',
                border: 'none',
                borderRadius: '50%',
                width: '50px',
                height: '50px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: '0 5px 15px rgba(71, 196, 232, 0.3)'
              }}
              onMouseEnter={(e) => {
                gsap.to(e.currentTarget, {
                  scale: 1.1,
                  y: -5,
                  duration: 0.3,
                  ease: "power2.out"
                });
              }}
              onMouseLeave={(e) => {
                gsap.to(e.currentTarget, {
                  scale: 1,
                  y: 0,
                  duration: 0.3,
                  ease: "power2.out"
                });
              }}
            >
              <ArrowUp size={24} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;