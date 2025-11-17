import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSpaceCreation } from '../../../context/SpaceCreationContext';
import './Step4.css';

const Step4 = () => {
  const navigate = useNavigate();
  const { formData, updateField, completeStep } = useSpaceCreation();
  const [pricing, setPricing] = useState({
    startingPrice: formData.startingPrice || '',
    endingPrice: formData.endingPrice || '',
    billingFrequency: formData.billingFrequency || 'per month',
  });
  const [validationErrors, setValidationErrors] = useState({});

  const validateStep = () => {
    const errors = {};

    if (!pricing.startingPrice) {
      errors.startingPrice = 'Starting price is required';
    } else if (isNaN(pricing.startingPrice) || pricing.startingPrice <= 0) {
      errors.startingPrice = 'Please enter a valid price';
    }

    if (!pricing.endingPrice) {
      errors.endingPrice = 'Ending price is required';
    } else if (isNaN(pricing.endingPrice) || pricing.endingPrice <= 0) {
      errors.endingPrice = 'Please enter a valid price';
    }

    if (parseFloat(pricing.endingPrice) < parseFloat(pricing.startingPrice)) {
      errors.endingPrice = 'Ending price must be greater than starting price';
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPricing((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (validationErrors[name]) {
      setValidationErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const handleNext = () => {
    if (validateStep()) {
      updateField('startingPrice', pricing.startingPrice);
      updateField('endingPrice', pricing.endingPrice);
      updateField('billingFrequency', pricing.billingFrequency);
      completeStep();
      navigate('/space-creation/step-5');
      window.scrollTo(0, 0);
    }
  };

  const handleBack = () => {
    navigate('/space-creation/step-3');
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
            <div className="progress-fill" style={{ width: '57.12%' }}></div>
          </div>
          <p className="progress-text">Step 4 of 8</p>
        </div>

        {/* Main Content */}
        <div className="page-content">
          <h1 className="page-title">Set your rental price</h1>

          {/* Pricing Inputs */}
          <div className="pricing-inputs">
            {/* Starting Price */}
            <div className="input-group">
              <label htmlFor="startingPrice">Starting Price *</label>
              <input
                type="number"
                id="startingPrice"
                name="startingPrice"
                value={pricing.startingPrice}
                onChange={handleInputChange}
                placeholder="e.g., 500"
                className={`pill-input ${validationErrors.startingPrice ? 'error' : ''}`}
              />
              {validationErrors.startingPrice && (
                <span className="error-message">{validationErrors.startingPrice}</span>
              )}
            </div>

            {/* Ending Price */}
            <div className="input-group">
              <label htmlFor="endingPrice">Ending Price *</label>
              <input
                type="number"
                id="endingPrice"
                name="endingPrice"
                value={pricing.endingPrice}
                onChange={handleInputChange}
                placeholder="e.g., 1000"
                className={`pill-input ${validationErrors.endingPrice ? 'error' : ''}`}
              />
              {validationErrors.endingPrice && (
                <span className="error-message">{validationErrors.endingPrice}</span>
              )}
            </div>

            {/* Billing Frequency */}
            <div className="input-group">
              <label htmlFor="billingFrequency">Billing Frequency *</label>
              <select
                id="billingFrequency"
                name="billingFrequency"
                value={pricing.billingFrequency}
                onChange={handleInputChange}
                className="pill-input"
              >
                <option value="per day">per day</option>
                <option value="per week">per week</option>
                <option value="per month">per month</option>
                <option value="per year">per year</option>
              </select>
            </div>
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

export default Step4;
