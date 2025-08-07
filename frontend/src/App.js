import React, { useState, useEffect } from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import QuestionInterface from './components/QuestionInterface';
import SubjectSelector from './components/SubjectSelector';
import Header from './components/Header';
import LoadingScreen from './components/LoadingScreen';

function App() {
  const [currentView, setCurrentView] = useState('welcome');
  const [studentId, setStudentId] = useState(null);
  const [currentSubject, setCurrentSubject] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [studentData, setStudentData] = useState(null);

  // Initialize student on first load
  useEffect(() => {
    const initializeStudent = async () => {
      const storedStudentId = localStorage.getItem('adaptive_tutor_student_id');
      if (storedStudentId) {
        setStudentId(storedStudentId);
        await loadStudentData(storedStudentId);
      }
    };
    
    initializeStudent();
  }, []);

  const loadStudentData = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/api/dashboard/${id}`);
      const data = await response.json();
      if (data.success) {
        setStudentData(data.dashboard);
      }
    } catch (error) {
      console.error('Error loading student data:', error);
    }
  };

  const createStudent = async () => {
    setIsLoading(true);
    try {
      const newStudentId = `student_${Date.now()}`;
      const response = await fetch('http://localhost:5000/api/student/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          student_id: newStudentId,
          session_id: `session_${Date.now()}`
        }),
      });

      const data = await response.json();
      if (data.success) {
        setStudentId(newStudentId);
        localStorage.setItem('adaptive_tutor_student_id', newStudentId);
        await loadStudentData(newStudentId);
        setCurrentView('subjects');
      }
    } catch (error) {
      console.error('Error creating student:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const startLearning = (subject) => {
    setCurrentSubject(subject);
    setCurrentView('learning');
  };

  const goToDashboard = () => {
    setCurrentView('dashboard');
    if (studentId) {
      loadStudentData(studentId);
    }
  };

  const goToSubjects = () => {
    setCurrentView('subjects');
  };

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="App">
      <Header 
        currentView={currentView}
        onDashboard={goToDashboard}
        onSubjects={goToSubjects}
        studentData={studentData}
      />
      
      <main className="main-content">
        {currentView === 'welcome' && (
          <div className="welcome-screen">
            <div className="welcome-content">
              <div className="hero-section">
                <h1 className="hero-title">
                  <span className="gradient-text">Adaptive AI Tutor</span>
                </h1>
                <p className="hero-subtitle">
                  Intelligent learning that adapts to your cognitive load and pace
                </p>
                <div className="hero-features">
                  <div className="feature-pill">
                    <span className="feature-icon">🧠</span>
                    Bayesian Cognitive Load Detection
                  </div>
                  <div className="feature-pill">
                    <span className="feature-icon">🎯</span>
                    Thompson Sampling Adaptation
                  </div>
                  <div className="feature-pill">
                    <span className="feature-icon">📚</span>
                    Subject-Specific Learning
                  </div>
                </div>
              </div>
              
              <div className="cta-section">
                <button className="cta-button" onClick={createStudent}>
                  <span className="button-text">Start Your Learning Journey</span>
                  <span className="button-arrow">→</span>
                </button>
                <p className="cta-description">
                  Personalized tech education across Frontend, Backend, Software Engineering, and Cloud Computing
                </p>
              </div>
            </div>
            
            <div className="background-animation">
              <div className="floating-element element-1"></div>
              <div className="floating-element element-2"></div>
              <div className="floating-element element-3"></div>
            </div>
          </div>
        )}

        {currentView === 'subjects' && (
          <SubjectSelector onSelectSubject={startLearning} />
        )}

        {currentView === 'learning' && (
          <QuestionInterface 
            studentId={studentId}
            subject={currentSubject}
            onComplete={goToDashboard}
          />
        )}

        {currentView === 'dashboard' && (
          <Dashboard 
            studentId={studentId}
            studentData={studentData}
            onStartLearning={startLearning}
          />
        )}
      </main>
    </div>
  );
}

export default App;
