import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface PreloaderProps {
  onComplete: () => void;
}

const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const preloaderRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Logo animation
    tl.from(logoRef.current, {
      opacity: 0,
      scale: 0.8,
      duration: 0.8,
      ease: "power2.out"
    });

    // Progress bar animation
    tl.to(progressBarRef.current, {
      width: "100%",
      duration: 2.5,
      ease: "power2.out",
      onComplete: () => {
        // Preloader exit animation
        gsap.to(preloaderRef.current, {
          opacity: 0,
          scale: 0.95,
          duration: 1.2,
          ease: "power2.inOut",
          onComplete: () => {
            onComplete();
          }
        });
      }
    }, "-=0.2");

    // Floating animation for logo
    gsap.to(logoRef.current, {
      y: -15,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut"
    });

  }, [onComplete]);

  return (
    <div ref={preloaderRef} className="preloader">
      <div ref={logoRef} className="preloader-logo">
        MicroViteria
      </div>
      <div className="progress-container">
        <div ref={progressBarRef} className="progress-bar"></div>
      </div>
      <p style={{ color: 'white', marginTop: '1rem', opacity: 0.8 }}>
        Precisione in ogni dettaglio
      </p>
    </div>
  );
};

export default Preloader;