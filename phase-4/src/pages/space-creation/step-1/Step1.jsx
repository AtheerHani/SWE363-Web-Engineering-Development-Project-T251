import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSpaceCreation } from '../../../context/SpaceCreationContext';
import './Step1.css';

const Step1 = () => {
  const navigate = useNavigate();
  const { formData, updateField, goToNextStep, completeStep, setStepErrors, clearErrors } =
    useSpaceCreation();

  const [localData, setLocalData] = useState({
    spaceName: formData.spaceName || '',
    spaceType: formData.spaceType || '',
    description: formData.description || '',
  });

  const [validationErrors, setValidationErrors] = useState({});

  // Validate step
  const validateStep = () => {
    const errors = {};

    if (!localData.spaceName.trim()) {
      errors.spaceName = 'Space name is required';
    }

    if (!localData.spaceType) {
      errors.spaceType = 'Please select a space type';
    }

    if (!localData.description.trim()) {
      errors.description = 'Description is required';
    }

    if (localData.description.length < 20) {
      errors.description = 'Description must be at least 20 characters';
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLocalData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error for this field
    if (validationErrors[name]) {
      setValidationErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const handleNext = () => {
    if (validateStep()) {
      updateField('spaceName', localData.spaceName);
      updateField('spaceType', localData.spaceType);
      updateField('description', localData.description);
      completeStep();
      clearErrors();
      goToNextStep();
      window.scrollTo(0, 0);
    }
  };

  const handleBack = () => {
    navigate('/');
  };

  return (
    <div className="space-creation-container step-1-container">
      <div className="step-header">
        <h1>Tell us about your space</h1>
        <p>Step 1 of 7</p>
      </div>

      <div className="step-content">
        <div className="form-section">
          {/* Space Name */}
          <div className="form-group">
            <label htmlFor="spaceName">Space Name *</label>
            <input
              type="text"
              id="spaceName"
              name="spaceName"
              value={localData.spaceName}
              onChange={handleInputChange}
              placeholder="e.g., Cozy Studio in Downtown"
              className={validationErrors.spaceName ? 'error' : ''}
            />
            {validationErrors.spaceName && (
              <span className="error-message">{validationErrors.spaceName}</span>
            )}
          </div>

          {/* Space Type */}
          <div className="form-group">
            <label htmlFor="spaceType">Space Type *</label>
            <select
              id="spaceType"
              name="spaceType"
              value={localData.spaceType}
              onChange={handleInputChange}
              className={validationErrors.spaceType ? 'error' : ''}
            >
              <option value="">Select a space type</option>
              <option value="room">Room</option>
              <option value="storage">Storage Unit</option>
              <option value="office">Office Space</option>
              <option value="garage">Garage/Parking</option>
              <option value="warehouse">Warehouse</option>
              <option value="other">Other</option>
            </select>
            {validationErrors.spaceType && (
              <span className="error-message">{validationErrors.spaceType}</span>
            )}
          </div>

          {/* Description */}
          <div className="form-group">
            <label htmlFor="description">Description *</label>
            <textarea
              id="description"
              name="description"
              value={localData.description}
              onChange={handleInputChange}
              placeholder="Describe your space in detail (minimum 20 characters)"
              rows="6"
              className={validationErrors.description ? 'error' : ''}
            />
            <div className="char-count">
              {localData.description.length}/500 characters
            </div>
            {validationErrors.description && (
              <span className="error-message">{validationErrors.description}</span>
            )}
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="step-navigation">
        <button className="btn-back" onClick={handleBack}>
          ← Back
        </button>
        <button className="btn-next" onClick={handleNext}>
          Next Step →
        </button>
      </div>
    </div>
  );
};

export default Step1;
