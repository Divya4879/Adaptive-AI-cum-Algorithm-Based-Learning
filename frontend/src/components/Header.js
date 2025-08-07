import React from 'react';
import './Header.css';

const Header = ({ currentView, onDashboard, onSubjects, studentData }) => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo-section">
          <div className="logo">
            <span className="logo-icon">🧠</span>
            <span className="logo-text">Adaptive AI Tutor</span>
          </div>
          {studentData && (
            <div className="quick-stats">
              <div className="stat-item">
                <span className="stat-value">{studentData.overall_stats?.accuracy_rate ? Math.round(studentData.overall_stats.accuracy_rate * 100) : 0}%</span>
                <span className="stat-label">Accuracy</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <span className="stat-value">{studentData.overall_stats?.total_questions || 0}</span>
                <span className="stat-label">Questions</span>
              </div>
            </div>
          )}
        </div>

        <nav className="nav-section">
          {currentView !== 'welcome' && (
            <>
              <button 
                className={`nav-button ${currentView === 'subjects' ? 'active' : ''}`}
                onClick={onSubjects}
              >
                <span className="nav-icon">📚</span>
                <span className="nav-text">Subjects</span>
              </button>
              
              <button 
                className={`nav-button ${currentView === 'dashboard' ? 'active' : ''}`}
                onClick={onDashboard}
              >
                <span className="nav-icon">📊</span>
                <span className="nav-text">Dashboard</span>
              </button>
            </>
          )}
        </nav>

        {studentData && (
          <div className="cognitive-indicator">
            <div className="cognitive-status">
              <div className={`cognitive-dot ${getCognitiveLoadClass(studentData)}`}></div>
              <span className="cognitive-text">
                {getCognitiveLoadText(studentData)}
              </span>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

const getCognitiveLoadClass = (studentData) => {
  // This would be calculated from recent cognitive load data
  // For now, using a simple heuristic based on accuracy
  const accuracy = studentData.overall_stats?.accuracy_rate || 0.5;
  if (accuracy > 0.8) return 'low';
  if (accuracy > 0.6) return 'moderate';
  return 'high';
};

const getCognitiveLoadText = (studentData) => {
  const loadClass = getCognitiveLoadClass(studentData);
  switch (loadClass) {
    case 'low': return 'Optimal Focus';
    case 'moderate': return 'Good Pace';
    case 'high': return 'Take a Break';
    default: return 'Learning';
  }
};

export default Header;
