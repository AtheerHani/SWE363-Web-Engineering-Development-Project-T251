import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSpaceCreation } from '../../../context/SpaceCreationContext';
import './Step7.css';

const Step7 = () => {
  const navigate = useNavigate();
  const { formData, completeStep } = useSpaceCreation();

  const handlePostSpace = () => {
    completeStep();
    navigate('/space-creation/step-8');
    window.scrollTo(0, 0);
  };

  const handleBack = () => {
    navigate('/space-creation/step-6');
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
            <div className="progress-fill" style={{ width: '87.5%' }}></div>
          </div>
          <p className="progress-text">Step 7 of 8</p>
        </div>

        {/* Main Content */}
        <div className="page-content">
          <h1 className="page-title">Review and post your storage space</h1>

          {/* Review Summary */}
          <div className="review-container">
            <div className="review-section">
              <h3>Storage Types</h3>
              <p className="review-value">
                {formData.storageTypes && formData.storageTypes.join(', ')}
              </p>
            </div>

            <div className="review-section">
              <h3>Description</h3>
              <p className="review-value">{formData.description}</p>
            </div>

            <div className="review-section">
              <h3>Features</h3>
              <p className="review-value">
                {formData.features && formData.features.join(', ')}
              </p>
            </div>

            <div className="review-section">
              <h3>Pricing</h3>
              <p className="review-value">
                {formData.startingPrice} - {formData.endingPrice} {formData.billingFrequency}
              </p>
            </div>

            <div className="review-section">
              <h3>Location</h3>
              <p className="review-value">
                {formData.location?.street || ''}
                {formData.location?.district ? `, ${formData.location.district}` : ''}
                {formData.location?.city ? `, ${formData.location.city}` : ''}
              </p>
            </div>

            <div className="review-section">
              <h3>Photos</h3>
              <p className="review-value">
                {formData.photos?.length || 0} photo(s) uploaded
              </p>
            </div>
          </div>

          {/* Info Message */}
          <div className="info-message">
            <p>
              Double-check your details before publishing. You can always edit your listing
              later from your dashboard.
            </p>
          </div>

          {/* Navigation Button */}
          <div className="button-container">
            <button className="btn-post" onClick={handlePostSpace}>
              Post My Space
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step7;
