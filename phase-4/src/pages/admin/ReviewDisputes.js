import React, { useState } from "react";
import { Container, ListGroup, Button, Card, Form } from "react-bootstrap";
import "./ReviewDisputes.css";
function ReviewDisputes({ onBack }) {
    // Sample data — replace with real data later
    const [disputes] = useState([
        {
            id: 1,
            subject: "User name has not met on space rent day",
            date: "12 Mar 2021",
            sender: "Ali Alqahtani",
            body: "The user didn’t show up on the agreed rental day and didn’t respond to messages.",
        },
        {
            id: 2,
            subject: "User name left very inappropriate reviews",
            date: "12 Mar 2021",
            sender: "Sara Almutairi",
            body: "The reviews were offensive and unrelated to the actual experience.",
        },
        {
            id: 3,
            subject: "My listing hasn’t been approved or declined in a month",
            date: "12 Mar 2021",
            sender: "Mohammed Alhassan",
            body: "I submitted my listing a month ago and haven’t received any response.",
        },
    ]);

    const [selectedId, setSelectedId] = useState(null);

    const selectedDispute = disputes.find((d) => d.id === selectedId);
    const [reply, setReply] = useState("");

    const handleReply = () => {
        console.log("Replying to:", selectedDispute.id);
        console.log("Reply:", reply);
        alert("Reply sent!");
        setReply("");
        setSelectedId(null);
    };

    return (
        <Container className="review-disputes-container">
        <Container style={{ maxWidth: "700px" }} className="mt-4">
            <h2 className="mb-4">All Complaints</h2>

            {disputes.length === 0 ? (
                <p>No disputes or complaints at the moment.</p>
            ) : selectedDispute ? (
                <Card className="mb-3">
                    <Card.Body>
                        <Card.Title>{selectedDispute.subject}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">
                            {selectedDispute.date} — Sent by {selectedDispute.sender}
                        </Card.Subtitle>
                        <Card.Text>{selectedDispute.body}</Card.Text>

                        <Form.Group className="mt-4">
                            <Form.Label>Reply to Complaint</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={4}
                                placeholder="Write your response here..."
                                value={reply}
                                onChange={(e) => setReply(e.target.value)}
                            />
                        </Form.Group>

                        <div className="d-flex justify-content-end gap-2 mt-3">
                            <Button variant="secondary" onClick={() => setSelectedId(null)}>
                                Go Back
                            </Button>
                            <Button variant="primary" onClick={handleReply}>
                                Send Reply
                            </Button>
                        </div>
                    </Card.Body>
                </Card>

            ) : (
                <ListGroup>
                    {disputes.map((dispute) => (
                        <ListGroup.Item
                            key={dispute.id}
                            action
                            onClick={() => setSelectedId(dispute.id)}
                            className="d-flex justify-content-between align-items-center"
                        >
                            <div>{dispute.subject}</div>
                            <small className="text-muted">{dispute.date}</small>
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            )}

            {!selectedDispute && (
                <div className="mt-4 text-end">
                    <Button className="go-back-btn" variant="secondary" onClick={onBack}>
                        Go Back
                    </Button>
                </div>
            )}
        </Container>
        </Container>
    );
}

export default ReviewDisputes;
