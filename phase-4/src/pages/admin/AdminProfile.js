import React, { useState } from "react";
import "./AdminProfile.css";
import { Container, Row, Col, Card } from "react-bootstrap";
import SendAnnouncement from "./SendAnnouncement";
import ReviewDisputes from "./ReviewDisputes";
import ManageUsers from "./ManageUsers";

function AdminProfile() {
    const [activeSection, setActiveSection] = useState(null);

    const actions = [
        { label: "Admin Dashboard" },
        { label: "Send Announcements" },
        { label: "User Management" },
        { label: "Review Disputes" },
        { label: "Logistics Companies Management" },
        { label: "Approve/Disprove Listings" },
    ];

    return !activeSection ? (
        // Default view: Profile + Actions
        <Container className="mt-4">
            <Row>
                {/* Profile on the left */}
                <Col md={4}>
                    <Card className="profile-card">
                        <Card.Body className="text-center">
                            <div className="profile-pic-placeholder mb-3">Upload Photo</div>
                            <p>Identity Verification: Pending</p>
                            <p>Email: Verified</p>
                            <p>Mobile: Verified</p>
                        </Card.Body>
                    </Card>
                </Col>

                {/* Actions on the right */}
                <Col md={8}>
                    <h2>Hello, Admin Name</h2>
                    <h4 className="mt-3">Admin Actions</h4>
                    <Row className="mt-3">
                        {actions.map((action, idx) => (
                            <Col md={6} className="mb-3" key={idx}>
                                <Card
                                    className="action-card"
                                    onClick={() => setActiveSection(action.label)}
                                >
                                    <Card.Body>
                                        <Card.Title>{action.label}</Card.Title>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Col>
            </Row>
        </Container>
    ) : (
        // Active section view only
        <Container className="mt-4">

            {activeSection === "Review Disputes" && (
                <ReviewDisputes onBack={() => setActiveSection(null)} />
            )}
            {activeSection === "Send Announcements" && (
                <SendAnnouncement onBack={() => setActiveSection(null)} />
            )}
            {activeSection === "User Management" && (
                <ManageUsers onBack={() => setActiveSection(null)} />
            )}


            {/* Later you can add other sections here */}
        </Container>
    );
}

export default AdminProfile;
