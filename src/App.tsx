import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <div className="container">
          <div className="nav-content">
            <div className="logo">MicroViteria</div>
            <ul className="nav-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">Chi Siamo</a></li>
              <li><a href="#products">Prodotti</a></li>
              <li><a href="#contact">Contatti</a></li>
            </ul>
          </div>
        </div>
      </nav>

      <section id="home" className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-grid">
              <div className="hero-text">
                <h1>Precisione in ogni dettaglio</h1>
                <p>
                  Microviteria di qualità per elettronica, automotive, elettrotecnica e industria. 
                  Soluzioni innovative per le tue esigenze di precisione.
                </p>
                <div className="hero-cta">
                  <button className="btn btn-primary">
                    Scopri i nostri prodotti
                  </button>
                  <button className="btn btn-outline">
                    Contattaci
                  </button>
                </div>
              </div>
              <div className="hero-visual">
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

      <section id="about" className="section">
        <div className="container">
          <h2>Chi Siamo</h2>
          <p>
            Con oltre 20 anni di esperienza nel settore della microviteria di precisione, 
            siamo specializzati nella produzione di componenti di alta qualità per i settori 
            più esigenti dell'industria moderna.
          </p>
        </div>
      </section>

      <section id="products" className="section" style={{ background: '#F8F9FA' }}>
        <div className="container">
          <h2>I Nostri Prodotti</h2>
          <div className="grid grid-2" style={{ gap: '2rem' }}>
            <div className="card">
              <h3>Viti per Elettronica</h3>
              <p>Microviti di precisione per componenti elettronici e dispositivi miniaturizzati.</p>
            </div>
            <div className="card">
              <h3>Componenti Automotive</h3>
              <p>Viteria specializzata per l'industria automobilistica con certificazioni.</p>
            </div>
            <div className="card">
              <h3>Microviteria Industriale</h3>
              <p>Soluzioni per macchinari industriali con precisione millimetrica.</p>
            </div>
            <div className="card">
              <h3>Prodotti Personalizzati</h3>
              <p>Sviluppiamo soluzioni su misura per le vostre esigenze specifiche.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="section">
        <div className="container">
          <h2>Contattaci</h2>
          <div className="grid grid-2" style={{ gap: '4rem' }}>
            <div>
              <form style={{ 
                background: 'rgba(255, 255, 255, 0.95)',
                borderRadius: '20px',
                padding: '2rem',
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)'
              }}>
                <h3>Richiedi Informazioni</h3>
                <div style={{ display: 'grid', gap: '1rem' }}>
                  <input type="text" placeholder="Nome" style={{ padding: '12px', borderRadius: '8px', border: '2px solid #E9ECEF' }} />
                  <input type="email" placeholder="Email" style={{ padding: '12px', borderRadius: '8px', border: '2px solid #E9ECEF' }} />
                  <textarea placeholder="Messaggio" rows={4} style={{ padding: '12px', borderRadius: '8px', border: '2px solid #E9ECEF' }}></textarea>
                  <button type="submit" className="btn btn-primary">Invia Messaggio</button>
                </div>
              </form>
            </div>
            <div>
              <div className="card">
                <h4>Informazioni di Contatto</h4>
                <p><strong>Indirizzo:</strong> Via dell'Industria 123, 20100 Milano</p>
                <p><strong>Telefono:</strong> +39 02 1234567</p>
                <p><strong>Email:</strong> info@microviteria.it</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer style={{ background: '#2C3E50', color: 'white', padding: '3rem 0', textAlign: 'center' }}>
        <div className="container">
          <h3 style={{ color: '#47C4E8' }}>MicroViteria</h3>
          <p>Precisione in ogni dettaglio</p>
          <p>&copy; 2024 MicroViteria. Tutti i diritti riservati.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;