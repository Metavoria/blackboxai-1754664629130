from fastapi import FastAPI, File, UploadFile, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import uvicorn
import os

# For text extraction
from pdfminer.high_level import extract_text
from docx import Document

# For AI model (example using transformers)
import torch
from transformers import pipeline

app = FastAPI()

# Allow CORS for frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Adjust for production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Load AI model for text classification or summarization
# Example: Using a summarization pipeline as placeholder
summarizer = pipeline("summarization")

class AnalysisResult(BaseModel):
    overall_score: float
    strengths: list[str]
    weaknesses: list[str]
    suggestions: list[str]
    detailed_feedback: str

def extract_resume_text(file: UploadFile) -> str:
    if file.content_type == "application/pdf":
        # Save temporarily and extract text
        temp_path = f"/tmp/{file.filename}"
        with open(temp_path, "wb") as f:
            f.write(file.file.read())
        text = extract_text(temp_path)
        os.remove(temp_path)
        return text
    elif file.content_type in ["application/vnd.openxmlformats-officedocument.wordprocessingml.document", "application/msword"]:
        # DOCX extraction
        temp_path = f"/tmp/{file.filename}"
        with open(temp_path, "wb") as f:
            f.write(file.file.read())
        doc = Document(temp_path)
        os.remove(temp_path)
        full_text = []
        for para in doc.paragraphs:
            full_text.append(para.text)
        return "\n".join(full_text)
    else:
        raise HTTPException(status_code=400, detail="Unsupported file type")

def analyze_text(text: str) -> AnalysisResult:
    # Real scoring logic using keyword matching and section presence
    keywords = {
        "contact": ["email", "phone", "address", "linkedin", "github"],
        "summary": ["summary", "objective", "profile"],
        "experience": ["experience", "worked", "managed", "developed", "led"],
        "education": ["degree", "university", "college", "bachelor", "master", "phd"],
        "skills": ["skills", "technologies", "tools", "languages"],
        "certifications": ["certification", "certificate", "licensed"],
        "projects": ["project", "developed", "created", "designed"],
    }

    section_scores = {}
    total_score = 0
    max_score = len(keywords) * 5  # Max 5 points per section

    for section, keys in keywords.items():
        score = sum(1 for key in keys if key.lower() in text.lower())
        section_scores[section] = score
        total_score += score

    overall_score = round((total_score / max_score) * 10, 2)  # Normalize to 10 scale

    strengths = []
    weaknesses = []
    suggestions = []

    for section, score in section_scores.items():
        if score >= 3:
            strengths.append(f"Strong {section} section")
        else:
            weaknesses.append(f"Weak or missing {section} section")
            suggestions.append(f"Improve your {section} section with relevant details")

    # Generate detailed feedback using summarization
    summary = summarizer(text, max_length=150, min_length=50, do_sample=False)
    feedback = summary[0]['summary_text']

    return AnalysisResult(
        overall_score=overall_score,
        strengths=strengths,
        weaknesses=weaknesses,
        suggestions=suggestions,
        detailed_feedback=feedback
    )

@app.post("/api/resume/analyze", response_model=AnalysisResult)
async def analyze_resume(file: UploadFile = File(...)):
    try:
        text = extract_resume_text(file)
        analysis = analyze_text(text)
        return analysis
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
