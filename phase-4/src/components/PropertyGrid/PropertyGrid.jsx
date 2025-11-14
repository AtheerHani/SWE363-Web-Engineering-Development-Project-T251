import React from "react";
import PropertyCard from "../PropertyCard/PropertyCard";
import "./PropertyGrid.css";

const PropertyGrid = ({
                          title,
                          properties,
                          showRating = false,
                          featured = false,
                          showMapButton = false
                      }) => {
    const handleShowMap = () => {
        // Handle show on map functionality
        console.log("Show on map clicked");
    };

    return (
        <div className="property-grid-section">
            <div className="section-header">
                <div className="section-title-container">
                    <h2 className="section-title">{title}</h2>
                    <div className="title-underline"></div>
                </div>
                {showMapButton && (
                    <button className="show-map-button" onClick={handleShowMap}>
                        <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                        </svg>
                        Show On Map
                    </button>
                )}
            </div>

            <div className={`property-grid ${featured ? "featured-grid" : ""}`}>
                {properties.map((property) => (
                    <PropertyCard
                        key={property.id}
                        property={property}
                        showRating={showRating}
                        featured={featured}
                    />
                ))}
            </div>
        </div>
    );
};

export default PropertyGrid;