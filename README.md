<div align="center">
  <h1><img src="favicon.png" width="48" height="48" alt="GOALS Logo" style="vertical-align: middle; margin-right: 10px;" />GOALS</h1>
  <h3>Every Match Moment, Understood by Everyone</h3>
  <p>AI-powered FIFA World Cup companion that explains any match moment to 2.5 billion fans in 20+ languages at any knowledge level.</p>

  <p>
    <a href="https://goals01.vercel.app"><strong>Live Demo (Frontend on Vercel, Backend on Render)</strong></a>
  </p>
  
  <p>
    <img src="https://img.shields.io/badge/Frontend-Vercel-black?logo=vercel" alt="Vercel" />
    <img src="https://img.shields.io/badge/Backend-Render-46E3B7?logo=render" alt="Render" />
    <img src="https://img.shields.io/badge/AI-IBM_Granite-0F62FE?logo=ibm" alt="IBM Granite" />
  </p>
</div>

---

**Built for the IBM SkillsBuild AI Builders Challenge 2026**

**Team Apex01**
- **Poovarasu S** — Team Lead, Full Stack Developer
- **Ajai Kumar R** — Team Member

---

## 🌍 What is GOALS?

GOALS is a human-centered AI companion powered by **IBM Granite**. It explains any FIFA World Cup moment — VAR decisions, tactical shifts, player performance, cultural context — in your own language, at your own knowledge level.

2.5 billion fans watched the 2022 World Cup. Most didn't understand what they were watching. **GOALS changes that.**

---

## 🔍 4 Analysis Modes

- 📺 **VAR Explainer** — step by step breakdown with FIFA Law reference
- ♟️ **Tactical Decoder** — formation changes and substitution logic
- 🏃 **Human Performance** — fatigue, pressure, emotion explained
- 🤝 **Cultural Bridge** — local context in your language

---

## 🛠 Tech Stack

| Layer | Technology | Deployment |
|-------|-----------|------------|
| **Frontend** | React 18 + Vite + Tailwind CSS | [Vercel](https://goals01.vercel.app) |
| **Backend** | FastAPI (Python 3.11) | Render |
| **AI Core** | IBM Granite 4.1 8B via OpenRouter | N/A |

---

## 🗣 Supported Languages

We proudly support 20+ languages out of the box, powered seamlessly by IBM Granite:
`English`, `Hindi`, `Tamil`, `Telugu`, `Bengali`, `Spanish`, `French`, `Arabic`, `Portuguese`, `Japanese`, `Korean`, `Chinese`, `Swahili`, `German`, `Italian`, `Dutch`, `Russian`, `Turkish`, `Indonesian`, `Urdu`.

---

## 🚀 Quick Start

### Frontend (React/Vite)
```bash
cd frontend
npm install
npm run dev
```

### Backend (FastAPI)
```bash
cd backend
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
cp .env.example .env
# Add your OPENROUTER_API_KEY to .env
uvicorn main:app --reload --port 8000
```

---

## 🧠 IBM Technology

**IBM Granite 4.1 8B** is the core AI engine — not a wrapper. It drives all 4 analysis modes with multilingual output, structured JSON responses, confidence scoring, and culturally-aware explanations.

---

## 🏆 IBM SkillsBuild AI Builders Challenge 2026

GOALS demonstrates how IBM Granite can:
- **Bridge language barriers** for 2.5 billion global fans.
- **Adapt explanations** to different knowledge levels (from New Fan to Expert).
- Provide culturally-aware, emotionally-intelligent responses.
- Make complex sporting decisions accessible to absolutely everyone.

---

<div align="center">
  <p><em>Built with passion by Team Apex01 for the IBM SkillsBuild AI Builders Challenge 2026.</em></p>
</div>
