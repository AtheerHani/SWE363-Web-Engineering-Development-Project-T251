import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSpaceCreation } from '../../../context/SpaceCreationContext';
import LocationMap from '../../../components/LocationMap/LocationMap';
import './Step6.css';

const Step6 = () => {
  const navigate = useNavigate();
  const { formData, updateField, completeStep } = useSpaceCreation();
  const [location, setLocation] = useState(
    formData.location || { lat: 24.7136, lng: 46.6753, address: '', street: '', district: '', city: '', region: '', landmark: '' }
  );
  const [validationErrors, setValidationErrors] = useState({});
  const [geocoding, setGeocoding] = useState(false);

  const handleLocationChange = (e) => {
    const { name, value } = e.target;
    setLocation((prev) => ({ ...prev, [name]: value }));
    if (validationErrors[name]) setValidationErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const validateStep = () => {
    const errors = {};
    if (!location.city) errors.city = 'Please enter the city';
    if (!location.street) errors.street = 'Please enter the street or building name';
    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleNext = () => {
    if (validateStep()) {
      updateField('location', location);
      completeStep();
      navigate('/space-creation/step-7');
      window.scrollTo(0, 0);
    }
  };

  // Called when user clicks on the map or finishes dragging the marker (from LocationMap)
  const handleMapClick = async ({ lat, lng, source }) => {
    // Update lat/lng immediately
    setLocation((prev) => ({ ...prev, lat, lng }));

    // If this is a live drag event, do not trigger reverse-geocoding yet
    if (source === 'drag') {
      return;
    }

    // Start geocoding indicator for click or dragend
    setGeocoding(true);

    // Attempt reverse geocoding using Nominatim to prefill address fields (only fill empty fields)
    try {
      const resp = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${encodeURIComponent(lat)}&lon=${encodeURIComponent(lng)}&accept-language=en`
      );
      if (!resp.ok) return;
      const data = await resp.json();
      const a = data.address || {};

      setLocation((prev) => ({
        ...prev,
        region: prev.region || a.state || a.county || '',
        city: prev.city || a.city || a.town || a.village || a.county || '',
        district: prev.district || a.suburb || a.neighbourhood || a.hamlet || '',
        street: prev.street || [a.road, a.house_number].filter(Boolean).join(' ') || a.pedestrian || '',
        // keep existing landmark if user set it
      }));
    } catch (err) {
      // ignore errors silently; this is best-effort
    } finally {
      // small delay to make loading visible
      setTimeout(() => setGeocoding(false), 400);
    }
  };

  const handleBack = () => navigate('/space-creation/step-5');

  return (
    <div className="space-creation-page">
      <div className="page-wrapper">
        <button className="back-button" onClick={handleBack}>
          <span className="arrow">←</span> Back
        </button>

        <div className="progress-bar-container">
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: '85.68%' }}></div>
          </div>
          <p className="progress-text">Step 6 of 8</p>
        </div>

        <div className="page-content">
          <h1 className="page-title">Specify your space location</h1>

          <div className="location-wrap">
            <div className="location-card">
              <p className="location-instruction">Choose your space location manually or allow location access</p>

              <LocationMap
                coordinates={{ lat: location.lat || 24.7136, lng: location.lng || 46.6753 }}
                onMapClick={handleMapClick}
              />

              {geocoding && (
                <div className="geocode-loading">
                  <div className="spinner" aria-hidden="true"></div>
                  <div className="geocode-text">Looking up address…</div>
                </div>
              )}

              <div className="address-fields">
                <div className="address-field">
                  <label>Region / Province</label>
                  <input
                    name="region"
                    type="text"
                    value={location.region}
                    onChange={handleLocationChange}
                    placeholder="e.g., Riyadh Province"
                    className="location-input"
                  />
                </div>

                <div className="address-field">
                  <label>City</label>
                  <input
                    name="city"
                    type="text"
                    value={location.city}
                    onChange={handleLocationChange}
                    placeholder="e.g., Riyadh"
                    className={`location-input ${validationErrors.city ? 'error' : ''}`}
                  />
                  {validationErrors.city && <p className="error-message">{validationErrors.city}</p>}
                </div>

                <div className="address-field">
                  <label>District / Neighborhood</label>
                  <input
                    name="district"
                    type="text"
                    value={location.district}
                    onChange={handleLocationChange}
                    placeholder="e.g., Al Olaya"
                    className="location-input"
                  />
                </div>

                <div className="address-field">
                  <label>Street / Building</label>
                  <input
                    name="street"
                    type="text"
                    value={location.street}
                    onChange={handleLocationChange}
                    placeholder="e.g., King Fahd St, Building 12"
                    className={`location-input ${validationErrors.street ? 'error' : ''}`}
                  />
                  {validationErrors.street && <p className="error-message">{validationErrors.street}</p>}
                </div>

                <div className="address-field">
                  <label>Nearest Landmark (optional)</label>
                  <input
                    name="landmark"
                    type="text"
                    value={location.landmark}
                    onChange={handleLocationChange}
                    placeholder="e.g., Near King Fahd Park"
                    className="location-input"
                  />
                </div>
              </div>

              <div className="button-container">
                <button className="btn-next" onClick={handleNext}>
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step6;
