import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ImageGallery from "../../components/ImageGallery/ImageGallery";
import FeaturesSection from "../../components/FeaturesSection/FeaturesSection";
import LocationMap from "../../components/LocationMap/LocationMap";
import LogisticsCompanies from "../../components/LogisticsCompanies/LogisticsCompanies";
import ReviewsSection from "../../components/ReviewsSection/ReviewsSection";
import PriceCard from "../../components/PriceCard/PriceCard";
import "./ListingDetails.css";
 

const ListingDetails = () => {
    const navigate = useNavigate();
    const [isFavorite, setIsFavorite] = useState(false);
    const [fromDate, setFromDate] = useState("");
    const [toDate, setToDate] = useState("");
    const [dateError, setDateError] = useState("");

    // Sample listing data - will come from props/API later
    const listingData = {
        id: 1,
        title: "Small Room in an Apartment",
        location: "Dammam, SA",
        listedBy: "Farah Hammad",
        pricePerDay: 1,
        images: [
            "/assets/images/rooms/placeholder-room.jpg",
            "/assets/images/rooms/placeholder-room.jpg",
            "/assets/images/rooms/placeholder-room.jpg",
            "/assets/images/rooms/placeholder-room.jpg",
            "/assets/images/rooms/placeholder-room.jpg",
            "/assets/images/rooms/placeholder-room.jpg",
        ],
        features: [
            { icon: "size", label: "50 m²", value: "50 m²" },
            { icon: "ac", label: "Air Conditioner", value: "Air Conditioner" },
            { icon: "lock", label: "Smart Lock", value: "Smart Lock" },
            { icon: "humidity", label: "Humidity Sensor", value: "Humidity Sensor" },
        ],
        description: "A description for the space",
        pricing: {
            perDay: 1,
            perWeek: 5,
            perMonth: 18,
        },
        coordinates: {
            lat: 26.4207,
            lng: 50.0888,
        },
        reviews: {
            average: 5.0,
            total: 30,
            breakdown: {
                features: 5.0,
                airConditioner: 5.0,
                communication: 5.0,
                location: 5.0,
            },
            list: [
                {
                    id: 1,
                    name: "Ola Ahmad",
                    date: "Nov 12 2020",
                    rating: 5,
                    comment: "Great space!",
                },
                {
                    id: 2,
                    name: "Ola Ahmad",
                    date: "Nov 12 2020",
                    rating: 5,
                    comment: "Highly recommended!",
                },
                {
                    id: 3,
                    name: "Ola Ahmad",
                    date: "Nov 12 2020",
                    rating: 5,
                    comment: "Great!",
                },
                {
                    id: 4,
                    name: "Ola Ahmad",
                    date: "Nov 12 2020",
                    rating: 5,
                    comment: "Good!",
                },
            ],
        },
    };

    const handleBack = () => {
        navigate(-1);
    };

    const handleFavorite = () => {
        setIsFavorite(!isFavorite);
    };

    const handleShare = () => {
        // Share functionality
        if (navigator.share) {
            navigator.share({
                title: listingData.title,
                text: `Check out this property: ${listingData.title}`,
                url: window.location.href,
            });
        } else {
            // Fallback - copy to clipboard
            navigator.clipboard.writeText(window.location.href);
            alert("Link copied to clipboard!");
        }
    };

    const handleReserve = () => {
        // Validate dates selected on this page
        if (!fromDate || !toDate) {
            setDateError("Please select reservation start and end dates.");
            return;
        }
        const from = new Date(fromDate);
        const to = new Date(toDate);
        if (to < from) {
            setDateError("End date cannot be before start date.");
            return;
        }
        setDateError("");
        // navigate to payment page; pass listing data and dates so payment can create reservation after successful payment
        navigate("/payment", { state: { listing: listingData, fromDate, toDate } });
    };

    const handleSpaceInquiry = () => {
        // Space inquiry functionality
        alert("Space inquiry feature - will be implemented with backend");
    };

    const handleContactHost = () => {
        // Contact host functionality
        alert("Contact host feature - will be implemented with backend");
    };

    return (
        <div className="listing-details-page">
            {/* Back Button */}
            <button className="back-button" onClick={handleBack}>
                <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back
            </button>

            {/* Image Gallery */}
            <ImageGallery images={listingData.images} />

            {/* Main Content */}
            <div className="listing-content">
                {/* Left Column */}
                <div className="listing-main">
                    {/* Title Section */}
                    <div className="listing-header">
                        <div className="listing-title-section">
                            <h1 className="listing-title">{listingData.title}</h1>
                                <p className="listing-location">{listingData.location}</p>
                                <div className="reservation-date-picker inline-under-location">
                                    <label className="date-label">From</label>
                                    <input
                                        type="date"
                                        value={fromDate}
                                        onChange={(e) => {
                                            setFromDate(e.target.value);
                                            if (toDate && new Date(e.target.value) > new Date(toDate)) {
                                                setDateError("Start date cannot be after end date.");
                                            } else {
                                                setDateError("");
                                            }
                                        }}
                                        min={new Date().toISOString().slice(0,10)}
                                    />

                                    <label className="date-label">To</label>
                                    <input
                                        type="date"
                                        value={toDate}
                                        onChange={(e) => {
                                            setToDate(e.target.value);
                                            if (fromDate && new Date(e.target.value) < new Date(fromDate)) {
                                                setDateError("End date cannot be before start date.");
                                            } else {
                                                setDateError("");
                                            }
                                        }}
                                        min={fromDate || new Date().toISOString().slice(0,10)}
                                    />

                                    {dateError && <p className="date-error">{dateError}</p>}
                                </div>
                        </div>
                        <div className="listing-actions">
                            <button
                                className={`action-button ${isFavorite ? "active" : ""}`}
                                onClick={handleFavorite}
                            >
                                <svg width="24" height="24" fill={isFavorite ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                            </button>
                            <button className="action-button" onClick={handleShare}>
                                <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Listed By */}
                    <div className="listed-by">
                        <div className="host-avatar"></div>
                        <div className="host-info">
                            <span className="host-label">Listed By:</span>
                            <span className="host-name">{listingData.listedBy}</span>
                            <span className="host-price">
                                Per: 
                                <img src="/assets/icons/riyal.svg" alt="SAR" className="riyal-icon-tiny" />
                                1 per day
                            </span>
                        </div>
                    </div>

                    {/* Offered Features */}
                    <FeaturesSection features={listingData.features} />

                    {/* Apartment Description */}
                    <div className="description-section">
                        <h2 className="section-title">Apartment Description</h2>
                        <p className="description-text">{listingData.description}</p>
                    </div>

                    {/* Show Location */}
                    <LocationMap coordinates={listingData.coordinates} />

                    {/* Logistics Companies */}
                    <LogisticsCompanies />

                    {/* Reviews */}
                    <ReviewsSection reviews={listingData.reviews} />
                </div>

                {/* Right Column - Price Card */}
                <div className="listing-sidebar">
                    <PriceCard
                        pricing={listingData.pricing}
                        onReserve={handleReserve}
                        onSpaceInquiry={handleSpaceInquiry}
                        onContactHost={handleContactHost}
                    />
                </div>
            </div>
        </div>
    );
};

export default ListingDetails;