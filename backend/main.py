"""
Goals AI — FastAPI Backend
Powered by IBM Granite via watsonx.ai
"""
import logging
import os
from contextlib import asynccontextmanager

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv

from models import AnalyzeRequest, AnalyzeResponse
from granite_client import granite_client

# ─────────────────────────────────────────────────────────────────────────────
# Config
# ─────────────────────────────────────────────────────────────────────────────

load_dotenv()
logging.basicConfig(level=logging.INFO, format="%(asctime)s %(levelname)s %(name)s — %(message)s")
logger = logging.getLogger(__name__)


# ─────────────────────────────────────────────────────────────────────────────
# App lifecycle
# ─────────────────────────────────────────────────────────────────────────────

@asynccontextmanager
async def lifespan(app: FastAPI):
    configured = granite_client.is_configured()
    if configured:
        logger.info("✅ IBM Granite configured via HuggingFace")
    else:
        logger.warning("⚠️  watsonx credentials not found — running in DEMO mode (mock responses)")
        logger.warning("   Set WATSONX_API_KEY and WATSONX_PROJECT_ID in .env to enable real AI")
    yield
    logger.info("Goals AI shutting down")


# ─────────────────────────────────────────────────────────────────────────────
# FastAPI app
# ─────────────────────────────────────────────────────────────────────────────

app = FastAPI(
    title="Goals AI API",
    description="IBM Granite-powered football moment analysis for the 2026 FIFA World Cup",
    version="1.0.0",
    lifespan=lifespan,
)

# CORS
frontend_url = os.getenv("FRONTEND_URL", "http://localhost:5173")
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        frontend_url,
        "http://localhost:5173",
        "http://localhost:3000",
        "https://goals-ai.vercel.app",  # production frontend
        "*",  # dev convenience — tighten for production
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# ─────────────────────────────────────────────────────────────────────────────
# Routes
# ─────────────────────────────────────────────────────────────────────────────

@app.get("/", tags=["health"])
async def root():
    return {
        "service": "Goals AI",
        "tagline": "Every match moment, understood by everyone",
        "version": "1.0.0",
        "status": "running",
        "ai_configured": granite_client.is_configured(),
        "model": "ibm-granite/granite-3.3-8b-instruct" if granite_client.is_configured() else "demo_mode",
        "challenge": "IBM SkillsBuild AI Builders Challenge 2026",
    }


@app.get("/health", tags=["health"])
async def health():
    return {
        "status": "healthy",
        "ai_ready": granite_client.is_configured(),
    }


@app.post("/api/analyze", response_model=AnalyzeResponse, tags=["analysis"])
async def analyze_moment(request: AnalyzeRequest) -> AnalyzeResponse:
    """
    Analyze any World Cup match moment using IBM Granite.

    - **situation**: Describe any match moment, decision, or tactical change
    - **language**: Response language (English, Hindi, Spanish, etc.)
    - **knowledge_level**: new_fan | casual | expert
    - **analysis_type**: var | tactical | performance | cultural
    """
    logger.info(
        f"Analyzing [{request.analysis_type}] in [{request.language_name}] "
        f"for level [{request.knowledge_level}] — '{request.situation[:60]}...'"
    )

    try:
        result = await granite_client.analyze(
            situation=request.situation,
            language=request.language_name,
            knowledge_level=request.knowledge_level,
            analysis_type=request.analysis_type,
        )
        logger.info(f"Analysis complete — verdict: '{result.get('verdict', '')[:40]}'")
        return AnalyzeResponse(**result)

    except ValueError as e:
        logger.error(f"Parse error: {e}")
        raise HTTPException(status_code=422, detail=f"Failed to parse AI response: {str(e)}")
    except RuntimeError as e:
        logger.error(f"Runtime error: {e}")
        raise HTTPException(status_code=503, detail=str(e))
    except Exception as e:
        logger.exception(f"Unexpected error during analysis: {e}")
        raise HTTPException(status_code=500, detail="An unexpected error occurred. Please try again.")

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="127.0.0.1", port=8000, reload=True)

