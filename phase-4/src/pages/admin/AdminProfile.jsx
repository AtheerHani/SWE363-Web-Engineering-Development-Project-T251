import React, { useState } from "react";
import "./AdminProfile.css";
import SendAnnouncement from "./SendAnnouncement";
import ReviewDisputes from "./ReviewDisputes";
import ManageUsers from "./ManageUsers";
import Dashboard from "./Dashboard";
import Logistics from "./Logistics";
import ApproveListings from "./ApproveListings";

function AdminProfile() {
    const [activeSection, setActiveSection] = useState(null);

    const admin = {
        name: "Admin User",
        joined: "2023",
        photo: null, // no upload for admin
    };

    const actions = [
        { label: "Admin Dashboard" },
        { label: "Send Announcements" },
        { label: "User Management" },
        { label: "Review Disputes" },
        { label: "Logistics Companies Management" },
        { label: "Approve/Disprove Listings" },
    ];

    if (activeSection) {
        return (
            <div className="profile-page">
                <div className="profile-right">
                    {activeSection === "Review Disputes" && (
                        <ReviewDisputes onBack={() => setActiveSection(null)} />
                    )}
                    {activeSection === "Send Announcements" && (
                        <SendAnnouncement onBack={() => setActiveSection(null)} />
                    )}
                    {activeSection === "User Management" && (
                        <ManageUsers onBack={() => setActiveSection(null)} />
                    )}
                    {activeSection === "Admin Dashboard" && (
                        <Dashboard onBack={() => setActiveSection(null)} />
                    )}
                    {activeSection === "Logistics Companies Management" && (
                        <Logistics onBack={() => setActiveSection(null)} />
                    )}
                    {activeSection === "Approve/Disprove Listings" && (
                        <ApproveListings onBack={() => setActiveSection(null)} />
                    )}

                </div>
            </div>
        );
    }

    return (
        <div className="profile-page">
            {/* LEFT SIDE */}
            <div className="profile-left">
                <div className="profile-box">
                    <div className="profile-photo">
                        <div className="profile-avatar">
                            <span className="avatar-text">ADMIN</span>
                        </div>
                    </div>

                    <div className="profile-verification">
                        <h4 className="identity-title">{admin.name}</h4>
                        <p>Joined in {admin.joined}</p>
                        <ul>
                            <li>✔ Email Verified</li>
                            <li>✔ Mobile Verified</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="profile-right">
                <h2>Hello, {admin.name}</h2>
                <p>Choose an action:</p>

                <div
                    className="admin-actions"
                    style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 20 }}
                >
                    {actions.map((action, idx) => (
                        <div
                            key={idx}
                            className="action-card"
                            onClick={() => setActiveSection(action.label)}
                        >
                            {action.label}
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}

export default AdminProfile;
