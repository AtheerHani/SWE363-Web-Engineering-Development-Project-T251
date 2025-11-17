import React, { createContext, useState, useCallback } from 'react';

export const SpaceCreationContext = createContext();

export const SpaceCreationProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    // Step 1 - Basic Info
    spaceName: '',
    spaceType: '',
    description: '',
    
    // Step 2 - Location
    address: '',
    city: '',
    district: '',
    coordinates: { lat: null, lng: null },
    
    // Step 3 - Features & Amenities
    features: [],
    amenities: [],
    size: '',
    
    // Step 4 - Pricing
    pricePerHour: '',
    pricePerDay: '',
    pricePerMonth: '',
    currency: 'SAR',
    
    // Step 5 - Availability
    availability: {},
    holidays: [],
    
    // Step 6 - Photos & Documents
    photos: [],
    documents: [],
    
    // Step 7 - Review & Submit
    termsAccepted: false,
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [completedSteps, setCompletedSteps] = useState([]);
  const [errors, setErrors] = useState({});

  // Update form data
  const updateFormData = useCallback((stepData) => {
    setFormData((prev) => ({ ...prev, ...stepData }));
  }, []);

  // Update specific field
  const updateField = useCallback((field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  }, []);

  // Move to next step
  const goToNextStep = useCallback(() => {
    if (currentStep < 7) {
      if (!completedSteps.includes(currentStep)) {
        setCompletedSteps((prev) => [...prev, currentStep]);
      }
      setCurrentStep((prev) => prev + 1);
    }
  }, [currentStep, completedSteps]);

  // Move to previous step
  const goToPreviousStep = useCallback(() => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  }, [currentStep]);

  // Go to specific step
  const goToStep = useCallback((step) => {
    if (step >= 1 && step <= 7) {
      setCurrentStep(step);
    }
  }, []);

  // Mark step as completed
  const completeStep = useCallback(() => {
    if (!completedSteps.includes(currentStep)) {
      setCompletedSteps((prev) => [...prev, currentStep]);
    }
  }, [currentStep, completedSteps]);

  // Set form errors
  const setStepErrors = useCallback((stepErrors) => {
    setErrors(stepErrors);
  }, []);

  // Clear form errors
  const clearErrors = useCallback(() => {
    setErrors({});
  }, []);

  // Reset form
  const resetForm = useCallback(() => {
    setFormData({
      spaceName: '',
      spaceType: '',
      description: '',
      address: '',
      city: '',
      district: '',
      coordinates: { lat: null, lng: null },
      features: [],
      amenities: [],
      size: '',
      pricePerHour: '',
      pricePerDay: '',
      pricePerMonth: '',
      currency: 'SAR',
      availability: {},
      holidays: [],
      photos: [],
      documents: [],
      termsAccepted: false,
    });
    setCurrentStep(1);
    setCompletedSteps([]);
    setErrors({});
  }, []);

  // Submit form (Step 7)
  const submitForm = useCallback(async () => {
    try {
      // TODO: Send formData to backend
      console.log('Submitting form data:', formData);
      return { success: true, data: formData };
    } catch (error) {
      console.error('Error submitting form:', error);
      return { success: false, error: error.message };
    }
  }, [formData]);

  const value = {
    // State
    formData,
    currentStep,
    completedSteps,
    errors,
    
    // Methods
    updateFormData,
    updateField,
    goToNextStep,
    goToPreviousStep,
    goToStep,
    completeStep,
    setStepErrors,
    clearErrors,
    resetForm,
    submitForm,
  };

  return (
    <SpaceCreationContext.Provider value={value}>
      {children}
    </SpaceCreationContext.Provider>
  );
};

export const useSpaceCreation = () => {
  const context = React.useContext(SpaceCreationContext);
  if (!context) {
    throw new Error('useSpaceCreation must be used within SpaceCreationProvider');
  }
  return context;
};
