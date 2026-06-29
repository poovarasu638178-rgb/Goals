import React from 'react';

function Stats() {
  const stats = [
    { label: "Fans", value: "2.5B" },
    { label: "Languages", value: "20+" },
    { label: "Analysis Modes", value: "4" },
    { label: "IBM Granite", value: "100%" }
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 pt-12 pb-24">
      <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4 w-full">
        {stats.map((stat, index) => (
          <div 
            key={index} 
            className="animate-on-scroll glass-card flex flex-col items-center justify-center p-8 transition-transform duration-300 hover:-translate-y-2 hover:border-accent"
            style={{ 
              transitionDelay: `${index * 100}ms`,
              borderTop: '3px solid #00A550'
            }}
          >
            <div className="font-inter font-extrabold text-[2.5rem] text-accent mb-2 leading-none">
              {stat.value}
            </div>
            <div className="font-inter font-normal uppercase tracking-[0.1em] text-[#888888] text-sm text-center">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Stats;
