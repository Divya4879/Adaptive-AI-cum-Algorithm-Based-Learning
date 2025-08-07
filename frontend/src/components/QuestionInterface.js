import React, { useState, useEffect, useRef } from 'react';
import './QuestionInterface.css';

const QuestionInterface = ({ studentId, subject, onComplete }) => {
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState(null);
  const [questionCount, setQuestionCount] = useState(0);
  const [startTime, setStartTime] = useState(null);
  const [adaptiveInfo, setAdaptiveInfo] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  
  const questionStartRef = useRef(null);

  useEffect(() => {
    loadNextQuestion();
  }, []);

  const loadNextQuestion = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/question/next', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          student_id: studentId,
          subject: subject
        }),
      });

      const data = await response.json();
      if (data.success) {
        setCurrentQuestion(data.question);
        setAdaptiveInfo(data.adaptive_info);
        setSelectedAnswer('');
        setFeedback(null);
        setShowFeedback(false);
        setStartTime(Date.now());
        setQuestionCount(prev => prev + 1);
      }
    } catch (error) {
      console.error('Error loading question:', error);
    }
  };

  const submitAnswer = async () => {
    if (!selectedAnswer || isSubmitting) return;

    setIsSubmitting(true);
    const responseTime = (Date.now() - startTime) / 1000;

    try {
      const response = await fetch('http://localhost:5000/api/answer/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          student_id: studentId,
          question_id: currentQuestion.question_id,
          student_answer: selectedAnswer,
          response_time: responseTime,
          question_data: currentQuestion
        }),
      });

      const data = await response.json();
      if (data.success) {
        setFeedback(data);
        setShowFeedback(true);
      }
    } catch (error) {
      console.error('Error submitting answer:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleNextQuestion = () => {
    if (questionCount >= 10) {
      onComplete();
    } else {
      loadNextQuestion();
    }
  };

  const getSubjectName = (subjectId) => {
    const names = {
      frontend_web_dev: 'Frontend Web Development',
      backend_web_dev: 'Backend Web Development',
      software_engineering: 'Software Engineering',
      cloud_computing: 'Cloud Computing'
    };
    return names[subjectId] || subjectId;
  };

  const getCognitiveLoadColor = (level) => {
    const colors = {
      low: '#48bb78',
      moderate: '#ed8936',
      high: '#f56565',
      critical: '#e53e3e'
    };
    return colors[level] || '#ed8936';
  };

  if (!currentQuestion) {
    return (
      <div className="question-loading">
        <div className="loading-spinner"></div>
        <p>Loading your personalized question...</p>
      </div>
    );
  }

  return (
    <div className="question-interface">
      <div className="question-header">
        <div className="subject-info">
          <h2 className="subject-title">{getSubjectName(subject)}</h2>
          <div className="question-meta">
            <span className="question-number">Question {questionCount}/10</span>
            <div className="difficulty-indicator">
              <span className="difficulty-label">Difficulty:</span>
              <div className="difficulty-level">
                {Array.from({ length: 10 }, (_, i) => (
                  <div
                    key={i}
                    className={`difficulty-dot ${
                      i < (adaptiveInfo?.recommended_difficulty || 5) ? 'active' : ''
                    }`}
                  ></div>
                ))}
                <span className="difficulty-number">
                  {adaptiveInfo?.recommended_difficulty || 5}/10
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="cognitive-status">
          <div className="status-indicator">
            <div 
              className="status-dot"
              style={{ 
                backgroundColor: getCognitiveLoadColor(adaptiveInfo?.cognitive_load_level),
                boxShadow: `0 0 15px ${getCognitiveLoadColor(adaptiveInfo?.cognitive_load_level)}40`
              }}
            ></div>
            <div className="status-text">
              <span className="status-label">Cognitive Load</span>
              <span className="status-value">
                {adaptiveInfo?.cognitive_load_level || 'Moderate'}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="question-content">
        <div className="question-card glass-card">
          <div className="question-text">
            <h3>{currentQuestion.question_text}</h3>
          </div>

          <div className="answer-options">
            {currentQuestion.options?.map((option, index) => (
              <button
                key={index}
                className={`option-button ${selectedAnswer === option ? 'selected' : ''}`}
                onClick={() => setSelectedAnswer(option)}
                disabled={showFeedback}
              >
                <span className="option-letter">{String.fromCharCode(65 + index)}</span>
                <span className="option-text">{option}</span>
                {showFeedback && option === currentQuestion.correct_answer && (
                  <span className="correct-indicator">✓</span>
                )}
                {showFeedback && selectedAnswer === option && option !== currentQuestion.correct_answer && (
                  <span className="incorrect-indicator">✗</span>
                )}
              </button>
            ))}
          </div>

          <div className="question-actions">
            {!showFeedback ? (
              <button
                className="submit-button btn-primary"
                onClick={submitAnswer}
                disabled={!selectedAnswer || isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className="loading-spinner small"></div>
                    <span>Analyzing...</span>
                  </>
                ) : (
                  <>
                    <span>Submit Answer</span>
                    <span className="submit-arrow">→</span>
                  </>
                )}
              </button>
            ) : (
              <button
                className="next-button btn-primary"
                onClick={handleNextQuestion}
              >
                <span>{questionCount >= 10 ? 'View Results' : 'Next Question'}</span>
                <span className="next-arrow">→</span>
              </button>
            )}
          </div>
        </div>

        {showFeedback && (
          <div className="feedback-card glass-card">
            <div className={`feedback-header ${feedback.result.is_correct ? 'correct' : 'incorrect'}`}>
              <div className="feedback-icon">
                {feedback.result.is_correct ? '🎉' : '💡'}
              </div>
              <div className="feedback-title">
                {feedback.result.is_correct ? 'Excellent!' : 'Good Attempt!'}
              </div>
            </div>

            <div className="feedback-content">
              <p className="feedback-text">{feedback.result.explanation}</p>
              
              {adaptiveInfo?.reasoning && (
                <div className="ai-reasoning">
                  <h4>🧠 AI Reasoning</h4>
                  <p>{adaptiveInfo.reasoning}</p>
                </div>
              )}

              {feedback.next_recommendations?.length > 0 && (
                <div className="recommendations">
                  <h4>💡 Recommendations</h4>
                  <ul>
                    {feedback.next_recommendations.map((rec, index) => (
                      <li key={index}>{rec}</li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="learning-progress">
                <div className="progress-item">
                  <span className="progress-label">Knowledge Level:</span>
                  <div className="progress-bar">
                    <div 
                      className="progress-fill"
                      style={{ 
                        width: `${(feedback.learning_progress.updated_knowledge_estimate * 100)}%` 
                      }}
                    ></div>
                  </div>
                  <span className="progress-value">
                    {Math.round(feedback.learning_progress.updated_knowledge_estimate * 100)}%
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="progress-footer">
        <div className="session-progress">
          <div className="progress-bar-container">
            <div className="progress-label">Session Progress</div>
            <div className="progress-bar">
              <div 
                className="progress-fill"
                style={{ width: `${(questionCount / 10) * 100}%` }}
              ></div>
            </div>
            <div className="progress-text">{questionCount}/10 questions</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionInterface;
