import React from 'react';
import './LoadingScreen.css';

const LoadingScreen = ({ message = "Initializing your personalized learning experience..." }) => {
  return (
    <div className="loading-screen">
      <div className="loading-content">
        <div className="loading-animation">
          <div className="neural-network">
            <div className="node node-1"></div>
            <div className="node node-2"></div>
            <div className="node node-3"></div>
            <div className="node node-4"></div>
            <div className="connection connection-1"></div>
            <div className="connection connection-2"></div>
            <div className="connection connection-3"></div>
            <div className="connection connection-4"></div>
          </div>
        </div>
        
        <div className="loading-text">
          <h2 className="loading-title">Adaptive AI Tutor</h2>
          <p className="loading-message">{message}</p>
          
          <div className="loading-steps">
            <div className="step active">
              <div className="step-dot"></div>
              <span>Initializing ML algorithms</span>
            </div>
            <div className="step">
              <div className="step-dot"></div>
              <span>Setting up cognitive load detection</span>
            </div>
            <div className="step">
              <div className="step-dot"></div>
              <span>Preparing adaptive questions</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="loading-progress">
        <div className="progress-bar">
          <div className="progress-fill"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
