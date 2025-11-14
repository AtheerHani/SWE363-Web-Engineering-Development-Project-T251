import React from "react";
import { Container, Button } from "react-bootstrap";
import ListingCard from "../../components/ListingCard";
import "./ManageListings.css"
function ManageListings({ onBack }) {
    const listings = [
        {
            id: 1,
            title: "Family Apartment",
            address: "100 Smart Street, LA, USA",
            image: "", // leave empty to test placeholder
        },
        {
            id: 2,
            title: "Villa",
            address: "100 Smart Street, LA, USA",
            image: "https://via.placeholder.com/400x200", // sample image
        },
    ];

    return (
        <Container className="mt-4" style={{ maxWidth: "800px" }}>
            <h2 className="mb-4">Listed Properties</h2>
            <div className="listing-grid">
            {listings.map((listing) => (
                <ListingCard
                    key={listing.id}
                    title={listing.title}
                    address={listing.address}
                    image={listing.image}
                    onModify={() => alert(`Modify ${listing.title}`)}
                    onRemove={() => alert(`Remove ${listing.title}`)}
                />
            ))}
            </div>
            <div className="text-end mt-4">
                <Button variant="secondary" className="mb-4" onClick={onBack}>
                    Go Back
                </Button>

            </div>
        </Container>
    );
}

export default ManageListings;
