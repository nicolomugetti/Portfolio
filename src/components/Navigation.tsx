import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Navigation: React.FC = () => {
  const navRef = useRef<HTMLNavElement>(null);

  useEffect(() => {
    // Navigation entrance animation
    gsap.from(navRef.current, {
      y: -100,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      delay: 4 // After preloader
    });

    // Hide/show navigation on scroll
    ScrollTrigger.create({
      start: "top -100",
      end: 99999,
      onUpdate: (self) => {
        if (self.direction === -1) {
          gsap.to(navRef.current, { y: 0, duration: 0.3 });
        } else {
          gsap.to(navRef.current, { y: -100, duration: 0.3 });
        }
      }
    });

  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav ref={navRef} className="navbar">
      <div className="container">
        <div className="nav-content">
          <div className="logo">MicroViteria</div>
          <ul className="nav-links">
            <li><a href="#home" onClick={() => scrollToSection('home')}>Home</a></li>
            <li><a href="#about" onClick={() => scrollToSection('about')}>Chi Siamo</a></li>
            <li><a href="#products" onClick={() => scrollToSection('products')}>Prodotti</a></li>
            <li><a href="#sectors" onClick={() => scrollToSection('sectors')}>Settori</a></li>
            <li><a href="#quality" onClick={() => scrollToSection('quality')}>Qualità</a></li>
            <li><a href="#contact" onClick={() => scrollToSection('contact')}>Contatti</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;