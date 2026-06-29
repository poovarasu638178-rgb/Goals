import React from 'react';

const GraniteIcon = () => (
  <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
  </svg>
);

const OpenRouterIcon = () => (
  <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
    <circle cx="12" cy="12" r="4"></circle>
  </svg>
);

const FastApiIcon = () => (
  <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
  </svg>
);

const TECH_BADGES = [
  {
    icon: <GraniteIcon />,
    title: 'IBM Granite',
    subtitle: 'Core AI Engine',
    desc: 'IBM\'s most capable foundation model for reasoning, multilingual output, and nuanced analysis.',
    link: 'https://www.ibm.com/products/watsonx-ai',
  },
  {
    icon: <OpenRouterIcon />,
    title: 'OpenRouter',
    subtitle: 'AI Routing',
    desc: 'High-performance AI model routing for scalable IBM Granite inference.',
    link: 'https://openrouter.ai',
  },
  {
    icon: <FastApiIcon />,
    title: 'FastAPI',
    subtitle: 'Backend Engine',
    desc: 'High-performance Python backend handling real-time AI requests at scale.',
    link: 'https://fastapi.tiangolo.com',
  },
];

export default function About() {
  return (
    <section className="py-24 px-6 max-w-6xl mx-auto" id="about">

      {/* Problem Statement */}
      <div className="animate-on-scroll text-center mb-20">
        <div className="section-label mx-auto mb-4">
          The Problem
        </div>
        <h2 className="text-2xl md:text-5xl text-white mb-6 font-playfair font-bold text-balance">
          The World Watches.{' '}
          <br className="hidden md:block" />
          <span className="font-playfair font-bold italic text-accent block mt-1 md:mt-0 md:inline">Most Don't Fully Understand.</span>
        </h2>

        <div className="max-w-3xl mx-auto">
          <blockquote
            className="text-xl md:text-2xl text-text-secondary leading-relaxed italic mb-8 p-6 rounded-2xl relative"
            style={{ background: 'rgba(0,200,83,0.04)', border: '1px solid rgba(0,200,83,0.15)' }}
          >
            <span className="text-accent text-5xl font-bold absolute -top-3 -left-1 leading-none">"</span>
            <span className="relative z-10 font-playfair italic text-[1.2rem] text-[#aaaaaa]">
              2.5 billion fans watched the 2022 World Cup.
              Most of them didn't fully understand what was happening.
            </span>
            <span className="text-accent text-5xl font-bold absolute -bottom-8 right-1 leading-none">"</span>
          </blockquote>

          <p className="text-text-secondary text-base leading-relaxed">
            VAR decisions confused billions. Tactical shifts went unexplained. Cultural barriers meant fans in Lagos,
            Mumbai, and Jakarta watched the same game but experienced different levels of understanding.
            <span className="text-white"> Goals changes that.</span>
          </p>
        </div>
      </div>

      {/* Solution */}
      <div className="grid md:grid-cols-2 gap-10 items-center mb-20">
        <div className="animate-on-scroll">
          <div className="section-label mb-4">
            The Solution
          </div>
          <h3 className="text-xl md:text-3xl text-white mb-4 font-playfair font-bold text-balance">
            Goals bridges the gap using{' '}
            <span className="font-playfair font-bold italic text-accent block mt-1 md:mt-0 md:inline">IBM Granite AI</span>
          </h3>
          <p className="text-text-secondary leading-relaxed mb-6 font-inter font-normal">
            Goals is a human-centered AI companion that takes any match moment: a VAR decision, a substitution,
            a tactical formation, and explains it clearly, in the user's language, at their knowledge level,
            with cultural sensitivity and emotional intelligence.
          </p>
          <ul className="space-y-3">
            {[
              'Explains in 20+ languages including Hindi, Tamil, Swahili',
              'Adapts to New Fan, Casual Fan, or Expert level',
              'Cites actual FIFA laws and regulations',
              'Adds emotional and cultural context',
              'Built with IBM Granite for enterprise-grade AI',
            ].map((point) => (
              <li key={point} className="flex items-start gap-3 text-sm text-text-secondary">
                <span className="text-accent mt-1 shrink-0">✓</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="animate-on-scroll space-y-4" style={{ transitionDelay: '0.15s' }}>
          {TECH_BADGES.map((badge) => (
            <a
              key={badge.title}
              href={badge.link}
              target="_blank"
              rel="noopener noreferrer"
              className="ibm-badge block no-underline"
            >
              <div className="text-white">{badge.icon}</div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-white font-inter font-semibold text-sm">{badge.title}</span>
                  <span
                    className="text-xs px-2 py-0.5 rounded-full font-inter font-medium uppercase tracking-wider"
                    style={{ background: 'rgba(0,165,80,0.15)', color: '#00A550' }}
                  >
                    {badge.subtitle}
                  </span>
                </div>
                <p className="text-text-muted text-xs leading-relaxed">{badge.desc}</p>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* IBM SkillsBuild badge */}
      <div className="animate-on-scroll">
        <div
          className="rounded-2xl p-8 text-center relative overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, #111111, #1a1a1a)',
            border: '1px solid rgba(0,200,83,0.3)',
          }}
        >
          {/* Glow background */}
          <div
            className="absolute inset-0 opacity-30"
            style={{
              background: 'radial-gradient(ellipse at center, rgba(0,200,83,0.15) 0%, transparent 70%)',
            }}
          />
          <div className="relative z-10">
            <h3 className="text-white font-playfair font-bold text-xl mb-2">
              IBM SkillsBuild AI Builders Challenge
            </h3>
            <p className="font-inter font-normal text-[#888888] text-sm mb-6 max-w-lg mx-auto">
              Goals is Built by Team Apex01 for the IBM SkillsBuild AI Builders June Innovation Challenge 2026, Demonstrating how IBM Granite makes football accessible to 2.5 billion fans worldwide.
            </p>
            <div className="flex items-center justify-center gap-3">
              <div
                className="px-5 py-2.5 rounded-full text-sm font-semibold"
                style={{ background: 'rgba(0,165,80,0.15)', border: '1px solid rgba(0,165,80,0.4)', color: '#00A550' }}
              >
                Powered by IBM Granite
              </div>
              <div
                className="px-5 py-2.5 rounded-full text-sm font-semibold"
                style={{ background: 'rgba(99,102,241,0.15)', border: '1px solid rgba(99,102,241,0.4)', color: '#a5b4fc' }}
              >
                Built for 2026 FIFA World Cup
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
