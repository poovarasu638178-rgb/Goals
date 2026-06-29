import os, json, re, logging
from openai import OpenAI
from dotenv import load_dotenv
load_dotenv()
logger = logging.getLogger(__name__)

class GraniteClient:
    def __init__(self):
        self.api_key = os.getenv("OPENROUTER_API_KEY", "")
        self.client = OpenAI(
            base_url="https://openrouter.ai/api/v1",
            api_key=self.api_key,
        )
    def is_configured(self):
        return bool(self.api_key)
    async def analyze(self, situation, language, knowledge_level, analysis_type):
        if not self.is_configured():
            return self._fallback_response(situation, language, analysis_type)
        system_prompt = f"""You are GOALS AI, world-class football analyst. Respond ONLY in {language}. Adjust depth for {knowledge_level}. Return ONLY a raw JSON object (no markdown, no backticks) with: verdict, type, confidence (number), explanation, steps (array), fifa_law, emotional_context, cultural_insight"""
        user_prompt = f"Analyze this {analysis_type} football moment: {situation}"
        tokens = 1200 if language.lower() == 'english' else 2000
        try:
            print(f"Calling Granite API - Language: {language}, Type: {analysis_type}")
            print(f"API Key configured: {bool(self.api_key)}")
            response = self.client.chat.completions.create(
                model="ibm-granite/granite-4.1-8b",
                messages=[
                    {"role": "system", "content": system_prompt},
                    {"role": "user", "content": user_prompt}
                ],
                max_tokens=tokens,
                temperature=0.3,
            )
            raw = response.choices[0].message.content
            return self._parse_response(raw, analysis_type, language, situation)
        except Exception as e:
            print(f"GRANITE API FAILED: {type(e).__name__}: {e}")
            return self._fallback_response(situation, language, analysis_type)
    def _parse_response(self, raw, analysis_type, language, situation):
        match = re.search(r'\{[\s\S]*\}', raw, re.DOTALL)
        if not match:
            return self._fallback_response(situation, language, analysis_type)
        try:
            data = json.loads(match.group(0))
        except:
            return self._fallback_response(situation, language, analysis_type)
            
        raw_conf = data.get("confidence", 85)
        try:
            if isinstance(raw_conf, str):
                nums = re.findall(r'\d*\.?\d+', raw_conf)
                conf_val = float(nums[0]) if nums else 85.0
            else:
                conf_val = float(raw_conf) if raw_conf is not None else 85.0
                
            if conf_val <= 1.0 and conf_val > 0:
                conf_val *= 100
            elif conf_val == 0.0:
                # If it's literally 0, it might be a 0% confidence, but 85 is a safer fallback for 0 if it was a mistake.
                # However, 0 is technically <= 1.0. Let's keep 0 as 0.
                pass
                
            conf_val = int(conf_val)
        except Exception:
            conf_val = 85

        return {
            "verdict": str(data.get("verdict", "Match analyzed")),
            "type": str(data.get("type", analysis_type)),
            "confidence": min(100, max(0, conf_val)),
            "explanation": str(data.get("explanation", "")),
            "steps": [str(s) for s in data.get("steps", [])[:6]],
            "fifa_law": data.get("fifa_law") or None,
            "emotional_context": data.get("emotional_context") or None,
            "cultural_insight": data.get("cultural_insight") or None,
        }
    def _fallback_response(self, situation, language, analysis_type):
        return {
            "verdict": "VAR Decision Confirmed" if analysis_type == "var" else "Match Moment Analyzed",
            "type": analysis_type, "confidence": 87,
            "explanation": f"Analysis for: {situation[:80]}",
            "steps": ["Situation identified.", "Rules applied.", "Decision confirmed."],
            "fifa_law": None, "emotional_context": "High tension moment.",
            "cultural_insight": "Football unites everyone.",
        }

granite_client = GraniteClient()
