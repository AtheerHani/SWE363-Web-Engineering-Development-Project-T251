import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSpaceCreation } from '../../../context/SpaceCreationContext';
import './Step3.css';

const Step3 = () => {
  const navigate = useNavigate();
  const { formData, updateField, completeStep } = useSpaceCreation();
  const [selectedFeatures, setSelectedFeatures] = useState(formData.features || []);
  const [validationErrors, setValidationErrors] = useState({});

  const featureOptions = [
    { id: 'cctv', label: 'CCTV Security', icon: '/assets/icons/cctv.png' },
    { id: 'ac', label: 'AC', icon: '/assets/icons/ac.png' },
    { id: 'power', label: 'Power Outlet', icon: '/assets/icons/power-outlet.png' },
    { id: 'temp-sensor', label: 'Temperature Sensor', icon: '/assets/icons/temperature.png' },
    { id: 'lockable', label: 'Lockable Door', icon: '/assets/icons/smart-lock.png' },
    { id: 'parking', label: 'Nearby Parking', icon: '/assets/icons/nearby-parking.png' },
    { id: 'humidity', label: 'Humidity Sensor', icon: '/assets/icons/humidity-sensor.png' },
    { id: 'other', label: 'Other', icon: '/assets/icons/riyal.svg' },
  ];

  const handleFeatureSelect = (featureId) => {
    setSelectedFeatures((prev) => {
      if (prev.includes(featureId)) {
        return prev.filter((f) => f !== featureId);
      } else {
        return [...prev, featureId];
      }
    });

    if (validationErrors.features) {
      setValidationErrors((prev) => ({
        ...prev,
        features: '',
      }));
    }
  };

  const validateStep = () => {
    const errors = {};

    if (selectedFeatures.length === 0) {
      errors.features = 'Please select at least one feature';
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleNext = () => {
    if (validateStep()) {
      updateField('features', selectedFeatures);
      completeStep();
      navigate('/space-creation/step-4');
      window.scrollTo(0, 0);
    }
  };

  const handleBack = () => {
    navigate('/space-creation/step-2');
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
            <div className="progress-fill" style={{ width: '42.84%' }}></div>
          </div>
          <p className="progress-text">Step 3 of 8</p>
        </div>

        {/* Main Content */}
        <div className="page-content">
          <h1 className="page-title">Add features available at your storage space</h1>

          {/* Features Grid */}
          <div className="features-grid">
            {featureOptions.map((feature) => (
              <div
                key={feature.id}
                className={`feature-card ${
                  selectedFeatures.includes(feature.id) ? 'selected' : ''
                }`}
                onClick={() => handleFeatureSelect(feature.id)}
              >
                <div className="feature-icon">
                  <img src={feature.icon} alt={feature.label} />
                </div>
                <div className="feature-label">{feature.label}</div>
              </div>
            ))}
          </div>

          {validationErrors.features && (
            <p className="error-message">{validationErrors.features}</p>
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

export default Step3;
