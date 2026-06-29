export default function Logo({ className = "w-8 h-8", style }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
      <circle cx="50" cy="50" r="48" fill="#ffffff"/>
      
      {/* Panels */}
      <polygon points="50,25 28,41 36,66 64,66 72,41" fill="#1a1a1a" />
      <polygon points="50,25 28,41 12,22 35,5 50,25" fill="#00A550" />
      <polygon points="50,25 72,41 88,22 65,5 50,25" fill="#E63329" />
      <polygon points="72,41 64,66 82,88 95,60 88,22" fill="#00A550" />
      <polygon points="28,41 36,66 18,88 5,60 12,22" fill="#E63329" />
      <polygon points="36,66 64,66 82,88 50,98 18,88" fill="#1a1a1a" />
      
      {/* White gaps (strokes) */}
      <polygon points="50,25 28,41 36,66 64,66 72,41" stroke="#ffffff" strokeWidth="4" strokeLinejoin="round" />
      <line x1="50" y1="25" x2="50" y2="2" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" />
      <line x1="72" y1="41" x2="98" y2="30" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" />
      <line x1="64" y1="66" x2="82" y2="88" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" />
      <line x1="36" y1="66" x2="18" y2="88" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" />
      <line x1="28" y1="41" x2="2" y2="30" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
}
