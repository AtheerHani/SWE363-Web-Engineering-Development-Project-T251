import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Step8.css';

const Step8 = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/home');
  };

  const handleBack = () => {
    navigate('/space-creation/step-7');
  };

  return (
    <div className="space-creation-page">

      <div className="page-wrapper">
        {/* Back Button */}
        <button className="back-button" onClick={handleBack}>
          <span className="arrow">←</span> Back
        </button>

        {/* Progress Bar */}
        <div className="progress-bar-container">
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: '100%' }}></div>
          </div>
          <p className="progress-text">Step 8 of 8</p>
        </div>

        {/* Main Content - Confirmation */}
        <div className="confirmation-content">
          {/* Success Icon */}
          <div className="success-icon">✓</div>

          {/* Main Message */}
          <h1 className="confirmation-title">
            Your Space post is now under review by our team.
          </h1>

          {/* Subtext */}
          <p className="confirmation-message">
            We'll notify you once it's approved or rejected
          </p>

          {/* Additional Info */}
          <p className="confirmation-subtext">
            Double-check your details before publishing. You can always edit your listing later
            from your dashboard.
          </p>

          {/* Navigation Button */}
          <div className="button-container">
            <button className="btn-home" onClick={handleGoHome}>
              Go back to homepage
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step8;