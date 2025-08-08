import React, { useState, useRef } from 'react';
import { analyzeResume } from '../../services/aiService';
import './ResumeUpload.css';

const ResumeUpload = () => {
  const [uploadedFile, setUploadedFile] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState(null);
  const [selectedTemplate, setSelectedTemplate] = useState('');
  const [showTemplates, setShowTemplates] = useState(false);
  const fileInputRef = useRef(null);

  const resumeTemplates = [
    {
      id: 'modern',
      name: 'Modern Professional',
      description: 'Clean, contemporary design perfect for tech roles',
      preview: '📄',
      color: '#667eea'
    },
    {
      id: 'classic',
      name: 'Classic Executive',
      description: 'Traditional format ideal for corporate positions',
      preview: '📋',
      color: '#4f46e5'
    },
    {
      id: 'creative',
      name: 'Creative Designer',
      description: 'Visually appealing layout for creative professionals',
      preview: '🎨',
      color: '#8b5cf6'
    },
    {
      id: 'minimal',
      name: 'Minimal Clean',
      description: 'Simple, elegant design that focuses on content',
      preview: '📝',
      color: '#06b6d4'
    },
    {
      id: 'academic',
      name: 'Academic Research',
      description: 'Structured format for academic and research roles',
      preview: '🎓',
      color: '#10b981'
    },
    {
      id: 'startup',
      name: 'Startup Dynamic',
      description: 'Bold, innovative design for startup environments',
      preview: '🚀',
      color: '#f59e0b'
    },
    {
      id: 'consulting',
      name: 'Consulting Pro',
      description: 'Professional layout for consulting positions',
      preview: '💼',
      color: '#ef4444'
    },
    {
      id: 'technical',
      name: 'Technical Expert',
      description: 'Structured format highlighting technical skills',
      preview: '⚙️',
      color: '#6366f1'
    },
    {
      id: 'sales',
      name: 'Sales Achiever',
      description: 'Results-focused design for sales professionals',
      preview: '📈',
      color: '#ec4899'
    },
    {
      id: 'international',
      name: 'International Standard',
      description: 'Global format suitable for international applications',
      preview: '🌍',
      color: '#14b8a6'
    }
  ];

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      if (file.type === 'application/pdf' || file.type.startsWith('image/')) {
        setUploadedFile(file);
        analyzeResume(file instanceof Blob ? file : new Blob([file]));
      } else {
        alert('Please upload a PDF file or image.');
      }
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file) {
      if (file.type === 'application/pdf' || file.type.startsWith('image/')) {
        setUploadedFile(file);
        analyzeResume(file);
      } else {
        alert('Please upload a PDF file or image.');
      }
    }
  };

  const analyzeResume = async (file) => {
    setIsAnalyzing(true);
    setAnalysisResult(null);

    try {
      console.log('Received file for analysis:', file);
      console.log('File type:', typeof file);
      console.log('File constructor:', file?.constructor?.name);

      // Convert file to base64
      const toBase64 = (file) => new Promise((resolve, reject) => {
        if (!(file instanceof Blob)) {
          console.error('File is not a Blob or File object:', file);
          reject(new Error('File is not a Blob or File object'));
          return;
        }
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
          console.log('FileReader result:', reader.result);
          resolve(reader.result);
        };
        reader.onerror = error => {
          console.error('FileReader error:', error);
          reject(error);
        };
      });

      const base64File = await toBase64(file);

      console.log('Base64 file:', base64File);

      // Call real AI service for dynamic resume analysis
      const analysis = await analyzeResume(base64File);

      setAnalysisResult(analysis);
    } catch (error) {
      console.error('Error analyzing resume:', error);
      alert('Failed to analyze resume. Please try again.');
    } finally {
      setIsAnalyzing(false);
    }
  };

  const getScoreColor = (score) => {
    if (score >= 8) return '#10b981'; // Green
    if (score >= 6) return '#f59e0b'; // Yellow
    return '#ef4444'; // Red
  };

  const getScoreLabel = (score) => {
    if (score >= 8) return 'Excellent';
    if (score >= 6) return 'Good';
    return 'Needs Improvement';
  };

  const downloadTemplate = (templateId) => {
    // In a real implementation, this would generate and download the resume template
    alert(`Downloading ${resumeTemplates.find(t => t.id === templateId)?.name} template...`);
  };

  return (
    <div className="resume-upload">
      <div className="container">
        <div className="resume-header">
          <h1>AI-Powered Resume Builder & Analyzer</h1>
          <p>Upload your resume for instant AI analysis and get personalized improvement suggestions</p>
        </div>

        <div className="resume-content">
          {!uploadedFile ? (
            <div className="upload-section">
              <div 
                className="upload-area"
                onDragOver={handleDragOver}
                onDrop={handleDrop}
                onClick={() => fileInputRef.current?.click()}
              >
                <div className="upload-icon">📄</div>
                <h3>Upload Your Resume</h3>
                <p>Drag and drop your resume here, or click to browse</p>
                <p className="upload-formats">Supports PDF and image files</p>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".pdf,image/*"
                  onChange={handleFileUpload}
                  style={{ display: 'none' }}
                />
              </div>

              <div className="upload-benefits">
                <h3>What You'll Get:</h3>
                <div className="benefits-grid">
                  <div className="benefit-item">
                    <div className="benefit-icon">🎯</div>
                    <h4>AI Analysis</h4>
                    <p>Comprehensive review of your resume content and structure</p>
                  </div>
                  <div className="benefit-item">
                    <div className="benefit-icon">📊</div>
                    <h4>ATS Score</h4>
                    <p>Check how well your resume performs with applicant tracking systems</p>
                  </div>
                  <div className="benefit-item">
                    <div className="benefit-icon">💡</div>
                    <h4>Improvement Tips</h4>
                    <p>Personalized suggestions to enhance your resume</p>
                  </div>
                  <div className="benefit-item">
                    <div className="benefit-icon">🎨</div>
                    <h4>Template Suggestions</h4>
                    <p>Recommended templates based on your industry and role</p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="analysis-section">
              <div className="uploaded-file">
                <div className="file-info">
                  <div className="file-icon">📄</div>
                  <div className="file-details">
                    <h4>{uploadedFile.name}</h4>
                    <p>{(uploadedFile.size / 1024 / 1024).toFixed(2)} MB</p>
                  </div>
                  <button 
                    onClick={() => {
                      setUploadedFile(null);
                      setAnalysisResult(null);
                      setIsAnalyzing(false);
                    }}
                    className="btn btn-outline btn-sm"
                  >
                    Upload New
                  </button>
                </div>
              </div>

              {isAnalyzing && (
                <div className="analyzing-state">
                  <div className="spinner-large"></div>
                  <h3>Analyzing Your Resume...</h3>
                  <p>Our AI is reviewing your resume for content, structure, and ATS compatibility</p>
                  <div className="analysis-steps">
                    <div className="step active">📄 Reading content</div>
                    <div className="step active">🔍 Analyzing structure</div>
                    <div className="step active">🎯 Checking ATS compatibility</div>
                    <div className="step">💡 Generating suggestions</div>
                  </div>
                </div>
              )}

              {analysisResult && (
                <div className="analysis-results">
                  <div className="results-header">
                    <h2>Resume Analysis Results</h2>
                    <div className="overall-score">
                      <div className="score-circle">
                        <span className="score-number">{analysisResult.overallScore}</span>
                        <span className="score-max">/10</span>
                      </div>
                      <div className="score-label">
                        {getScoreLabel(analysisResult.overallScore)}
                      </div>
                    </div>
                  </div>

                  <div className="results-grid">
                    <div className="result-card">
                      <h3>📊 Key Metrics</h3>
                      <div className="metrics-list">
                        <div className="metric-item">
                          <span className="metric-label">ATS Compatibility</span>
                          <div className="metric-bar">
                            <div 
                              className="metric-fill" 
                              style={{ width: `${analysisResult.atsScore}%`, backgroundColor: getScoreColor(analysisResult.atsScore / 10) }}
                            ></div>
                          </div>
                          <span className="metric-value">{analysisResult.atsScore}%</span>
                        </div>
                        <div className="metric-item">
                          <span className="metric-label">Keyword Match</span>
                          <div className="metric-bar">
                            <div 
                              className="metric-fill" 
                              style={{ width: `${analysisResult.keywordMatch}%`, backgroundColor: getScoreColor(analysisResult.keywordMatch / 10) }}
                            ></div>
                          </div>
                          <span className="metric-value">{analysisResult.keywordMatch}%</span>
                        </div>
                      </div>
                    </div>

                    <div className="result-card">
                      <h3>✅ Strengths</h3>
                      <ul className="feedback-list">
                        {analysisResult.strengths.map((strength, index) => (
                          <li key={index} className="feedback-item positive">
                            {strength}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="result-card">
                      <h3>⚠️ Areas for Improvement</h3>
                      <ul className="feedback-list">
                        {analysisResult.weaknesses.map((weakness, index) => (
                          <li key={index} className="feedback-item negative">
                            {weakness}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="result-card">
                      <h3>💡 Suggestions</h3>
                      <ul className="feedback-list">
                        {analysisResult.suggestions.map((suggestion, index) => (
                          <li key={index} className="feedback-item suggestion">
                            {suggestion}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="section-scores">
                    <h3>Section-by-Section Analysis</h3>
                    <div className="sections-grid">
                      {Object.entries(analysisResult.sections).map(([section, data]) => (
                        <div key={section} className="section-card">
                          <div className="section-header">
                            <h4>{section.charAt(0).toUpperCase() + section.slice(1)}</h4>
                            <div 
                              className="section-score"
                              style={{ color: getScoreColor(data.score) }}
                            >
                              {data.score}/10
                            </div>
                          </div>
                          <p className="section-feedback">{data.feedback}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="industry-alignment">
                    <h3>Industry Alignment</h3>
                    <div className="alignment-grid">
                      {Object.entries(analysisResult.industryAlignment).map(([industry, score]) => (
                        <div key={industry} className="alignment-item">
                          <div className="alignment-header">
                            <span className="industry-name">{industry.charAt(0).toUpperCase() + industry.slice(1)}</span>
                            <span className="alignment-score">{score}%</span>
                          </div>
                          <div className="alignment-bar">
                            <div 
                              className="alignment-fill" 
                              style={{ width: `${score}%`, backgroundColor: getScoreColor(score / 10) }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="recommended-templates">
                    <h3>Recommended Templates</h3>
                    <p>Based on your resume analysis, these templates would work best for you:</p>
                    <div className="templates-grid">
                      {analysisResult.recommendedTemplates.map(templateId => {
                        const template = resumeTemplates.find(t => t.id === templateId);
                        return template ? (
                          <div key={template.id} className="template-card recommended">
                            <div className="template-preview" style={{ backgroundColor: template.color }}>
                              <span className="template-icon">{template.preview}</span>
                            </div>
                            <div className="template-info">
                              <h4>{template.name}</h4>
                              <p>{template.description}</p>
                              <button 
                                onClick={() => downloadTemplate(template.id)}
                                className="btn btn-primary btn-sm"
                              >
                                Use Template
                              </button>
                            </div>
                          </div>
                        ) : null;
                      })}
                    </div>
                  </div>

                  <div className="action-buttons">
                    <button 
                      onClick={() => setShowTemplates(true)}
                      className="btn btn-primary"
                    >
                      View All Templates
                    </button>
                    <button 
                      onClick={() => window.print()}
                      className="btn btn-outline"
                    >
                      Save Analysis
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}

          {showTemplates && (
            <div className="templates-modal">
              <div className="modal-overlay" onClick={() => setShowTemplates(false)}></div>
              <div className="modal-content">
                <div className="modal-header">
                  <h2>Choose Your Resume Template</h2>
                  <button 
                    onClick={() => setShowTemplates(false)}
                    className="modal-close"
                  >
                    ✕
                  </button>
                </div>
                <div className="all-templates-grid">
                  {resumeTemplates.map(template => (
                    <div key={template.id} className="template-card">
                      <div className="template-preview" style={{ backgroundColor: template.color }}>
                        <span className="template-icon">{template.preview}</span>
                      </div>
                      <div className="template-info">
                        <h4>{template.name}</h4>
                        <p>{template.description}</p>
                        <button 
                          onClick={() => {
                            downloadTemplate(template.id);
                            setShowTemplates(false);
                          }}
                          className="btn btn-primary btn-sm"
                        >
                          Use Template
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResumeUpload;
