import React from "react";
import PropertyCard from "../PropertyCard/PropertyCard";
import "./AdminPropertyCard.css";

const AdminPropertyCard = ({ property, onToggleApproval, onSuspend, onRemove }) => {
    const { id, approved, suspended } = property;

    return (
        <div className="admin-property-card">
            <PropertyCard
                property={property}
                showRating={false}
                showFeatures={false}
                featured
            />

            <div className="admin-actions">
                <button
                    className={`approve-btn ${approved ? "disapprove" : "approve"}`}
                    onClick={() => onToggleApproval(id)}
                >
                    {approved ? "Disapprove" : "Approve"}
                </button>

                <button
                    className="suspend-btn"
                    onClick={() => onSuspend(id)}
                >
                    {suspended ? "Suspended" : "Suspend"}
                </button>

                <button
                    className="remove-btn"
                    onClick={() => onRemove(id)}
                >
                    Remove
                </button>
            </div>
        </div>
    );
};

export default AdminPropertyCard;

