import React from "react";
import "./BookingSummaryCard.css";

const BookingSummaryCard = ({ bookingData }) => {
    const {
        image,
        title,
        location,
        size,
        amenities,
        pricing,
    } = bookingData;

    return (
        <div className="booking-summary-card">
            <div className="room-preview">
                <img src={image} alt={title} className="room-image" />
                <div className="room-info">
                    <h3 className="room-title">{title}</h3>
                    <p className="room-location">{location}</p>
                </div>
            </div>

            <div className="room-features">
                <span className="feature-badge">{size}</span>
                {amenities.map((amenity, index) => (
                    <span key={index} className="feature-badge">
            {amenity}
          </span>
                ))}
            </div>

            <div className="price-details">
                <h4 className="price-details-title">Price Details</h4>
                <div className="price-row">
                    <span className="price-label">Per Days:</span>
                    <span className="price-value">{pricing.perDay}﷼</span>
                </div>
                <div className="price-row">
                    <span className="price-label">Per Weeks:</span>
                    <span className="price-value">{pricing.perWeek}﷼</span>
                </div>
                <div className="price-row">
                    <span className="price-label">Per Months:</span>
                    <span className="price-value">{pricing.perMonth}﷼</span>
                </div>
            </div>
        </div>
    );
};

export default BookingSummaryCard;