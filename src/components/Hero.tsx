import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ArrowRight, Cog } from 'lucide-react';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const floatingElementsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 4.5 }); // After preloader

    // Title animation with blur effect
    tl.from(titleRef.current, {
      opacity: 0,
      y: 60,
      filter: "blur(15px)",
      duration: 1.2,
      ease: "power2.out"
    });

    // Subtitle animation
    tl.from(subtitleRef.current, {
      opacity: 0,
      y: 40,
      duration: 1,
      ease: "power2.out"
    }, "-=0.8");

    // CTA buttons animation
    tl.from(ctaRef.current?.children || [], {
      opacity: 0,
      y: 30,
      duration: 0.8,
      stagger: 0.2,
      ease: "power2.out"
    }, "-=0.5");

    // Floating elements animation
    floatingElementsRef.current.forEach((element, index) => {
      if (element) {
        gsap.to(element, {
          y: -15,
          duration: 4 + index * 0.5,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
          delay: index * 0.3
        });
      }
    });

  }, []);

  const addToFloatingRefs = (el: HTMLDivElement) => {
    if (el && !floatingElementsRef.current.includes(el)) {
      floatingElementsRef.current.push(el);
    }
  };

  return (
    <section id="home" ref={heroRef} className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-grid">
            <div className="hero-text">
              <h1 ref={titleRef}>
                Precisione in ogni dettaglio
              </h1>
              <p ref={subtitleRef}>
                Microviteria di qualità per elettronica, automotive, elettrotecnica e industria. 
                Soluzioni innovative per le tue esigenze di precisione.
              </p>
              <div ref={ctaRef} className="hero-cta">
                <button className="btn btn-primary glow">
                  Scopri i nostri prodotti
                  <ArrowRight size={20} />
                </button>
                <button className="btn btn-outline">
                  Contattaci
                </button>
              </div>
            </div>
            <div className="hero-visual">
              <div className="floating-elements">
                <div 
                  ref={addToFloatingRefs}
                  className="floating-element"
                  style={{
                    position: 'absolute',
                    top: '20%',
                    left: '10%',
                    width: '60px',
                    height: '60px',
                    background: 'linear-gradient(135deg, #47C4E8, #316DA7)',
                    borderRadius: '50%',
                    opacity: 0.7,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <Cog size={30} color="white" />
                </div>
                <div 
                  ref={addToFloatingRefs}
                  className="floating-element"
                  style={{
                    position: 'absolute',
                    top: '60%',
                    right: '20%',
                    width: '40px',
                    height: '40px',
                    background: 'linear-gradient(135deg, #316DA7, #47C4E8)',
                    borderRadius: '8px',
                    opacity: 0.6,
                    transform: 'rotate(45deg)'
                  }}
                />
                <div 
                  ref={addToFloatingRefs}
                  className="floating-element"
                  style={{
                    position: 'absolute',
                    top: '40%',
                    right: '10%',
                    width: '20px',
                    height: '20px',
                    background: '#47C4E8',
                    borderRadius: '50%',
                    opacity: 0.5
                  }}
                />
                <div 
                  ref={addToFloatingRefs}
                  className="floating-element"
                  style={{
                    position: 'absolute',
                    bottom: '30%',
                    left: '30%',
                    width: '30px',
                    height: '30px',
                    background: '#316DA7',
                    borderRadius: '4px',
                    opacity: 0.4,
                    transform: 'rotate(15deg)'
                  }}
                />
              </div>
              <div 
                style={{
                  position: 'relative',
                  width: '100%',
                  height: '400px',
                  background: 'linear-gradient(135deg, rgba(71, 196, 232, 0.1), rgba(49, 109, 167, 0.1))',
                  borderRadius: '20px',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '2rem',
                  fontWeight: 'bold',
                  color: '#316DA7',
                  textAlign: 'center'
                }}
              >
                Microviteria
                <br />
                di Precisione
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;