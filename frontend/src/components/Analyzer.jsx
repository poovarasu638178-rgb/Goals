import { useState, useRef, useEffect } from 'react';
import OutputCard from './OutputCard';

const LANGUAGES = [
  { flag: '', name: 'English', code: 'en' },
  { flag: '', name: 'Hindi', code: 'hi' },
  { flag: '', name: 'Tamil', code: 'ta' },
  { flag: '', name: 'Telugu', code: 'te' },
  { flag: '', name: 'Bengali', code: 'bn' },
  { flag: '', name: 'Urdu', code: 'ur' },
  { flag: '', name: 'Spanish', code: 'es' },
  { flag: '', name: 'French', code: 'fr' },
  { flag: '', name: 'German', code: 'de' },
  { flag: '', name: 'Portuguese', code: 'pt' },
  { flag: '', name: 'Arabic', code: 'ar' },
  { flag: '', name: 'Japanese', code: 'ja' },
  { flag: '', name: 'Korean', code: 'ko' },
  { flag: '', name: 'Chinese Simplified', code: 'zh' },
  { flag: '', name: 'Swahili', code: 'sw' },
  { flag: '', name: 'Italian', code: 'it' },
  { flag: '', name: 'Dutch', code: 'nl' },
  { flag: '', name: 'Russian', code: 'ru' },
  { flag: '', name: 'Turkish', code: 'tr' },
  { flag: '', name: 'Indonesian', code: 'id' },
];

const KNOWLEDGE_LEVELS = [
  { id: 'new_fan', label: 'New Fan' },
  { id: 'casual', label: 'Casual Fan' },
  { id: 'expert', label: 'Expert' },
];

const ANALYSIS_TYPES = [
  { id: 'var', label: 'VAR Decision' },
  { id: 'tactical', label: 'Tactical Analysis' },
  { id: 'performance', label: 'Human Performance' },
  { id: 'cultural', label: 'Cultural Context' },
];

const SCENARIOS = [
  "Mbappe goal disallowed for offside",
  "Brazil switched to 5-4-1 after conceding",
  "VAR ordered penalty retake",
  "Star player subbed at 60 mins while losing",
  "Last minute red card in knockout stage",
  "Penalty shootout — keeper saved 3 in a row",
  "Coach made 3 substitutions at halftime",
  "Player refused to leave after being subbed",
];

const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:8000';

export default function Analyzer() {
  const [language, setLanguage] = useState('English');
  const [knowledgeLevel, setKnowledgeLevel] = useState('casual');
  const [analysisType, setAnalysisType] = useState('var');
  const [situation, setSituation] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const outputRef = useRef(null);

  const selectedLang = LANGUAGES.find(l => l.name === language);

  const handleScenarioClick = (scenario) => {
    setSituation(scenario);
    setResult(null);
    setError(null);
  };

  const handleAnalyze = async () => {
    if (!situation.trim()) return;
    setLoading(true);
    setResult(null);
    setError(null);

    try {
      const response = await fetch(`${API_BASE}/api/analyze`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          situation: situation.trim(),
          language_name: language,
          knowledge_level: knowledgeLevel,
          analysis_type: analysisType,
        }),
      });

      if (!response.ok) {
        const errData = await response.json().catch(() => ({}));
        throw new Error(errData.detail || `Server error: ${response.status}`);
      }

      const data = await response.json();
      setResult(data);

      // Smooth scroll to output
      setTimeout(() => {
        outputRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    } catch (err) {
      setError(err.message || 'Failed to connect to Goals AI. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) {
      handleAnalyze();
    }
  };

  return (
    <section className="py-24 px-6 max-w-5xl mx-auto">
      {/* Heading */}
      <div className="animate-on-scroll text-center mb-14">
        <div className="section-label mx-auto mb-4">
          AI Analysis
        </div>
        <h2 className="text-2xl md:text-5xl font-bold text-white mb-4 text-balance">
          Analyze Any{' '}
          <span className="gradient-text block mt-1 md:mt-0 md:inline">Match Moment</span>
        </h2>
        <p className="text-text-secondary max-w-xl mx-auto">
          Type any World Cup situation, select your language and level. (IBM Granite does the rest)
        </p>
      </div>

      <div className="glass-card p-6 md:p-8 space-y-6 animate-on-scroll">

        {/* ROW 1 — Controls */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Language Selector */}
          <div className="space-y-2">
            <label className="text-text-secondary text-xs font-semibold uppercase tracking-wider">
              Language
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-lg pointer-events-none">
                {selectedLang?.flag || ''}
              </span>
              <select
                id="language-select"
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="custom-select pl-10"
              >
                {LANGUAGES.map((lang) => (
                  <option key={lang.code} value={lang.name}>
                    {lang.flag} {lang.name}
                  </option>
                ))}
              </select>
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-text-muted pointer-events-none text-xs">▼</span>
            </div>
          </div>

          {/* Knowledge Level */}
          <div className="space-y-2">
            <label className="text-text-secondary text-xs font-semibold uppercase tracking-wider">
              Knowledge Level
            </label>
            <div className="flex flex-wrap gap-2">
              {KNOWLEDGE_LEVELS.map((level) => (
                <button
                  key={level.id}
                  id={`level-${level.id}`}
                  onClick={() => setKnowledgeLevel(level.id)}
                  className={`level-btn ${knowledgeLevel === level.id ? 'active' : ''}`}
                >
                  {level.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Analysis Type Tabs */}
        <div className="space-y-2">
          <label className="text-text-secondary text-xs font-semibold uppercase tracking-wider">
            Analysis Type
          </label>
          <div className="flex flex-wrap gap-2 p-1.5 rounded-xl" style={{ background: 'rgba(255,255,255,0.03)' }}>
            {ANALYSIS_TYPES.map((type) => (
              <button
                key={type.id}
                id={`tab-${type.id}`}
                onClick={() => setAnalysisType(type.id)}
                className={`tab-btn ${analysisType === type.id ? 'active' : ''}`}
              >
                {type.label}
              </button>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/5" />

        {/* ROW 2 — Quick Scenarios */}
        <div className="space-y-3">
          <label className="text-text-secondary text-xs font-semibold uppercase tracking-wider">
            Quick Scenarios
          </label>
          <div className="flex gap-2 flex-wrap">
            {SCENARIOS.map((scenario) => (
              <button
                key={scenario}
                onClick={() => handleScenarioClick(scenario)}
                className={`scenario-chip ${situation === scenario ? 'bg-accent/20 border-accent text-white' : ''}`}
              >
                {scenario}
              </button>
            ))}
          </div>
        </div>

        {/* ROW 3 — Text Input */}
        <div className="space-y-2">
          <label className="text-text-secondary text-xs font-semibold uppercase tracking-wider" htmlFor="situation-input">
            Describe the Moment
          </label>
          <textarea
            id="situation-input"
            className="analysis-textarea"
            rows={5}
            value={situation}
            onChange={(e) => setSituation(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={`Describe any World Cup moment, decision, tactical change, or situation in any language...\n\nTip: Press Cmd/Ctrl + Enter to analyze`}
          />
          <p className="text-text-muted text-xs text-right">
            {situation.length} characters · Press ⌘↵ to analyze
          </p>
        </div>

        {/* Submit Button & Loading State */}
        {loading ? (
          <div
            className="flex flex-col items-center justify-center p-8 rounded-2xl border border-accent/20 bg-accent/5 space-y-4"
            style={{ animation: 'pulse-green 2s ease-in-out infinite' }}
          >
            {/* Spinning Logo */}
            <div className="animate-spin" style={{ animationDuration: '2s' }}>
              <img src="/src/assets/logo.png" alt="Loading" className="w-12 h-12 object-contain" />
            </div>
            
            {/* Loading text */}
            <div className="text-white font-semibold tracking-wide text-lg font-inter">
              GOALS AI is analyzing...
            </div>
            
            {/* Pulsing green dots */}
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-accent animate-bounce" style={{ animationDelay: '0s' }} />
              <span className="w-2.5 h-2.5 rounded-full bg-accent animate-bounce" style={{ animationDelay: '0.15s' }} />
              <span className="w-2.5 h-2.5 rounded-full bg-accent animate-bounce" style={{ animationDelay: '0.3s' }} />
            </div>
          </div>
        ) : (
          <button
            id="analyze-btn"
            onClick={handleAnalyze}
            disabled={!situation.trim()}
            className="btn-primary w-full py-4 text-base relative overflow-hidden"
          >
            <span className="flex items-center justify-center gap-3">
              <span>Understand This Moment</span>
            </span>
          </button>
        )}


        {/* Error */}
        {error && (
          <div
            className="rounded-xl p-4 border text-sm"
            style={{
              background: 'rgba(220, 38, 38, 0.08)',
              borderColor: 'rgba(220, 38, 38, 0.3)',
              color: '#fca5a5',
            }}
          >
            <div className="flex items-start gap-3">
              <div>
                <p className="font-semibold mb-1">Analysis Failed</p>
                <p className="text-red-300 text-xs">{error}</p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* OUTPUT */}
      <div ref={outputRef}>
        {result && (
          <div style={{ opacity: 0, animation: 'fadeUp 0.6s ease-out forwards' }}>
            <OutputCard result={result} language={language} analysisType={analysisType} />
          </div>
        )}
      </div>
    </section>
  );
}
