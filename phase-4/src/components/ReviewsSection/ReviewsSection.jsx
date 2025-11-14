import React from "react";
import "./ReviewsSection.css";

const ReviewsSection = ({ reviews }) => {
    const renderStars = (count) => {
        return Array(5)
            .fill(0)
            .map((_, index) => (
                <svg
                    key={index}
                    width="16"
                    height="16"
                    fill={index < count ? "currentColor" : "none"}
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

    const renderRatingBar = (value, max = 5.0) => {
        const percentage = (value / max) * 100;
        return (
            <div className="rating-bar">
                <div className="rating-bar-fill" style={{ width: `${percentage}%` }}></div>
            </div>
        );
    };

    return (
        <div className="reviews-section">
            <div className="reviews-header">
                <h2 className="section-title">
                    Reviews
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" className="star-icon-title">
                        <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                    {reviews.average.toFixed(1)}
                </h2>
            </div>

            {/* Rating Breakdown */}
            <div className="rating-breakdown">
                <div className="rating-item">
                    <span className="rating-label">Features</span>
                    {renderRatingBar(reviews.breakdown.features)}
                    <span className="rating-value">{reviews.breakdown.features.toFixed(1)}</span>
                </div>
                <div className="rating-item">
                    <span className="rating-label">Air-Conditioner</span>
                    {renderRatingBar(reviews.breakdown.airConditioner)}
                    <span className="rating-value">{reviews.breakdown.airConditioner.toFixed(1)}</span>
                </div>
                <div className="rating-item">
                    <span className="rating-label">Communication</span>
                    {renderRatingBar(reviews.breakdown.communication)}
                    <span className="rating-value">{reviews.breakdown.communication.toFixed(1)}</span>
                </div>
                <div className="rating-item">
                    <span className="rating-label">Location of the Space</span>
                    {renderRatingBar(reviews.breakdown.location)}
                    <span className="rating-value">{reviews.breakdown.location.toFixed(1)}</span>
                </div>
            </div>

            {/* Reviews List */}
            <div className="reviews-list">
                {reviews.list.map((review) => (
                    <div key={review.id} className="review-card">
                        <div className="review-header">
                            <div className="reviewer-info">
                                <div className="reviewer-avatar"></div>
                                <div className="reviewer-details">
                                    <h4 className="reviewer-name">{review.name}</h4>
                                    <p className="review-date">{review.date}</p>
                                </div>
                            </div>
                        </div>
                        <p className="review-comment">{review.comment}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ReviewsSection;