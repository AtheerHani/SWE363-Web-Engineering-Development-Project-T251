import React from "react";
import PropertyCard from "../PropertyCard/PropertyCard";
import "./AdminPropertyCard.css";

const AdminPropertyCard = ({ property, onModify, onRemove }) => {
    return (
        <div className="admin-property-card">
            {/* Render the original PropertyCard but hide features */}
            <PropertyCard
                property={property}
                showRating
                featured
                showFeatures={false}   // 👈 pass a prop to hide features
            />

            {/* Admin-only actions */}
            <div className="admin-actions">
                <button
                    className="modify-btn"
                    onClick={() => onModify(property.id)}
                >
                    Modify
                </button>
                <button
                    className="remove-btn"
                    onClick={() => onRemove(property.id)}
                >
                    Remove
                </button>
            </div>
        </div>
    );
};

export default AdminPropertyCard;
