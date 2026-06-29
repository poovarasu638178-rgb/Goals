import React from 'react';

const PencilIcon = () => (
  <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
  </svg>
);

const BrainIcon = () => (
  <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z"></path>
    <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"></path>
  </svg>
);

const GlobeIcon = () => (
  <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="2" y1="12" x2="22" y2="12"></line>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
  </svg>
);

const STEPS = [
  {
    number: '01',
    icon: <PencilIcon />,
    title: 'Describe the Moment',
    description: 'Type any World Cup situation in any language: a VAR call, a tactical shift, a player\'s emotion, or a cultural reaction. No expertise required.',
    color: '#00A550',
  },
  {
    number: '02',
    icon: <BrainIcon />,
    title: 'IBM Granite Analyzes It',
    description: 'IBM Granite processes your input with deep football knowledge, FIFA law expertise, tactical understanding, and cultural awareness in real time.',
    color: '#6366f1',
  },
  {
    number: '03',
    icon: <GlobeIcon />,
    title: 'You Understand Everything',
    description: 'Receive a clear, structured explanation in your language at your knowledge level with step-by-step breakdown, laws, emotional context, and cultural insight.',
    color: '#f59e0b',
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 px-6 max-w-6xl mx-auto" id="how-it-works">
      {/* Heading */}
      <div className="animate-on-scroll text-center mb-16">
        <div className="section-label mx-auto mb-4">
          How It Works
        </div>
        <h2 className="text-2xl md:text-5xl text-white mb-4 font-playfair font-bold text-balance">
          From Confusion to{' '}
          <span className="font-playfair font-bold italic text-accent block mt-1 md:mt-0 md:inline">Clarity in Seconds</span>
        </h2>
        <p className="text-text-secondary max-w-xl mx-auto">
          Goals uses IBM Granite to bridge the gap between complex match events and millions of fans worldwide.
        </p>
      </div>

      {/* Steps */}
      <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-8 relative">
        {/* Connecting line — desktop */}
        <div
          className="hidden md:block absolute top-10 left-1/6 right-1/6 h-px"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(0,165,80,0.4), rgba(0,165,80,0.4), transparent)' }}
        />

        {STEPS.map((step, i) => (
          <div
            key={step.number}
            className="animate-on-scroll relative flex flex-col items-center text-center"
            style={{ transitionDelay: `${i * 0.15}s` }}
          >
            {/* Number bubble */}
            <div className="relative mb-6">
              <div
                className="w-20 h-20 rounded-2xl flex items-center justify-center text-white relative z-10"
                style={{
                  background: `linear-gradient(135deg, ${step.color}20, ${step.color}10)`,
                  border: `1px solid ${step.color}40`,
                  boxShadow: `0 8px 32px ${step.color}20`,
                }}
              >
                {step.icon}
              </div>
              <div
                className="absolute -top-2 -right-2 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold"
                style={{ background: step.color, color: '#000' }}
              >
                {step.number}
              </div>
            </div>

            {/* Content */}
            <h3 className="text-white font-inter font-bold text-xl mb-3">{step.title}</h3>
            <p className="font-inter font-normal text-[#888888] text-sm leading-relaxed max-w-xs">
              {step.description}
            </p>

            {/* Arrow for mobile */}
            {i < STEPS.length - 1 && (
              <div className="md:hidden mt-8 flex flex-col items-center gap-1">
                <div className="w-px h-8 bg-gradient-to-b from-accent to-transparent" />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="animate-on-scroll text-center mt-16">
        <button
          onClick={() => document.querySelector('#analyze')?.scrollIntoView({ behavior: 'smooth' })}
          className="btn-primary px-10 py-4 text-base font-inter font-semibold tracking-[0.02em]"
          id="how-it-works-cta"
        >
          <span>Try It Now</span>
        </button>
      </div>
    </section>
  );
}
