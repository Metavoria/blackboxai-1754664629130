import React, { useState, useEffect, useRef } from 'react';
import './AIInterview.css';

const AIInterview = () => {
  const [isInterviewActive, setIsInterviewActive] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState('');
  const [questionIndex, setQuestionIndex] = useState(0);
  const [userResponse, setUserResponse] = useState('');
  const [interviewHistory, setInterviewHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedDomain, setSelectedDomain] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('');
  const [feedback, setFeedback] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [interviewComplete, setInterviewComplete] = useState(false);

  const chatContainerRef = useRef(null);

  const domains = [
    { value: 'frontend', label: 'Frontend Development', icon: '🌐' },
    { value: 'backend', label: 'Backend Development', icon: '⚙️' },
    { value: 'fullstack', label: 'Full Stack Development', icon: '💻' },
    { value: 'data-science', label: 'Data Science', icon: '📊' },
    { value: 'mobile', label: 'Mobile Development', icon: '📱' },
    { value: 'devops', label: 'DevOps', icon: '🔧' },
    { value: 'ui-ux', label: 'UI/UX Design', icon: '🎨' },
    { value: 'product-management', label: 'Product Management', icon: '📋' }
  ];

  const levels = [
    { value: 'entry', label: 'Entry Level (0-2 years)', icon: '🌱' },
    { value: 'mid', label: 'Mid Level (2-5 years)', icon: '🌿' },
    { value: 'senior', label: 'Senior Level (5+ years)', icon: '🌳' },
    { value: 'lead', label: 'Lead/Manager Level', icon: '👑' }
  ];

  // Simulate AI response using Ollama (in a real implementation, this would call the actual Ollama API)
  const generateAIResponse = async (prompt, context = '') => {
    setIsLoading(true);
    
    try {
      // Simulate API call to Ollama
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Mock responses based on domain and level
      const mockResponses = {
        frontend: {
          entry: [
            "Tell me about the difference between let, const, and var in JavaScript.",
            "How would you center a div both horizontally and vertically using CSS?",
            "What is the virtual DOM in React and why is it useful?",
            "Explain the box model in CSS.",
            "What are the different ways to make an API call in JavaScript?"
          ],
          mid: [
            "How would you optimize the performance of a React application?",
            "Explain the concept of closures in JavaScript with an example.",
            "What are CSS preprocessors and what advantages do they offer?",
            "How would you implement lazy loading for images in a web application?",
            "Describe the differences between server-side rendering and client-side rendering."
          ],
          senior: [
            "How would you architect a large-scale frontend application?",
            "Explain micro-frontends and when you would use them.",
            "How would you implement a design system for a large organization?",
            "Describe your approach to performance monitoring and optimization.",
            "How would you handle state management in a complex React application?"
          ]
        },
        backend: {
          entry: [
            "What is the difference between SQL and NoSQL databases?",
            "Explain what RESTful APIs are and their principles.",
            "What is the purpose of middleware in web frameworks?",
            "How would you handle user authentication in a web application?",
            "What are environment variables and why are they important?"
          ],
          mid: [
            "How would you design a scalable database schema?",
            "Explain the concept of database indexing and its impact on performance.",
            "What are microservices and what are their advantages and disadvantages?",
            "How would you implement caching in a web application?",
            "Describe different types of testing in backend development."
          ],
          senior: [
            "How would you design a system to handle millions of concurrent users?",
            "Explain distributed systems and the challenges they present.",
            "How would you implement a message queue system?",
            "Describe your approach to monitoring and logging in production systems.",
            "How would you handle database migrations in a production environment?"
          ]
        }
      };

      const domainQuestions = mockResponses[selectedDomain] || mockResponses.frontend;
      const levelQuestions = domainQuestions[selectedLevel] || domainQuestions.entry;
      
      if (questionIndex < levelQuestions.length) {
        return levelQuestions[questionIndex];
      } else {
        return "Thank you for completing the interview. Let me provide you with some feedback based on your responses.";
      }
    } catch (error) {
      console.error('Error generating AI response:', error);
      return "I apologize, but I'm having trouble generating the next question. Please try again.";
    } finally {
      setIsLoading(false);
    }
  };

  const generateFeedback = async (responses) => {
    setIsLoading(true);
    
    try {
      // Simulate AI feedback generation
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      const mockFeedback = `
## Interview Feedback

### Overall Performance: Good 👍

**Strengths:**
- Clear communication and structured thinking
- Good understanding of fundamental concepts
- Practical examples provided where relevant

**Areas for Improvement:**
- Consider diving deeper into technical implementation details
- Practice explaining complex concepts in simpler terms
- Work on providing more specific examples from your experience

**Recommendations:**
- Review advanced ${selectedDomain} concepts
- Practice more technical interviews
- Build projects that demonstrate your skills in ${selectedDomain}

**Score: 7.5/10**

Keep practicing and you'll do great in your next interview!
      `;
      
      return mockFeedback;
    } catch (error) {
      console.error('Error generating feedback:', error);
      return "Unable to generate feedback at this time. Please try again later.";
    } finally {
      setIsLoading(false);
    }
  };

  const startInterview = async () => {
    if (!selectedDomain || !selectedLevel) {
      alert('Please select both domain and experience level to start the interview.');
      return;
    }

    setIsInterviewActive(true);
    setQuestionIndex(0);
    setInterviewHistory([]);
    setInterviewComplete(false);
    setFeedback('');

    const firstQuestion = await generateAIResponse('Start interview');
    setCurrentQuestion(firstQuestion);
    setInterviewHistory([{
      type: 'ai',
      content: firstQuestion,
      timestamp: new Date()
    }]);
  };

  const submitResponse = async () => {
    if (!userResponse.trim()) return;

    const newHistory = [...interviewHistory, {
      type: 'user',
      content: userResponse,
      timestamp: new Date()
    }];

    setInterviewHistory(newHistory);
    setUserResponse('');

    if (questionIndex >= 4) { // End after 5 questions
      setInterviewComplete(true);
      const feedbackText = await generateFeedback(newHistory);
      setFeedback(feedbackText);
      
      newHistory.push({
        type: 'ai',
        content: "Thank you for completing the interview! Here's your personalized feedback:",
        timestamp: new Date()
      });
      setInterviewHistory(newHistory);
    } else {
      const nextQuestion = await generateAIResponse(userResponse, newHistory);
      setCurrentQuestion(nextQuestion);
      setQuestionIndex(prev => prev + 1);
      
      newHistory.push({
        type: 'ai',
        content: nextQuestion,
        timestamp: new Date()
      });
      setInterviewHistory(newHistory);
    }
  };

  const endInterview = () => {
    setIsInterviewActive(false);
    setCurrentQuestion('');
    setQuestionIndex(0);
    setUserResponse('');
    setInterviewHistory([]);
    setInterviewComplete(false);
    setFeedback('');
  };

  const startVoiceRecognition = () => {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      const recognition = new SpeechRecognition();
      
      recognition.continuous = false;
      recognition.interimResults = false;
      recognition.lang = 'en-US';

      recognition.onstart = () => {
        setIsListening(true);
      };

      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setUserResponse(prev => prev + ' ' + transcript);
      };

      recognition.onerror = (event) => {
        console.error('Speech recognition error:', event.error);
        setIsListening(false);
      };

      recognition.onend = () => {
        setIsListening(false);
      };

      recognition.start();
    } else {
      alert('Speech recognition is not supported in your browser.');
    }
  };

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [interviewHistory]);

  if (!isInterviewActive) {
    return (
      <div className="ai-interview-setup">
        <div className="container">
          <div className="setup-content">
            <div className="setup-header">
              <h1>AI-Powered Mock Interview</h1>
              <p>Practice your interview skills with our AI interviewer. Get personalized feedback and improve your performance.</p>
            </div>

            <div className="setup-form">
              <div className="form-section">
                <h3>Select Your Domain</h3>
                <div className="options-grid">
                  {domains.map(domain => (
                    <div
                      key={domain.value}
                      className={`option-card ${selectedDomain === domain.value ? 'selected' : ''}`}
                      onClick={() => setSelectedDomain(domain.value)}
                    >
                      <div className="option-icon">{domain.icon}</div>
                      <div className="option-label">{domain.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="form-section">
                <h3>Select Your Experience Level</h3>
                <div className="options-grid">
                  {levels.map(level => (
                    <div
                      key={level.value}
                      className={`option-card ${selectedLevel === level.value ? 'selected' : ''}`}
                      onClick={() => setSelectedLevel(level.value)}
                    >
                      <div className="option-icon">{level.icon}</div>
                      <div className="option-label">{level.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="setup-actions">
                <button 
                  onClick={startInterview}
                  className="btn btn-primary btn-lg"
                  disabled={!selectedDomain || !selectedLevel}
                >
                  Start Interview
                </button>
              </div>
            </div>

            <div className="interview-tips">
              <h3>Interview Tips</h3>
              <div className="tips-grid">
                <div className="tip-item">
                  <div className="tip-icon">🎯</div>
                  <div className="tip-content">
                    <h4>Be Specific</h4>
                    <p>Provide concrete examples from your experience</p>
                  </div>
                </div>
                <div className="tip-item">
                  <div className="tip-icon">💭</div>
                  <div className="tip-content">
                    <h4>Think Aloud</h4>
                    <p>Explain your thought process as you work through problems</p>
                  </div>
                </div>
                <div className="tip-item">
                  <div className="tip-icon">❓</div>
                  <div className="tip-content">
                    <h4>Ask Questions</h4>
                    <p>Don't hesitate to ask for clarification when needed</p>
                  </div>
                </div>
                <div className="tip-item">
                  <div className="tip-icon">⏰</div>
                  <div className="tip-content">
                    <h4>Take Your Time</h4>
                    <p>Think before you speak, but don't take too long</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="ai-interview-active">
      <div className="interview-container">
        <div className="interview-header">
          <div className="interview-info">
            <h2>Mock Interview - {domains.find(d => d.value === selectedDomain)?.label}</h2>
            <p>Question {questionIndex + 1} of 5 • {levels.find(l => l.value === selectedLevel)?.label}</p>
          </div>
          <button onClick={endInterview} className="btn btn-outline">
            End Interview
          </button>
        </div>

        <div className="interview-content">
          <div className="chat-container" ref={chatContainerRef}>
            {interviewHistory.map((item, index) => (
              <div key={index} className={`message ${item.type}`}>
                <div className="message-avatar">
                  {item.type === 'ai' ? '🤖' : '👤'}
                </div>
                <div className="message-content">
                  <div className="message-text">
                    {item.type === 'ai' && item.content.includes('## Interview Feedback') ? (
                      <div className="feedback-content">
                        <pre>{item.content}</pre>
                      </div>
                    ) : (
                      item.content
                    )}
                  </div>
                  <div className="message-time">
                    {item.timestamp.toLocaleTimeString()}
                  </div>
                </div>
              </div>
            ))}
            
            {isLoading && (
              <div className="message ai">
                <div className="message-avatar">🤖</div>
                <div className="message-content">
                  <div className="typing-indicator">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {!interviewComplete && (
            <div className="response-section">
              <div className="response-input">
                <textarea
                  value={userResponse}
                  onChange={(e) => setUserResponse(e.target.value)}
                  placeholder="Type your response here..."
                  rows="4"
                  disabled={isLoading}
                />
                <div className="input-actions">
                  <button
                    onClick={startVoiceRecognition}
                    className={`btn btn-outline voice-btn ${isListening ? 'listening' : ''}`}
                    disabled={isLoading}
                  >
                    {isListening ? '🎙️ Listening...' : '🎤 Voice'}
                  </button>
                  <button
                    onClick={submitResponse}
                    className="btn btn-primary"
                    disabled={!userResponse.trim() || isLoading}
                  >
                    {isLoading ? 'Processing...' : 'Submit Response'}
                  </button>
                </div>
              </div>
            </div>
          )}

          {interviewComplete && feedback && (
            <div className="interview-complete">
              <div className="completion-actions">
                <button onClick={endInterview} className="btn btn-primary">
                  Start New Interview
                </button>
                <button 
                  onClick={() => window.print()} 
                  className="btn btn-outline"
                >
                  Save Feedback
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AIInterview;
