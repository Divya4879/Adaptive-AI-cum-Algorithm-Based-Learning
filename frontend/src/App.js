import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>🧠 Adaptive AI Tutor</h1>
        <p>Intelligent learning that adapts to your cognitive load</p>
      </header>
      
      <main className="container">
        <div className="card">
          <h2>Welcome to Your Personalized Learning Experience</h2>
          <p>
            This AI tutor uses advanced algorithms to adapt to your learning pace and cognitive load,
            ensuring optimal learning efficiency.
          </p>
          
          <div className="features">
            <div className="feature">
              <h3>🎯 Adaptive Difficulty</h3>
              <p>Questions automatically adjust based on your performance and mental state</p>
            </div>
            
            <div className="feature">
              <h3>🧠 Cognitive Load Detection</h3>
              <p>Real-time monitoring of your mental fatigue and response patterns</p>
            </div>
            
            <div className="feature">
              <h3>📊 Personalized Analytics</h3>
              <p>Track your progress with detailed insights and recommendations</p>
            </div>
          </div>
          
          <div className="cta">
            <button className="btn btn-primary">Start Learning Session</button>
            <button className="btn btn-secondary">View Dashboard</button>
          </div>
        </div>
        
        <div className="card">
          <h3>🏆 AlgoFest Hackathon Project</h3>
          <p>
            Built for AlgoFest 2025 - showcasing the power of Bayesian inference 
            and multi-armed bandit algorithms in educational technology.
          </p>
          
          <div className="tech-stack">
            <span className="tech-tag">React</span>
            <span className="tech-tag">Flask</span>
            <span className="tech-tag">PyTorch</span>
            <span className="tech-tag">PostgreSQL</span>
            <span className="tech-tag">Bayesian ML</span>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
