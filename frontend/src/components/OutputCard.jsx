import { useState, useEffect } from 'react';

const TYPE_LABELS = {
  var: { icon: '', label: 'VAR DECISION', color: '#E63329' },
  tactical: { icon: '', label: 'TACTICAL ANALYSIS', color: '#00A550' },
  performance: { icon: '', label: 'HUMAN PERFORMANCE', color: '#E63329' },
  cultural: { icon: '', label: 'CULTURAL CONTEXT', color: '#003DA5' },
};

function ProgressBar({ value }) {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setWidth(value), 300);
    return () => clearTimeout(timer);
  }, [value]);

  return (
    <div className="flex items-center gap-3">
      <div className="progress-bar flex-1">
        <div className="progress-fill" style={{ width: `${width}%` }} />
      </div>
      <span className="text-accent font-inter font-bold text-lg tabular-nums">{value}%</span>
    </div>
  );
}

function Section({ icon, title, children, colorClass = 'text-accent' }) {
  return (
    <div className="output-section">
      <div className="flex items-center gap-2 mb-3 border-b border-white/10 pb-2">
        <h3 className={`text-xs font-bold uppercase tracking-[0.1em] ${colorClass}`}>
          {title}
        </h3>
      </div>
      <div className="text-text-secondary text-sm leading-relaxed pl-0">
        {children}
      </div>
    </div>
  );
}

const LANGUAGE_FLAGS = {
  English: '',
  Hindi: '',
  Tamil: '',
  Telugu: '',
  Bengali: '',
  Urdu: '',
  Spanish: '',
  French: '',
  German: '',
  Portuguese: '',
  Arabic: '',
  Japanese: '',
  Korean: '',
  Chinese: '',
  'Chinese Simplified': '',
  Swahili: '',
  Italian: '',
  Dutch: '',
  Russian: '',
  Turkish: '',
  Indonesian: '',
};

export default function OutputCard({ result, language, analysisType }) {
  const typeInfo = TYPE_LABELS[result.type] || TYPE_LABELS[analysisType] || TYPE_LABELS.var;

  return (
    <div className="mt-8 glass-card-strong overflow-hidden">
      {/* Header */}
      <div
        className="p-8 border-b"
        style={{
          borderColor: `${typeInfo.color}30`,
          background: `linear-gradient(135deg, ${typeInfo.color}10, transparent)`,
        }}
      >
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
          <div className="flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
              style={{ background: `${typeInfo.color}20`, border: `1px solid ${typeInfo.color}40` }}
            >
              {typeInfo.icon}
            </div>
            <div>
              <div className="text-xs font-bold tracking-widest mb-1" style={{ color: typeInfo.color }}>
                {typeInfo.label}
              </div>
              <h2 className="text-white font-playfair font-bold text-[1.4rem] leading-tight">
                {result.verdict}
              </h2>
            </div>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <span className="text-text-muted text-xs">Confidence</span>
            <div
              className="text-xs font-bold px-3 py-1 rounded-full"
              style={{
                background: `${typeInfo.color}20`,
                color: typeInfo.color,
                border: `1px solid ${typeInfo.color}40`,
              }}
            >
              {result.confidence}%
            </div>
          </div>
        </div>

        {/* Confidence bar */}
        <div className="mt-4">
          <ProgressBar value={result.confidence} />
        </div>

        {/* Language pill */}
        <div className="mt-3 flex items-center gap-2">
          <span className="text-text-muted text-xs">Response in:</span>
          <span className="text-xs font-medium text-accent bg-accent/10 px-2 py-0.5 rounded-full border border-accent/20 flex items-center gap-1.5">
            <span>{LANGUAGE_FLAGS[language] || ''}</span>
            <span>{language}</span>
          </span>
        </div>

      </div>

      {/* Body */}
      <div className="p-8 space-y-6">
        {/* What Happened */}
        <Section title="What Happened">
          <p className="text-white text-base leading-loose">{result.explanation}</p>
        </Section>

        {/* Step by Step */}
        {result.steps && result.steps.length > 0 && (
          <Section title="Step by Step Breakdown">
            <ol className="space-y-3 mt-1">
              {result.steps.map((step, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span
                    className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5"
                    style={{ background: 'rgba(0,165,80,0.15)', color: '#00A550', border: '1px solid rgba(0,165,80,0.3)' }}
                  >
                    {i + 1}
                  </span>
                  <span className="text-text-secondary leading-relaxed">{step}</span>
                </li>
              ))}
            </ol>
          </Section>
        )}

        {/* FIFA Law Reference */}
        {result.fifa_law && (
          <div className="border-t border-white/5 pt-6">
            <Section title="FIFA Law Reference" colorClass="text-[#003DA5]">
              <div
                className="rounded-lg p-4 mt-1"
                style={{ background: 'rgba(0, 61, 165, 0.06)', border: '1px solid rgba(0, 61, 165, 0.15)' }}
              >
                <p className="text-white/80">{result.fifa_law}</p>
              </div>
            </Section>
          </div>
        )}

        {/* Emotional Context */}
        {result.emotional_context && (
          <div className="border-t border-white/5 pt-6">
            <Section title="Human & Emotional Context" colorClass="text-[#E63329]">
              <div
                className="rounded-lg p-4 mt-1"
                style={{ background: 'rgba(230, 51, 41, 0.06)', border: '1px solid rgba(230, 51, 41, 0.15)' }}
              >
                <p className="text-white/80">{result.emotional_context}</p>
              </div>
            </Section>
          </div>
        )}

        {/* Cultural Insight */}
        {result.cultural_insight && (
          <div className="border-t border-white/5 pt-6">
            <Section title="Cultural Insight" colorClass="text-[#003DA5]">
              <div
                className="rounded-lg p-4 mt-1"
                style={{ background: 'rgba(0, 61, 165, 0.06)', border: '1px solid rgba(0, 61, 165, 0.15)' }}
              >
                <p className="text-white/80">{result.cultural_insight}</p>
              </div>
            </Section>
          </div>
        )}
      </div>

      {/* Footer */}
      <div
        className="px-8 py-4 flex items-center justify-between"
        style={{ background: 'rgba(0,165,80,0.04)', borderTop: '1px solid rgba(0,165,80,0.1)' }}
      >
        <div className="flex items-center gap-2">
          <div className="glow-dot" />
          <span className="text-text-muted text-xs">Powered by IBM Granite via OpenRouter</span>
        </div>
        <span className="text-text-muted text-xs">Goals AI</span>
      </div>
    </div>
  );
}
