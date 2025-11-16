import React, { useState } from "react";
import { Container, Table, Button, Form, Modal } from "react-bootstrap";
import "./ApproveListings.css";

function ApproveListings({ onBack }) {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedListing, setSelectedListing] = useState(null);

    const [listings, setListings] = useState([
        { id: 1, title: "Luxury Villa", owner: "Basel Alharbi", price: 500, status: "pending", description: "Spacious villa with pool and garden." },
        { id: 2, title: "City Apartment", owner: "Dena Hatem", price: 300, status: "pending", description: "Modern apartment in city center." },
        { id: 3, title: "Beach House", owner: "Lura Salem", price: 700, status: "pending", description: "Cozy beach house with sea view." },
    ]);

    const handleApprove = (id) => {
        setListings((prev) =>
            prev.map((listing) =>
                listing.id === id ? { ...listing, status: "approved" } : listing
            )
        );
        setSelectedListing(null);
    };

    const handleReject = (id) => {
        setListings((prev) =>
            prev.map((listing) =>
                listing.id === id ? { ...listing, status: "rejected" } : listing
            )
        );
        setSelectedListing(null);
    };

    const filteredListings = listings.filter((listing) =>
        listing.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <Container className="approve-listings-container mt-4" style={{ maxWidth: "900px" }}>
            <h2 className="mb-4">Approve / Reject Listings</h2>

            <Form.Control
                type="text"
                placeholder="Search listing..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="mb-4"
            />

            {filteredListings.length === 0 ? (
                <p>No listings found.</p>
            ) : (
                <Table bordered hover>
                    <thead>
                    <tr>
                        <th>Title</th>
                        <th>Owner</th>
                        <th>Price (﷼)</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {filteredListings.map((listing) => (
                        <tr key={listing.id}>
                            <td>{listing.title}</td>
                            <td>{listing.owner}</td>
                            <td>{listing.price}</td>
                            <td>
                  <span className={`status-badge ${listing.status}`}>
                    {listing.status.charAt(0).toUpperCase() + listing.status.slice(1)}
                  </span>
                            </td>
                            <td>
                                <Button
                                    variant="info"
                                    size="sm"
                                    onClick={() => setSelectedListing(listing)}
                                >
                                    View
                                </Button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </Table>
            )}

            <div className="text-end mt-4">
                <Button variant="secondary" onClick={onBack}>
                    Go Back
                </Button>
            </div>

            {/* Modal for viewing listing details */}
            <Modal show={!!selectedListing} onHide={() => setSelectedListing(null)}>
                <Modal.Header closeButton>
                    <Modal.Title>Listing Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {selectedListing && (
                        <>
                            <h4>{selectedListing.title}</h4>
                            <p><strong>Owner:</strong> {selectedListing.owner}</p>
                            <p><strong>Price:</strong> ﷼{selectedListing.price}</p>
                            <p><strong>Description:</strong> {selectedListing.description}</p>
                            <p><strong>Status:</strong> {selectedListing.status}</p>
                        </>
                    )}
                </Modal.Body>
                <Modal.Footer>
                    {selectedListing?.status === "pending" && (
                        <>
                            <Button variant="success" onClick={() => handleApprove(selectedListing.id)}>
                                Approve
                            </Button>
                            <Button variant="danger" onClick={() => handleReject(selectedListing.id)}>
                                Reject
                            </Button>
                        </>
                    )}
                    <Button variant="secondary" onClick={() => setSelectedListing(null)}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
}

export default ApproveListings;
