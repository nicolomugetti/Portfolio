import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Cpu, Car, Zap, Settings, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Products: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

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

    // Cards stagger animation
    tl.from(cardsRef.current?.children || [], {
      opacity: 0,
      y: 60,
      scale: 0.9,
      duration: 0.8,
      stagger: 0.2,
      ease: "power2.out"
    }, "-=0.5");

    // Add hover animations to cards
    const cards = cardsRef.current?.children;
    if (cards) {
      Array.from(cards).forEach((card) => {
        const cardElement = card as HTMLElement;
        
        cardElement.addEventListener('mouseenter', () => {
          gsap.to(cardElement, {
            y: -10,
            scale: 1.05,
            duration: 0.3,
            ease: "power2.out"
          });
        });

        cardElement.addEventListener('mouseleave', () => {
          gsap.to(cardElement, {
            y: 0,
            scale: 1,
            duration: 0.3,
            ease: "power2.out"
          });
        });
      });
    }

  }, []);

  const products = [
    {
      icon: <Cpu size={48} />,
      title: "Viti per Elettronica",
      description: "Microviti di precisione per componenti elettronici, PCB e dispositivi miniaturizzati. Materiali specializzati per resistenza e conducibilità.",
      features: ["Dimensioni micro", "Materiali conduttivi", "Resistenza alla corrosione"],
      color: "#47C4E8"
    },
    {
      icon: <Car size={48} />,
      title: "Componenti Automotive",
      description: "Viteria specializzata per l'industria automobilistica. Resistenza estrema e certificazioni per applicazioni critiche.",
      features: ["Certificazioni automotive", "Resistenza estrema", "Trattamenti superficiali"],
      color: "#316DA7"
    },
    {
      icon: <Zap size={48} />,
      title: "Microviteria Industriale",
      description: "Soluzioni per macchinari industriali e impianti. Precisione millimetrica per applicazioni professionali.",
      features: ["Precisione millimetrica", "Materiali premium", "Controlli di qualità"],
      color: "#47C4E8"
    },
    {
      icon: <Settings size={48} />,
      title: "Prodotti Personalizzati",
      description: "Sviluppiamo soluzioni su misura per le vostre esigenze specifiche. Prototipazione rapida e produzione di serie.",
      features: ["Progettazione su misura", "Prototipazione rapida", "Produzione di serie"],
      color: "#316DA7"
    }
  ];

  return (
    <section id="products" ref={sectionRef} className="section" style={{ background: '#F8F9FA' }}>
      <div className="container">
        <div className="text-center mb-4">
          <h2 ref={titleRef}>I Nostri Prodotti</h2>
          <p style={{ fontSize: '1.2rem', color: 'rgba(44, 62, 80, 0.8)', maxWidth: '600px', margin: '0 auto' }}>
            Soluzioni di microviteria di precisione per ogni settore industriale
          </p>
        </div>
        
        <div ref={cardsRef} className="grid grid-2" style={{ gap: '2rem' }}>
          {products.map((product, index) => (
            <div 
              key={index}
              className="product-card"
              style={{
                background: 'rgba(255, 255, 255, 0.9)',
                backdropFilter: 'blur(10px)',
                borderRadius: '20px',
                padding: '2.5rem',
                border: `2px solid ${product.color}20`,
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <div 
                style={{
                  position: 'absolute',
                  top: '-50%',
                  right: '-50%',
                  width: '100px',
                  height: '100px',
                  background: `${product.color}10`,
                  borderRadius: '50%',
                  zIndex: 1
                }}
              />
              
              <div style={{ position: 'relative', zIndex: 2 }}>
                <div 
                  style={{
                    color: product.color,
                    marginBottom: '1.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem'
                  }}
                >
                  {product.icon}
                  <h3 style={{ margin: 0, color: '#2C3E50' }}>{product.title}</h3>
                </div>
                
                <p style={{ marginBottom: '1.5rem', lineHeight: '1.6' }}>
                  {product.description}
                </p>
                
                <ul style={{ listStyle: 'none', padding: 0, marginBottom: '2rem' }}>
                  {product.features.map((feature, idx) => (
                    <li 
                      key={idx}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        marginBottom: '0.5rem',
                        color: '#2C3E50'
                      }}
                    >
                      <div 
                        style={{
                          width: '6px',
                          height: '6px',
                          background: product.color,
                          borderRadius: '50%'
                        }}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button 
                  className="btn btn-outline"
                  style={{
                    borderColor: product.color,
                    color: product.color,
                    width: '100%',
                    justifyContent: 'center'
                  }}
                >
                  Scopri di più
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;