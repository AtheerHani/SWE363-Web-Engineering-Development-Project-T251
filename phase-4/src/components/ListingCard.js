import React from "react";
import { Card, Button } from "react-bootstrap";
import "./ListingCard.css";

function ListingCard({ title, address, image, onModify, onRemove }) {
    return (
        <div className="listing-card">
            <div className="listing-image-wrapper">
                {image ? (
                    <img src={image} alt={title} className="listing-image" />
                ) : (
                    <div className="listing-placeholder">
                        <div className="listing-text">
                            <strong>{title}</strong>
                            <br />
                            <span>{address}</span>
                        </div>
                    </div>
                )}
                {image && (
                    <div className="listing-text-overlay">
                        <strong>{title}</strong>
                        <br />
                        <span>{address}</span>
                    </div>
                )}
            </div>

            <div className="listing-actions">
                <Button className="action-btn modify-btn" onClick={onModify}>
                    Modify
                </Button>
                <Button className="action-btn remove-btn" onClick={onRemove}>
                    Remove
                </Button>
            </div>
        </div>
    );
}

export default ListingCard;
