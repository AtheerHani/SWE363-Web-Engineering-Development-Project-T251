import React from "react";
import "./PriceCard.css";

const PriceCard = ({ pricing, onReserve, onSpaceInquiry, onContactHost }) => {
    return (
        <div className="price-card">
            <div className="price-header">
                <span className="price-amount">﷼{pricing.perDay}</span>
                <span className="price-period">per day</span>
            </div>

            <div className="price-details">
                <div className="price-row">
                    <span className="price-label">Per Days:</span>
                    <span className="price-value">﷼{pricing.perDay}</span>
                </div>
                <div className="price-row">
                    <span className="price-label">Per Weeks:</span>
                    <span className="price-value">﷼{pricing.perWeek}</span>
                </div>
                <div className="price-row">
                    <span className="price-label">Per Months:</span>
                    <span className="price-value">﷼{pricing.perMonth}</span>
                </div>
            </div>

            <button className="reserve-button" onClick={onReserve}>
                Reserve Now
            </button>

            <div className="action-buttons">
                <button className="action-btn" onClick={onSpaceInquiry}>
                    <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    Space Inquiry
                </button>
                <button className="action-btn" onClick={onContactHost}>
                    <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Contact Host
                </button>
            </div>
        </div>
    );
};

export default PriceCard;