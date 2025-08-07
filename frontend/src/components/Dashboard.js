import React, { useState, useEffect } from 'react';
import './Dashboard.css';

const Dashboard = ({ studentId, studentData, onStartLearning }) => {
  const [cognitiveAnalytics, setCognitiveAnalytics] = useState(null);
  const [performanceAnalytics, setPerformanceAnalytics] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (studentId) {
      loadAnalytics();
    }
  }, [studentId]);

  const loadAnalytics = async () => {
    try {
      const [cognitiveResponse, performanceResponse] = await Promise.all([
        fetch(`http://localhost:5000/api/analytics/cognitive-load/${studentId}`),
        fetch(`http://localhost:5000/api/analytics/performance/${studentId}`)
      ]);

      const cognitiveData = await cognitiveResponse.json();
      const performanceData = await performanceResponse.json();

      if (cognitiveData.success) {
        setCognitiveAnalytics(cognitiveData.cognitive_analytics);
      }
      if (performanceData.success) {
        setPerformanceAnalytics(performanceData.performance_analytics);
      }
    } catch (error) {
      console.error('Error loading analytics:', error);
    } finally {
      setLoading(false);
    }
  };

  const getSubjectName = (subjectId) => {
    const names = {
      frontend_web_dev: 'Frontend Web Dev',
      backend_web_dev: 'Backend Web Dev',
      software_engineering: 'Software Engineering',
      cloud_computing: 'Cloud Computing'
    };
    return names[subjectId] || subjectId;
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

  const getTrendIcon = (trend) => {
    const icons = {
      excellent: '🚀',
      good: '📈',
      fair: '📊',
      needs_improvement: '📉',
      improving: '⬆️',
      declining: '⬇️',
      stable: '➡️'
    };
    return icons[trend] || '📊';
  };

  const getTrendColor = (trend) => {
    const colors = {
      excellent: '#48bb78',
      good: '#68d391',
      fair: '#ed8936',
      needs_improvement: '#f56565',
      improving: '#48bb78',
      declining: '#f56565',
      stable: '#ed8936'
    };
    return colors[trend] || '#ed8936';
  };

  if (loading) {
    return (
      <div className="dashboard-loading">
        <div className="loading-spinner"></div>
        <p>Loading your learning analytics...</p>
      </div>
    );
  }

  if (!studentData) {
    return (
      <div className="dashboard-empty">
        <div className="empty-state">
          <div className="empty-icon">📊</div>
          <h2>No Learning Data Yet</h2>
          <p>Start learning to see your personalized analytics and progress tracking.</p>
          <button className="btn-primary" onClick={() => onStartLearning('frontend_web_dev')}>
            Start Learning
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1 className="dashboard-title">Learning Dashboard</h1>
        <p className="dashboard-subtitle">
          Your personalized AI-powered learning analytics and insights
        </p>
      </div>

      {/* Overall Stats */}
      <div className="stats-grid">
        <div className="stat-card glass-card">
          <div className="stat-icon">🎯</div>
          <div className="stat-content">
            <div className="stat-value">
              {Math.round((studentData.overall_stats?.accuracy_rate || 0) * 100)}%
            </div>
            <div className="stat-label">Overall Accuracy</div>
          </div>
        </div>

        <div className="stat-card glass-card">
          <div className="stat-icon">📚</div>
          <div className="stat-content">
            <div className="stat-value">
              {studentData.overall_stats?.total_questions || 0}
            </div>
            <div className="stat-label">Questions Answered</div>
          </div>
        </div>

        <div className="stat-card glass-card">
          <div className="stat-icon">⏱️</div>
          <div className="stat-content">
            <div className="stat-value">
              {Math.round(studentData.overall_stats?.average_response_time || 0)}s
            </div>
            <div className="stat-label">Avg Response Time</div>
          </div>
        </div>

        <div className="stat-card glass-card">
          <div className="stat-icon">🧠</div>
          <div className="stat-content">
            <div className="stat-value">
              {cognitiveAnalytics?.current_load_level || 'Moderate'}
            </div>
            <div className="stat-label">Cognitive Load</div>
          </div>
        </div>
      </div>

      {/* Subject Performance */}
      <div className="dashboard-section">
        <h2 className="section-title">Subject Performance</h2>
        <div className="subjects-grid">
          {Object.entries(studentData.subject_profiles || {}).map(([subjectId, profile]) => (
            <div key={subjectId} className="subject-card glass-card">
              <div className="subject-header">
                <div className="subject-info">
                  <div className="subject-icon">{getSubjectIcon(subjectId)}</div>
                  <div className="subject-details">
                    <h3 className="subject-name">{getSubjectName(subjectId)}</h3>
                    <div className="subject-stats">
                      <span className="interactions-count">
                        {profile.interactions} questions
                      </span>
                    </div>
                  </div>
                </div>
                <div className="trend-indicator">
                  <div 
                    className="trend-icon"
                    style={{ color: getTrendColor(profile.performance_trend) }}
                  >
                    {getTrendIcon(profile.performance_trend)}
                  </div>
                </div>
              </div>

              <div className="subject-metrics">
                <div className="metric">
                  <div className="metric-label">Knowledge Level</div>
                  <div className="progress-bar">
                    <div 
                      className="progress-fill"
                      style={{ width: `${profile.knowledge_level * 100}%` }}
                    ></div>
                  </div>
                  <div className="metric-value">
                    {Math.round(profile.knowledge_level * 100)}%
                  </div>
                </div>

                <div className="metric">
                  <div className="metric-label">Recent Accuracy</div>
                  <div className="progress-bar">
                    <div 
                      className="progress-fill"
                      style={{ width: `${profile.recent_accuracy * 100}%` }}
                    ></div>
                  </div>
                  <div className="metric-value">
                    {Math.round(profile.recent_accuracy * 100)}%
                  </div>
                </div>

                <div className="metric">
                  <div className="metric-label">Optimal Difficulty</div>
                  <div className="difficulty-indicator">
                    {Array.from({ length: 10 }, (_, i) => (
                      <div
                        key={i}
                        className={`difficulty-dot ${
                          i < Math.round(profile.optimal_difficulty) ? 'active' : ''
                        }`}
                      ></div>
                    ))}
                  </div>
                  <div className="metric-value">
                    {Math.round(profile.optimal_difficulty)}/10
                  </div>
                </div>
              </div>

              <div className="subject-actions">
                <button 
                  className="continue-button btn-secondary"
                  onClick={() => onStartLearning(subjectId)}
                >
                  Continue Learning
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Cognitive Load Analytics */}
      {cognitiveAnalytics && (
        <div className="dashboard-section">
          <h2 className="section-title">Cognitive Load Analysis</h2>
          <div className="analytics-grid">
            <div className="analytics-card glass-card">
              <h3 className="card-title">Current Status</h3>
              <div className="cognitive-status-display">
                <div className="status-circle">
                  <div 
                    className="status-indicator"
                    style={{
                      background: `conic-gradient(var(--accent-cyan) ${cognitiveAnalytics.average_load * 360}deg, var(--glass-border) 0deg)`
                    }}
                  >
                    <div className="status-inner">
                      <div className="status-value">
                        {Math.round(cognitiveAnalytics.average_load * 100)}%
                      </div>
                      <div className="status-label">Load</div>
                    </div>
                  </div>
                </div>
                <div className="status-details">
                  <div className="detail-item">
                    <span className="detail-label">Current Level:</span>
                    <span className="detail-value">{cognitiveAnalytics.current_load_level}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Trend:</span>
                    <span className="detail-value">{cognitiveAnalytics.load_trend}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Max Load:</span>
                    <span className="detail-value">{Math.round(cognitiveAnalytics.maximum_load * 100)}%</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="analytics-card glass-card">
              <h3 className="card-title">Recommendations</h3>
              <div className="recommendations-list">
                {cognitiveAnalytics.recommendations?.map((rec, index) => (
                  <div key={index} className="recommendation-item">
                    <div className="recommendation-icon">💡</div>
                    <div className="recommendation-text">{rec}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Learning Insights */}
      {studentData.learning_recommendations && (
        <div className="dashboard-section">
          <h2 className="section-title">AI Learning Insights</h2>
          <div className="insights-grid">
            {studentData.learning_recommendations.map((insight, index) => (
              <div key={index} className="insight-card glass-card">
                <div className="insight-icon">🤖</div>
                <div className="insight-content">
                  <p>{insight}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Quick Actions */}
      <div className="dashboard-section">
        <h2 className="section-title">Quick Actions</h2>
        <div className="actions-grid">
          <button 
            className="action-card glass-card"
            onClick={() => onStartLearning('frontend_web_dev')}
          >
            <div className="action-icon">🎨</div>
            <div className="action-content">
              <h3>Frontend Practice</h3>
              <p>Continue with React and JavaScript</p>
            </div>
          </button>

          <button 
            className="action-card glass-card"
            onClick={() => onStartLearning('backend_web_dev')}
          >
            <div className="action-icon">⚙️</div>
            <div className="action-content">
              <h3>Backend Practice</h3>
              <p>Work on APIs and databases</p>
            </div>
          </button>

          <button 
            className="action-card glass-card"
            onClick={() => onStartLearning('software_engineering')}
          >
            <div className="action-icon">🏗️</div>
            <div className="action-content">
              <h3>System Design</h3>
              <p>Practice architecture patterns</p>
            </div>
          </button>

          <button 
            className="action-card glass-card"
            onClick={() => onStartLearning('cloud_computing')}
          >
            <div className="action-icon">☁️</div>
            <div className="action-content">
              <h3>Cloud Computing</h3>
              <p>Learn AWS, Azure, and GCP</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
