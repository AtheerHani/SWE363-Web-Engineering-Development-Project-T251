import React, { useState } from "react";
import { Container, ListGroup, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Notifications.css";

function Notifications() {
    const navigate = useNavigate();
    const [notifications, setNotifications] = useState([
        { id: 1, message: "Your reservation has been confirmed.", date: "20 Nov 2025", read: false },
        { id: 2, message: "A new property has been listed near you.", date: "19 Nov 2025", read: true },
        { id: 3, message: "System maintenance scheduled for tomorrow.", date: "18 Nov 2025", read: false },
    ]);

    const handleMarkRead = (id) => {
        setNotifications((prev) =>
            prev.map((n) => (n.id === id ? { ...n, read: true } : n))
        );
    };

    const handleClearAll = () => {
        setNotifications([]);
    };

    return (
        <Container className="notifications-container mt-4" style={{ maxWidth: "700px" }}>
            <h2 className="mb-4">Notifications</h2>

            {notifications.length === 0 ? (
                <p className="empty-state">No notifications at the moment.</p>
            ) : (
                <ListGroup>
                    {notifications.map((n) => (
                        <ListGroup.Item
                            key={n.id}
                            className={`d-flex justify-content-between align-items-center ${n.read ? "read" : "unread"}`}
                        >
                            <div>
                                <strong>{n.message}</strong>
                                <div className="text-muted small">{n.date}</div>
                            </div>
                            {!n.read && (
                                <Button variant="primary" size="sm" onClick={() => handleMarkRead(n.id)}>
                                    Mark as Read
                                </Button>
                            )}
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            )}

            <div className="text-end mt-4">
                <Button variant="danger" className="me-2" onClick={handleClearAll}>
                    Clear All
                </Button>
                <Button variant="secondary" onClick={() => navigate(-1)}>
                    Go Back
                </Button>
            </div>
        </Container>
    );
}

export default Notifications;

