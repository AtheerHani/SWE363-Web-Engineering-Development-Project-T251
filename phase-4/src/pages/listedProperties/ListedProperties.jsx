import React, { useState } from "react";
import PropertyCard from "../../components/PropertyCard/PropertyCard.jsx";
import "./ListedProperties.css";
import roomImg from "../admin/villa-cover.jpg";

function ListedProperties({ userId, onBack }) {
    // Sample properties — later replace with API data
    const [properties] = useState([
        {
            id: 1,
            title: "Luxury Villa",
            image: roomImg,
            pricePerDay: 500,
            pricePerHour: 50,
            size: 120,
            rating: 4,
        },
        {
            id: 2,
            title: "City Apartment",
            image: roomImg,
            pricePerDay: 300,
            pricePerHour: 30,
            size: 80,
            rating: 5,
        },
    ]);

    return (
        <div className="listed-properties-container">
            <h2>Listed Properties for User {userId}</h2>

            {properties.length === 0 ? (
                <p className="empty-state">You have not listed any properties yet.</p>
            ) : (
                <div className="properties-grid">
                    {properties.map((property) => (
                        <PropertyCard
                            key={property.id}
                            property={property}
                            showRating={true}     // ✅ keep normal card behavior
                            showFeatures={true}   // ✅ keep normal card features
                        />
                    ))}
                </div>
            )}

            <div className="back-btn-container">
                <button className="back-btn" onClick={() => onBack}>
                    Go Back
                </button>
            </div>
        </div>
    );
}

export default ListedProperties;
