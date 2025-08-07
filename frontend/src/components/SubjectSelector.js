import React, { useState, useEffect } from 'react';
import './SubjectSelector.css';

const SubjectSelector = ({ onSelectSubject }) => {
  const [subjects, setSubjects] = useState({});
  const [loading, setLoading] = useState(true);
  const [selectedSubject, setSelectedSubject] = useState(null);

  useEffect(() => {
    fetchSubjects();
  }, []);

  const fetchSubjects = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/subjects');
      const data = await response.json();
      if (data.success) {
        setSubjects(data.subjects);
      }
    } catch (error) {
      console.error('Error fetching subjects:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubjectSelect = (subjectId) => {
    setSelectedSubject(subjectId);
    setTimeout(() => {
      onSelectSubject(subjectId);
    }, 300);
  };

  const getSubjectIcon = (subjectId) => {
    const icons = {
      frontend_web_dev: '🎨',
      backend_web_dev: '⚙️',
      software_engineering: '🏗️',
      cloud_computing: '☁️'
    };
    return icons[subjectId] || '📚';
  };

  const getSubjectGradient = (subjectId) => {
    const gradients = {
      frontend_web_dev: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      backend_web_dev: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      software_engineering: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      cloud_computing: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
    };
    return gradients[subjectId] || 'var(--gradient-accent)';
  };

  if (loading) {
    return (
      <div className="subject-selector-loading">
        <div className="loading-spinner"></div>
        <p>Loading subjects...</p>
      </div>
    );
  }

  return (
    <div className="subject-selector">
      <div className="selector-header">
        <h1 className="selector-title">Choose Your Learning Path</h1>
        <p className="selector-subtitle">
          Select a subject to begin your personalized adaptive learning experience
        </p>
      </div>

      <div className="subjects-grid">
        {Object.entries(subjects).map(([subjectId, subjectInfo]) => (
          <div
            key={subjectId}
            className={`subject-card ${selectedSubject === subjectId ? 'selected' : ''}`}
            onClick={() => handleSubjectSelect(subjectId)}
            style={{
              '--subject-gradient': getSubjectGradient(subjectId)
            }}
          >
            <div className="subject-card-inner">
              <div className="subject-header">
                <div className="subject-icon">
                  {getSubjectIcon(subjectId)}
                </div>
                <div className="subject-badge">
                  {subjectInfo.question_count} questions
                </div>
              </div>

              <div className="subject-content">
                <h3 className="subject-name">{subjectInfo.name}</h3>
                <p className="subject-description">{subjectInfo.description}</p>
                
                <div className="subject-meta">
                  <div className="difficulty-range">
                    <span className="meta-label">Difficulty Range:</span>
                    <div className="difficulty-indicators">
                      {Array.from({ length: 10 }, (_, i) => (
                        <div
                          key={i}
                          className={`difficulty-dot ${
                            i + 1 >= subjectInfo.difficulty_range[0] && 
                            i + 1 <= subjectInfo.difficulty_range[1] 
                              ? 'active' : ''
                          }`}
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="subject-footer">
                <div className="start-button">
                  <span className="button-text">Start Learning</span>
                  <span className="button-arrow">→</span>
                </div>
              </div>
            </div>

            <div className="subject-glow"></div>
          </div>
        ))}
      </div>

      <div className="selector-footer">
        <div className="ai-features">
          <div className="feature-item">
            <div className="feature-icon">🧠</div>
            <div className="feature-text">
              <strong>Cognitive Load Detection</strong>
              <span>Real-time mental fatigue monitoring</span>
            </div>
          </div>
          <div className="feature-item">
            <div className="feature-icon">🎯</div>
            <div className="feature-text">
              <strong>Adaptive Difficulty</strong>
              <span>Questions adjust to your skill level</span>
            </div>
          </div>
          <div className="feature-item">
            <div className="feature-icon">📊</div>
            <div className="feature-text">
              <strong>Progress Tracking</strong>
              <span>Detailed analytics and insights</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubjectSelector;
