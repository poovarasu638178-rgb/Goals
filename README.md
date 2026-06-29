# Goals ⚽

> **Every match moment, understood by everyone**

An IBM Granite-powered AI companion for the 2026 FIFA World Cup — explaining any match moment to 2.5 billion fans in 20+ languages at any knowledge level.

Built for the **IBM SkillsBuild AI Builders Challenge 2026**.

---

## 🏗 Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 18 + Vite + Tailwind CSS 3 |
| Backend | FastAPI (Python 3.11+) |
| AI Core | IBM Granite 3.3 via watsonx.ai |
| Deploy | Vercel (frontend) + Render (backend) |

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- Python 3.11+
- IBM watsonx.ai account (for real AI — works in demo mode without it)

---

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
# → http://localhost:5173
```

### Backend Setup

```bash
cd backend

# Create and activate virtual environment
python -m venv venv
source venv/bin/activate      # macOS/Linux
# or: venv\Scripts\activate   # Windows

# Install dependencies
pip install -r requirements.txt

# Configure credentials
cp .env.example .env
# Edit .env with your IBM watsonx credentials

# Start the server
uvicorn main:app --reload --port 8000
# → http://localhost:8000
```

---

## 🔑 IBM watsonx Configuration

1. Sign up at [ibm.com/watsonx](https://www.ibm.com/watsonx)
2. Create a project and note your **Project ID**
3. Generate an **API Key** from IBM Cloud IAM
4. Add credentials to `backend/.env`:

```env
WATSONX_API_KEY=your_key_here
WATSONX_PROJECT_ID=your_project_id_here
WATSONX_URL=https://us-south.ml.cloud.ibm.com
```

> **Note:** The app works in **demo mode** without credentials — showing mock responses to demonstrate the full UI/UX flow.

---

## 🌍 Supported Languages

English • Hindi • Tamil • Telugu • Bengali • Urdu • Spanish • French • German • Portuguese • Arabic • Japanese • Korean • Chinese Simplified • Swahili • Italian • Dutch • Russian • Turkish • Indonesian

---

## 📡 API Reference

### `POST /api/analyze`

```json
{
  "situation": "Mbappe goal disallowed for offside",
  "language": "Hindi",
  "knowledge_level": "new_fan",
  "analysis_type": "var"
}
```

**Response:**
```json
{
  "verdict": "Goal disallowed — VAR confirms offside",
  "type": "var",
  "confidence": 92,
  "explanation": "...",
  "steps": ["...", "...", "...", "..."],
  "fifa_law": "Law 11 — Offside...",
  "emotional_context": "...",
  "cultural_insight": "..."
}
```

---

## 🏆 IBM SkillsBuild AI Builders Challenge

Goals demonstrates how IBM Granite can be used to:
- Bridge language barriers for global sports fans
- Adapt AI explanations to different knowledge levels
- Provide culturally-aware, emotionally-intelligent responses
- Make complex sporting decisions accessible to everyone

---

## 📁 Project Structure

```
Goals/
├── frontend/               # React + Vite + Tailwind
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── Features.jsx
│   │   │   ├── Analyzer.jsx
│   │   │   ├── OutputCard.jsx
│   │   │   ├── HowItWorks.jsx
│   │   │   ├── About.jsx
│   │   │   └── Footer.jsx
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── tailwind.config.js
│   └── vite.config.js
│
└── backend/                # FastAPI + IBM Granite
    ├── main.py
    ├── models.py
    ├── granite_client.py
    ├── requirements.txt
    └── .env.example
```

---

*Built for 2.5 billion football fans worldwide 🌍*
