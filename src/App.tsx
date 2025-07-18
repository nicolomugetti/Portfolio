import React, { useState, useEffect } from 'react';
import './App.css';
import Preloader from './components/Preloader';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Sectors from './components/Sectors';
import Quality from './components/Quality';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handlePreloaderComplete = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    // Prevent scrolling during preloader
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isLoading]);

  return (
    <div className="App">
      {isLoading && <Preloader onComplete={handlePreloaderComplete} />}
      
      <Navigation />
      <Hero />
      <About />
      <Products />
      <Sectors />
      <Quality />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;