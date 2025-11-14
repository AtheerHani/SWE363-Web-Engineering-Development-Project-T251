import React, { useState } from "react";
import "./SearchSection.css";

const SearchSection = () => {
    const [location, setLocation] = useState("");
    const [checkIn, setCheckIn] = useState("");
    const [checkOut, setCheckOut] = useState("");

    const handleSearch = () => {
        // Handle search logic here
        console.log("Searching:", { location, checkIn, checkOut });
    };

    return (
        <div className="search-section">
            <div className="search-container">
                <h1 className="search-title">FIND</h1>
                <p className="search-subtitle">Search by city</p>

                <div className="search-form">
                    <div className="search-field">
                        <label>Location</label>
                        <input
                            type="text"
                            placeholder="Where are you going?"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                        />
                    </div>

                    <div className="search-field">
                        <label>Check In</label>
                        <input
                            type="date"
                            placeholder="Add dates"
                            value={checkIn}
                            onChange={(e) => setCheckIn(e.target.value)}
                        />
                    </div>

                    <div className="search-field">
                        <label>Check Out</label>
                        <input
                            type="date"
                            placeholder="Add dates"
                            value={checkOut}
                            onChange={(e) => setCheckOut(e.target.value)}
                        />
                    </div>

                    <button className="search-button" onClick={handleSearch}>
                        <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SearchSection;