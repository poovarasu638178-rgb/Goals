import { useState, useEffect } from 'react';
import Logo from './Logo';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'How it Works', href: '#how-it-works' },
    { label: 'Languages', href: '#about' },
    { label: 'About', href: '#about' },
  ];

  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setMenuOpen(false);
  };

  return (
    <nav className="navbar" style={{ boxShadow: scrolled ? '0 4px 30px rgba(0,0,0,0.5)' : 'none' }}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="w-1/3 flex justify-start">
          <button
            onClick={() => scrollTo('#home')}
            className="flex items-center gap-2.5 text-white font-bold text-xl tracking-tight hover:opacity-90 transition-opacity"
          >
            <Logo className="w-8 h-8" />
            <span className="font-inter">
              <span className="text-accent">Goals</span>
            </span>
          </button>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center justify-center gap-8 w-1/3">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => scrollTo(link.href)}
              className="text-text-secondary hover:text-white transition-colors text-sm font-medium font-inter whitespace-nowrap"
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center justify-end gap-4 w-1/3">
          <button
            onClick={() => scrollTo('#analyze')}
            className="btn-primary px-6 py-2.5 text-sm font-inter font-semibold tracking-[0.02em] whitespace-nowrap"
          >
            <span>Try Now</span>
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${menuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-6 pb-6 flex flex-col gap-4 border-t border-white/5">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => scrollTo(link.href)}
              className="text-text-secondary hover:text-white transition-colors text-sm font-medium text-left py-2"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo('#analyze')}
            className="btn-primary px-6 py-3 text-sm w-full mt-2 font-inter font-semibold tracking-[0.02em]"
          >
            <span>Try Now</span>
          </button>
        </div>
      </div>
    </nav>
  );
}
