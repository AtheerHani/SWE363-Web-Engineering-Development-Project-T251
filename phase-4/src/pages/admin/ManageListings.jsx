import React, { useState } from "react";
import AdminPropertyCard from "../../components/AdminPropertyCard/AdminPropertyCard.jsx";
import "./ManageListings.css";
import roomImg from "./villa-cover.jpg";


function ManageListings({ userId, onBack }) {
    const [listings, setListings] = useState([
        {
            id: 1,
            title: "Luxury Villa",
            image: roomImg,
            pricePerDay: 500,
            pricePerHour: 50,
            size: 120,
            approved: false,
            suspended: false,
        },
        {
            id: 2,
            title: "City Apartment",
            image: roomImg,
            pricePerDay: 300,
            pricePerHour: 30,
            size: 80,
            approved: true,
            suspended: false,
        },
    ]);

    const handleToggleApproval = (id) => {
        setListings((prev) =>
            prev.map((listing) =>
                listing.id === id ? { ...listing, approved: !listing.approved } : listing
            )
        );
    };

    const handleSuspend = (id) => {
        setListings((prev) =>
            prev.map((listing) =>
                listing.id === id ? { ...listing, suspended: !listing.suspended } : listing
            )
        );
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
                            onToggleApproval={handleToggleApproval}
                            onSuspend={handleSuspend}
                            onRemove={handleRemove}
                            showRating={false}
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


