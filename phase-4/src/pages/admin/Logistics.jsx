import React, { useState } from "react";
import { Container, Table, Button, Form, Modal } from "react-bootstrap";
import "./Logistics.css";

function LogisticsManagement({ onBack }) {
    const [searchTerm, setSearchTerm] = useState("");
    const [companies, setCompanies] = useState([
        { id: 1, name: "FastTrack Logistics", active: true, contact: "fasttrack@email.com" },
        { id: 2, name: "Global Movers", active: false, contact: "global@email.com" },
        { id: 3, name: "Desert Express", active: true, contact: "desert@email.com" },
    ]);

    // Modal state
    const [showModal, setShowModal] = useState(false);
    const [editingCompany, setEditingCompany] = useState(null);
    const [formData, setFormData] = useState({ name: "", contact: "", active: true });

    const handleToggleStatus = (id) => {
        setCompanies((prev) =>
            prev.map((c) => (c.id === id ? { ...c, active: !c.active } : c))
        );
    };

    const handleRemove = (id) => {
        setCompanies((prev) => prev.filter((c) => c.id !== id));
    };

    const handleModify = (company) => {
        setEditingCompany(company);
        setFormData(company);
        setShowModal(true);
    };

    const handleAdd = () => {
        setEditingCompany(null);
        setFormData({ name: "", contact: "", active: true });
        setShowModal(true);
    };

    const handleSave = () => {
        if (editingCompany) {
            // Update existing
            setCompanies((prev) =>
                prev.map((c) => (c.id === editingCompany.id ? { ...formData, id: c.id } : c))
            );
        } else {
            // Add new
            const newCompany = { ...formData, id: Date.now() };
            setCompanies((prev) => [...prev, newCompany]);
        }
        setShowModal(false);
    };

    const filteredCompanies = companies.filter((c) =>
        c.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <Container className="logistics-container mt-4" style={{ maxWidth: "900px" }}>
            <h2 className="mb-4">Logistics Company Management</h2>

            <Form.Control
                type="text"
                placeholder="Search company..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="mb-4"
            />

            {filteredCompanies.length === 0 ? (
                <p>No companies found.</p>
            ) : (
                <Table bordered hover>
                    <thead>
                    <tr>
                        <th>Company Name</th>
                        <th>Contact</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {filteredCompanies.map((company) => (
                        <tr key={company.id}>
                            <td>{company.name}</td>
                            <td>{company.contact}</td>
                            <td>
                                    <span className={`status-badge ${company.active ? "active" : "inactive"}`}>
                                        {company.active ? "Active" : "Inactive"}
                                    </span>
                            </td>
                            <td>
                                <Button
                                    variant={company.active ? "danger" : "success"}
                                    size="sm"
                                    onClick={() => handleToggleStatus(company.id)}
                                >
                                    {company.active ? "Deactivate" : "Activate"}
                                </Button>{" "}
                                <Button
                                    variant="secondary"
                                    size="sm"
                                    onClick={() => handleModify(company)}
                                >
                                    Modify
                                </Button>{" "}
                                <Button
                                    variant="outline-danger"
                                    size="sm"
                                    onClick={() => handleRemove(company.id)}
                                >
                                    Remove
                                </Button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </Table>
            )}

            <div className="text-end mt-4">
                <Button variant="primary" className="me-2" onClick={handleAdd}>
                    + Add Company
                </Button>
                <Button variant="secondary" onClick={onBack}>
                    Go Back
                </Button>
            </div>

            {/* Modal for Add/Modify */}
            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>{editingCompany ? "Modify Company" : "Add Company"}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Company Name</Form.Label>
                            <Form.Control
                                type="text"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Contact</Form.Label>
                            <Form.Control
                                type="email"
                                value={formData.contact}
                                onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Check
                                type="checkbox"
                                label="Active"
                                checked={formData.active}
                                onChange={(e) => setFormData({ ...formData, active: e.target.checked })}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={handleSave}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
}

export default LogisticsManagement;

