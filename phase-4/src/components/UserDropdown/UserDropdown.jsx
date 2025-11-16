import React from "react";
import { useNavigate } from "react-router-dom";
import "./UserDropdown.css";

const UserDropdown = ({ onClose }) => {
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate(path);
        onClose();
    };

    const handleLogout = () => {
        // Add your logout logic here
        localStorage.removeItem("token"); // Example
        navigate("/");
        onClose();
    };

    return (
        <div className="user-dropdown">
            <button className="dropdown-item" onClick={() => handleNavigation("/notifications")}>
                Notifications
            </button>
            <button className="dropdown-item" onClick={() => handleNavigation("/reservations")}>
                Reservations
            </button>
            <button className="dropdown-item" onClick={() => handleNavigation("/wishlists")}>
                Wishlists
            </button>

            <div className="dropdown-divider"></div>

            <button className="dropdown-item" onClick={() => handleNavigation("/account")}>
                Account
            </button>
            <button className="dropdown-item" onClick={() => handleNavigation("/help")}>
                Help Center
            </button>
            <button className="dropdown-item logout" onClick={handleLogout}>
                Logout
            </button>
        </div>
    );
};

export default UserDropdown;