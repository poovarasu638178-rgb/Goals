import { useState, useEffect } from 'react';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Features from './components/Features';
import Analyzer from './components/Analyzer';
import HowItWorks from './components/HowItWorks';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Scroll animation observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-bg-primary text-text-primary font-inter">
      <main>
        <section id="home">
          <Hero />
          <Stats />
          <Features />
        </section>
        <section id="analyze">
          <Analyzer />
        </section>

        <section id="how-it-works">
          <HowItWorks />
        </section>
        <section id="about">
          <About />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
