import { useEffect, useRef } from 'react';



export default function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const handleMouseMove = (e) => {
      const rect = el.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 10;
      el.style.setProperty('--mouse-x', `${x}px`);
      el.style.setProperty('--mouse-y', `${y}px`);
    };
    el.addEventListener('mousemove', handleMouseMove);
    return () => el.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div
      ref={heroRef}
      className="hex-bg relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-[120px] pb-20 overflow-hidden"
    >
      {/* Ambient glow blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(0,168,107,0.08) 0%, transparent 70%)',
            filter: 'blur(40px)',
          }}
        />
        <div
          className="absolute top-1/3 right-1/4 w-[300px] h-[300px] rounded-full animate-float"
          style={{
            background: 'radial-gradient(circle, rgba(0,168,107,0.05) 0%, transparent 70%)',
            filter: 'blur(30px)',
          }}
        />
        <div
          className="absolute bottom-1/4 left-1/4 w-[250px] h-[250px] rounded-full animate-float-delayed"
          style={{
            background: 'radial-gradient(circle, rgba(0,168,107,0.04) 0%, transparent 70%)',
            filter: 'blur(30px)',
          }}
        />
      </div>


      {/* Floating Logo */}
      <img 
        src="/src/assets/logo.png" 
        alt="Goals Logo" 
        className="w-24 h-24 mb-6 animate-float-logo object-contain" 
        style={{ opacity: 0, animation: 'fadeUp 0.6s ease-out forwards' }}
      />

      {/* Section label */}
      <div
        className="section-label mb-8 animate-fade-in font-inter uppercase tracking-[0.15em] text-xs text-accent"
        style={{ animationDelay: '0.1s', opacity: 0, animation: 'fadeUp 0.6s ease-out 0.1s forwards' }}
      >
        <div className="glow-dot" />
        2026 FIFA World Cup AI Companion
      </div>

      {/* Main heading */}
      <h1
        className="tracking-tight leading-[1.1] mb-6 max-w-[800px] font-playfair font-bold italic drop-shadow-glow text-balance mx-auto"
        style={{ opacity: 0, animation: 'fadeUp 0.7s ease-out 0.2s forwards', fontSize: 'clamp(2rem, 5vw, 4.5rem)' }}
      >
        <span className="text-white">Every Match Moment,</span>
        <br className="hidden md:block" />
        <span className="font-playfair font-bold italic text-accent block mt-1 md:mt-0 md:inline">Understood by Everyone</span>
      </h1>

      {/* Subheading */}
      <p
        className="text-text-secondary max-w-[800px] leading-relaxed mb-10 mx-auto text-balance"
        style={{ opacity: 0, animation: 'fadeUp 0.7s ease-out 0.35s forwards', fontSize: 'clamp(0.9rem, 2vw, 1.25rem)' }}
      >
        <span className="block mb-2 md:mb-1">
          AI powered World Cup companion for{' '}
          <span className="text-white font-semibold">2.5 billion fans</span>{' '}
          across{' '}
          <span className="text-accent font-semibold">20+ languages</span>.
        </span>
        <span className="block">
          Powered by IBM Granite its built for the beautiful game.
        </span>
      </p>

      {/* CTA Buttons */}
      <div
        className="flex flex-col sm:flex-row items-center gap-4 mb-14"
        style={{ opacity: 0, animation: 'fadeUp 0.7s ease-out 0.5s forwards' }}
      >
        <button
          onClick={() => scrollTo('#analyze')}
          className="btn-primary px-8 py-4 text-base w-full sm:w-auto font-inter font-semibold tracking-[0.02em]"
          id="hero-analyze-btn"
        >
          <span className="animate-pulse-green px-2 py-1 rounded">Analyze a Moment</span>
        </button>
        <button
          onClick={() => scrollTo('#how-it-works')}
          className="btn-outline px-8 py-4 text-base w-full sm:w-auto"
          id="hero-how-btn"
        >
          See How It Works
        </button>
      </div>



    </div>
  );
}
