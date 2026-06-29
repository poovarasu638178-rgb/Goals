import React from 'react';

export default function Footer() {
  return (
    <footer
      className="relative border-t py-8 text-center"
      style={{ borderColor: 'rgba(0,200,83,0.15)', background: '#0a0a0a' }}
    >
      {/* Top glow line */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, #00A550, transparent)' }}
      />
      
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-text-muted italic text-sm">
          Goals — Built by Poovarasu S & Ajai Kumar R for IBM SkillsBuild AI Builders June Innovation Challenge 2026
        </p>
      </div>
    </footer>
  );
}
