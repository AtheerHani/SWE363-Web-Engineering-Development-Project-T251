import React, { useState } from "react";
import { Container, Form, Table, Button } from "react-bootstrap";
import "./ManageUsers.css";

function UserManagement({ onBack }) {
    const [searchTerm, setSearchTerm] = useState("");

    // Sample user data — replace with real API data later
    const [users, setUsers] = useState([
        { id: 1, name: "Basel Alharbi", active: true },
        { id: 2, name: "Dena Hatem", active: true },
        { id: 3, name: "Hatem Alharbi", active: true },
        { id: 4, name: "Lura Salem", active: false },
    ]);

    const handleToggleStatus = (id) => {
        setUsers((prev) =>
            prev.map((user) =>
                user.id === id ? { ...user, active: !user.active } : user
            )
        );
    };

    const handleManageListings = (id) => {
        alert(`Managing listings for user ID: ${id}`);
        // You can replace this with navigation or modal logic
    };

    const filteredUsers = users
        .filter((user) =>
            user.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .sort((a, b) => a.name.localeCompare(b.name));

    return (
        <Container className="user-management-container mt-4" style={{ maxWidth: "800px" }}>
            <h2 className="mb-4">Admin User Management</h2>

            <Form.Control
                type="text"
                placeholder="Search for a user name"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="mb-4"
            />

            {filteredUsers.length === 0 ? (
                <p>No users found.</p>
            ) : (
                <Table bordered hover>
                    <thead>
                    <tr>
                        <th>User Name</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {filteredUsers.map((user) => (
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>
                                <Button
                                    variant={user.active ? "danger" : "success"}
                                    onClick={() => handleToggleStatus(user.id)}
                                >
                                    {user.active ? "Deactivate" : "Activate"}
                                </Button>
                            </td>
                            <td>
                                <Button variant="secondary" onClick={() => handleManageListings(user.id)}>
                                    Manage Listings
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
        </Container>
    );
}

export default UserManagement;
