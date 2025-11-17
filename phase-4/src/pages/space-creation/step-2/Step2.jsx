import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSpaceCreation } from '../../../context/SpaceCreationContext';
import './Step2.css';

const Step2 = () => {
  const navigate = useNavigate();
  const { formData, updateField, completeStep } = useSpaceCreation();
  const [description, setDescription] = useState(formData.description || '');
  const [validationErrors, setValidationErrors] = useState({});

  const validateStep = () => {
    const errors = {};

    if (!description.trim()) {
      errors.description = 'Description is required';
    }

    if (description.length < 50) {
      errors.description = 'Description must be at least 50 characters';
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleNext = () => {
    if (validateStep()) {
      updateField('description', description);
      completeStep();
      navigate('/space-creation/step-3');
      window.scrollTo(0, 0);
    }
  };

  const handleBack = () => {
    navigate('/space-creation/step-1');
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
            <div className="progress-fill" style={{ width: '28.56%' }}></div>
          </div>
          <p className="progress-text">Step 2 of 8</p>
        </div>

        {/* Main Content */}
        <div className="page-content">
          <h1 className="page-title">Add a short description of your storage space</h1>

          {/* Description Textarea */}
          <div className="form-group">
            <textarea
              className={`description-textarea ${
                validationErrors.description ? 'error' : ''
              }`}
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
                if (validationErrors.description) {
                  setValidationErrors((prev) => ({
                    ...prev,
                    description: '',
                  }));
                }
              }}
              placeholder="Tell renters about the space — its size, condition, and any useful details like accessibility or temperature control. (e.g., 'This is a 3 × 4 m unit with shelves, lighting, and easy car access.')"
              rows="10"
            />

            {/* Character Count */}
            <div className="char-count">
              {description.length}/500 characters
            </div>

            {validationErrors.description && (
              <p className="error-message">{validationErrors.description}</p>
            )}
          </div>

          {/* Navigation Button */}
          <div className="button-container">
            <button className="btn-next" onClick={handleNext}>
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step2;
