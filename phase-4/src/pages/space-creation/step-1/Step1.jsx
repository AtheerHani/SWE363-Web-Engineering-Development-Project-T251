import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSpaceCreation } from '../../../context/SpaceCreationContext';
import './Step1.css';

const Step1 = () => {
  const navigate = useNavigate();
  const { formData, updateField, completeStep } = useSpaceCreation();
  const [selectedTypes, setSelectedTypes] = useState(
    formData.storageTypes || []
  );
  const [validationErrors, setValidationErrors] = useState({});

  const storageOptions = [
    { id: 'basement', label: 'Basement', icon: '/assets/icons/basement.png' },
    { id: 'household', label: 'Household Room', icon: '/assets/icons/household-room.png' },
    { id: 'garage', label: 'Garage', icon: '/assets/icons/garage.png' },
    { id: 'docs', label: 'Docs Locker', icon: '/assets/icons/docs-locker.png' },
  ];

  // Single-selection only: selecting a new type replaces the previous selection.
  const handleTypeSelect = (typeId) => {
    setSelectedTypes((prev) => {
      if (prev.includes(typeId)) {
        return []; // toggle off if already selected
      } else {
        return [typeId]; // replace with the new single selection
      }
    });

    if (validationErrors.storageTypes) {
      setValidationErrors((prev) => ({
        ...prev,
        storageTypes: '',
      }));
    }
  };

  const validateStep = () => {
    const errors = {};

    if (selectedTypes.length === 0) {
      errors.storageTypes = 'Please select one storage type';
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleNext = () => {
    if (validateStep()) {
      updateField('storageTypes', selectedTypes);
      completeStep();
      navigate('/space-creation/step-2');
      window.scrollTo(0, 0);
    }
  };

  // On the first step, replace "Back" with a link to the homepage.
  const handleBack = () => {
    navigate('/home');
  };

  return (
    <div className="space-creation-page">

      <div className="page-wrapper">
        {/* Go to homepage (first step) */}
        <button className="back-button" onClick={handleBack}>
          <span className="arrow">←</span> Go to homepage
        </button>

        {/* Progress Bar */}
        <div className="progress-bar-container">
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: '14.28%' }}></div>
          </div>
          <p className="progress-text">Step 1 of 8</p>
        </div>

        {/* Main Content */}
        <div className="page-content">
          <h1 className="page-title">
            What kind of storage rooms do you offer for rent?
          </h1>

          {/* Storage Type Selection Grid */}
          <div className="selection-grid">
            {storageOptions.map((option) => (
              <div
                key={option.id}
                className={`selection-card ${
                  selectedTypes.includes(option.id) ? 'selected' : ''
                }`}
                onClick={() => handleTypeSelect(option.id)}
              >
                <div className="card-icon">
                  <img src={option.icon} alt={option.label} />
                </div>
                <div className="card-label">{option.label}</div>
              </div>
            ))}
          </div>

          {validationErrors.storageTypes && (
            <p className="error-message">{validationErrors.storageTypes}</p>
          )}

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

export default Step1;
