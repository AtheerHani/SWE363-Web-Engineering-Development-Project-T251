import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import "./SendAnnouncement.css";

function SendAnnouncement({ onBack }) {
    const [recipient, setRecipient] = useState("providers");
    const [subject, setSubject] = useState("");
    const [body, setBody] = useState("");

    const handleSend = () => {
        console.log("Sending to:", recipient);
        console.log("Subject:", subject);
        console.log("Body:", body);
        alert("Announcement sent!");
        onBack(); // return to admin profile
    };

    const handleCancel = () => {
        onBack(); // go back to admin profile
    };

    return (
        <Container className="send-announcement-container" style={{ maxWidth: "700px", margin: "30px auto" }}>
            <h2 className="mb-4">Send Announcement</h2>
            <Form>
                {/* Recipient */}
                <Form.Group className="mb-3">
                    <Form.Label>Send To</Form.Label>
                    <Form.Select
                        value={recipient}
                        onChange={(e) => setRecipient(e.target.value)}
                    >
                        <option value="providers">Providers</option>
                        <option value="renters">Renters</option>
                        <option value="both">Both</option>
                    </Form.Select>
                </Form.Group>

                {/* Subject */}
                <Form.Group className="mb-3">
                    <Form.Label>Subject</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter subject"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                    />
                </Form.Group>

                {/* Body */}
                <Form.Group className="mb-4">
                    <Form.Label>Body</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={5}
                        placeholder="Write your message here..."
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                    />
                </Form.Group>

                {/* Buttons */}
                <div className="d-flex justify-content-end gap-2">
                    <Button variant="secondary" onClick={handleCancel}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={handleSend}>
                        Send
                    </Button>
                </div>
            </Form>
        </Container>
    );
}

export default SendAnnouncement;
