const CameraIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
    <circle cx="12" cy="13" r="4"></circle>
  </svg>
);

const GridIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="7" height="7"></rect>
    <rect x="14" y="3" width="7" height="7"></rect>
    <rect x="14" y="14" width="7" height="7"></rect>
    <rect x="3" y="14" width="7" height="7"></rect>
  </svg>
);

const PersonIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
    <circle cx="12" cy="7" r="4"></circle>
  </svg>
);

const GlobeIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="2" y1="12" x2="22" y2="12"></line>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
  </svg>
);

const FEATURES = [
  {
    icon: <CameraIcon />,
    title: 'VAR Explainer',
    description: 'Understand every controversial decision: offside lines, handball calls, and video review protocols explained simply for any fan.',
    color: 'rgba(0, 165, 80, 0.1)',
    borderColor: 'rgba(0, 165, 80, 0.3)',
  },
  {
    icon: <GridIcon />,
    title: 'Tactical Decoder',
    description: 'Why did that formation change the game? From pressing systems to counter-attacks, tactical shifts decoded in plain language.',
    color: 'rgba(230, 51, 41, 0.1)',
    borderColor: 'rgba(230, 51, 41, 0.3)',
  },
  {
    icon: <PersonIcon />,
    title: 'Human Performance',
    description: 'Fatigue, pressure, emotion: the invisible forces behind every great performance and inexplicable mistake, explained with empathy.',
    color: 'rgba(0, 61, 165, 0.1)',
    borderColor: 'rgba(0, 61, 165, 0.3)',
  },
  {
    icon: <GlobeIcon />,
    title: 'Cultural Bridge',
    description: 'Football in your language, your culture. Local references, metaphors, and connections that make every moment resonate personally.',
    color: 'rgba(0, 165, 80, 0.1)',
    borderColor: 'rgba(0, 165, 80, 0.3)',
  },
];

export default function Features() {
  return (
    <section className="px-6 pb-24 max-w-7xl mx-auto">
      <div className="animate-on-scroll text-center mb-14">
        <div className="section-label mx-auto mb-4">
          Core Features
        </div>
        <h2 className="text-2xl md:text-4xl text-white mb-4 font-playfair font-bold text-balance">
          Everything You Need to{' '}
          <span className="font-playfair font-bold italic text-accent block mt-1 md:mt-0 md:inline">Understand the Game</span>
        </h2>
        <p className="text-text-secondary max-w-xl mx-auto">
          Four intelligent analysis modes, all powered by IBM Granite and designed for fans at every level.
        </p>
      </div>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] items-stretch gap-6">
        {FEATURES.map((feature, i) => (
          <div
            key={feature.title}
            className="feature-card animate-on-scroll h-full flex flex-col"
            style={{ transitionDelay: `${i * 0.1}s` }}
          >
            {/* Icon */}
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center text-white mb-5"
              style={{
                background: feature.color,
                border: `1px solid ${feature.borderColor}`,
              }}
            >
              {feature.icon}
            </div>

            {/* Content */}
            <h3 className="text-white font-inter font-semibold text-lg mb-3">
              {feature.title}
            </h3>
            <p className="font-inter font-normal text-[#888888] text-sm leading-[1.7]">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
