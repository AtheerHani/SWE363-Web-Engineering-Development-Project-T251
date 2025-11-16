import React, { useState } from "react";
import AdminPropertyCard from "../../components/AdminPropertyCard/AdminPropertyCard.jsx";
import "./ManageListings.css";

function ManageListings({ userId, onBack }) {
    // Sample listings — later replace with API data
    const [listings, setListings] = useState([
        {
            id: 1,
            title: "Luxury Villa",
            image: "/images/villa.jpg",
            pricePerDay: 500,
            pricePerHour: 50,
            rating: 4,
            size: 120,
        },
        {
            id: 2,
            title: "City Apartment",
            image: "/images/apartment.jpg",
            pricePerDay: 300,
            pricePerHour: 30,
            rating: 5,
            size: 80,
        },
    ]);

    const handleModify = (id) => {
        console.log("Modify listing", id);
        // TODO: open modal or navigate to edit form
    };

    const handleRemove = (id) => {
        setListings((prev) => prev.filter((listing) => listing.id !== id));
    };

    return (
        <div className="manage-listings-container">
            <h2>Manage Listings for User {userId}</h2>

            {listings.length === 0 ? (
                <p className="empty-state">No listings available for this user.</p>
            ) : (
                <div className="listings-grid">
                    {listings.map((listing) => (
                        <AdminPropertyCard
                            key={listing.id}
                            property={listing}
                            onModify={handleModify}
                            onRemove={handleRemove}
                        />
                    ))}
                </div>
            )}

            <div className="back-btn-container">
                <button className="back-btn" onClick={onBack}>
                    Go Back
                </button>
            </div>
        </div>
    );
}

export default ManageListings;

