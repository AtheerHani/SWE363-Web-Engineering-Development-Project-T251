import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./PropertyCard.css";

const PropertyCard = ({ property, showRating = false, featured = false }) => {
    const navigate = useNavigate();
    const [isFavorite, setIsFavorite] = useState(false);

    const handleCardClick = () => {
        navigate(`/listing/${property.id}`);
    };

    const handleFavoriteClick = (e) => {
        e.stopPropagation(); // Prevent card click when clicking heart
        setIsFavorite(!isFavorite);
    };

    const renderStars = (rating) => {
        return Array(5)
            .fill(0)
            .map((_, index) => (
                <svg
                    key={index}
                    width="14"
                    height="14"
                    fill={index < rating ? "currentColor" : "none"}
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    className="star-icon"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                    />
                </svg>
            ));
    };

    return (
        <div
            className={`property-card ${featured ? "featured" : ""}`}
            onClick={handleCardClick}
        >
            <div className="property-image">
                <img src={property.image} alt={property.title} />
                <button
                    className={`favorite-button ${isFavorite ? "active" : ""}`}
                    onClick={handleFavoriteClick}
                >
                    <svg width="20" height="20" fill={isFavorite ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                </button>
                {showRating && (
                    <div className="rating-badge">{renderStars(property.rating)}</div>
                )}
            </div>

            <div className="property-info">
                {featured && (
                    <div className="property-price-tag">
                        ﷼{property.pricePerDay} - ﷼{property.pricePerHour}
                    </div>
                )}
                <h3 className="property-title">{property.title}</h3>
                {!featured && (
                    <p className="property-price">
                        ﷼{property.pricePerDay} - ﷼{property.pricePerHour}
                    </p>
                )}
                {featured && (
                    <div className="property-features">
                        <div className="feature-item">
                            <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                            </svg>
                            <span>{property.size} m²</span>
                        </div>
                        <div className="feature-item">
                            <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                            </svg>
                            <span>AC</span>
                        </div>
                        <div className="feature-item">
                            <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                            <span>Lock</span>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PropertyCard;