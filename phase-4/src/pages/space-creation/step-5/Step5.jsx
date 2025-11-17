import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSpaceCreation } from '../../../context/SpaceCreationContext';
import './Step5.css';

const Step5 = () => {
  const navigate = useNavigate();
  const { formData, updateField, completeStep } = useSpaceCreation();
  const [photos, setPhotos] = useState(formData.photos || []);
  const [validationErrors, setValidationErrors] = useState({});
  const fileInputRef = useRef(null);

  const validateStep = () => {
    const errors = {};

    if (photos.length === 0) {
      errors.photos = 'Please upload at least one photo';
    }
    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handlePhotoUpload = (e) => {
    const files = Array.from(e.target.files);
    const newPhotos = files.map((file) => ({
      id: Date.now() + Math.random(),
      name: file.name,
      size: file.size,
      url: URL.createObjectURL(file),
    }));

    setPhotos((prev) => [...prev, ...newPhotos]);

    if (validationErrors.photos) {
      setValidationErrors((prev) => ({
        ...prev,
        photos: '',
      }));
    }
  };

  const handleRemovePhoto = (photoId) => {
    setPhotos((prev) => prev.filter((p) => p.id !== photoId));
  };

  

  const handleNext = () => {
    if (validateStep()) {
      updateField('photos', photos);
      completeStep();
      navigate('/space-creation/step-6');
      window.scrollTo(0, 0);
    }
  };

  const handleBack = () => {
    navigate('/space-creation/step-4');
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
            <div className="progress-fill" style={{ width: '71.4%' }}></div>
          </div>
          <p className="progress-text">Step 5 of 8</p>
        </div>

        {/* Main Content */}
        <div className="page-content">
          <h1 className="page-title">Upload space photos</h1>

          {/* Upload Column */}
          <div className="column">
            {/* Upload Box */}
            <div className="upload-box">
              <div className="upload-icon">☁️</div>
              <p className="upload-text">Drag & drop to upload your space photos</p>
              <p className="upload-subtext">or</p>
              <button
                className="browse-button"
                onClick={() => fileInputRef.current?.click()}
              >
                browse
              </button>
              <input
                ref={fileInputRef}
                type="file"
                multiple
                accept="image/*"
                onChange={handlePhotoUpload}
                style={{ display: 'none' }}
              />
            </div>

            {/* Photo Gallery */}
            {photos.length > 0 && (
              <div className="photo-gallery">
                <h3>Uploaded Photos ({photos.length})</h3>
                <div className="photo-grid">
                  {photos.map((photo) => (
                    <div key={photo.id} className="photo-item">
                      <img src={photo.url} alt={photo.name} />
                      <button
                        className="remove-button"
                        onClick={() => handleRemovePhoto(photo.id)}
                      >
                        ✕
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {validationErrors.photos && (
              <p className="error-message">{validationErrors.photos}</p>
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

export default Step5;
