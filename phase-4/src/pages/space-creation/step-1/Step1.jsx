import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSpaceCreation } from '../../../context/SpaceCreationContext';
import HeaderLoggedIn from '../../../components/HeaderLoggedIn/HeaderLoggedIn';
import './Step1.css';

const Step1 = () => {
  const navigate = useNavigate();
  const { formData, updateField, completeStep } = useSpaceCreation();
  const [selectedTypes, setSelectedTypes] = useState(
    formData.storageTypes || []
  );
  const [validationErrors, setValidationErrors] = useState({});

  const storageOptions = [
    { id: 'basement', label: 'Basement', icon: '🏚️' },
    { id: 'household', label: 'Household Room', icon: '🏠' },
    { id: 'garage', label: 'Garage', icon: '🚗' },
    { id: 'docs', label: 'Docs Locker', icon: '📁' },
  ];

  const handleTypeSelect = (typeId) => {
    setSelectedTypes((prev) => {
      if (prev.includes(typeId)) {
        return prev.filter((t) => t !== typeId);
      } else {
        return [...prev, typeId];
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
      errors.storageTypes = 'Please select at least one storage type';
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

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="space-creation-page">
      <HeaderLoggedIn />

      <div className="page-wrapper">
        {/* Back Button */}
        <button className="back-button" onClick={handleBack}>
          <span className="arrow">←</span> Back
        </button>

        {/* Progress Bar */}
        <div className="progress-bar-container">
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: '14.28%' }}></div>
          </div>
          <p className="progress-text">Step 1 of 7</p>
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
                <div className="card-icon">{option.icon}</div>
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
