from pydantic import BaseModel, Field
from typing import Optional, List, Literal


class AnalyzeRequest(BaseModel):
    situation: str = Field(..., min_length=1, max_length=2000, description="The match moment to analyze")
    language_name: str = Field(default="English", description="Response language name")
    knowledge_level: Literal["new_fan", "casual", "expert"] = Field(
        default="casual",
        description="User's football knowledge level"
    )
    analysis_type: Literal["var", "tactical", "performance", "cultural"] = Field(
        default="var",
        description="Type of analysis to perform"
    )


class AnalyzeResponse(BaseModel):
    verdict: str = Field(..., description="Short headline of the decision or moment")
    type: str = Field(..., description="Analysis type used")
    confidence: int = Field(..., ge=0, le=100, description="AI confidence score 0-100")
    explanation: str = Field(..., description="Main explanation in the chosen language")
    steps: List[str] = Field(default_factory=list, description="Step-by-step breakdown")
    fifa_law: Optional[str] = Field(None, description="Applicable FIFA law or regulation")
    emotional_context: Optional[str] = Field(None, description="Human and emotional angle")
    cultural_insight: Optional[str] = Field(None, description="Cultural connection for the region")
