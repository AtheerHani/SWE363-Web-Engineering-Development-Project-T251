import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import PropertyGrid from "../../components/PropertyGrid/PropertyGrid";
import "./search.css";

const Search = () => {
    // State management
    const navigate = useNavigate();
    const [location, setLocation] = useState("");
    const [checkIn, setCheckIn] = useState("");
    const [checkOut, setCheckOut] = useState("");
    const [selectedFeatures, setSelectedFeatures] = useState([]);
    const [priceRange, setPriceRange] = useState({ min: 0, max: 500 });
    const [sortBy, setSortBy] = useState("featured");
    const [searchTriggered, setSearchTriggered] = useState(false);

    // Feature options
    const featureOptions = [
        { id: "ac", label: "AC", icon: "/assets/icons/ac.png", isImage: true },
        { id: "smart-lock", label: "Smart Lock", icon: "/assets/icons/smart-lock.png", isImage: true },
        { id: "humidity-sensor", label: "Humidity Sensor", icon: "/assets/icons/humidity-sensor.png", isImage: true },
    ];

    // Toggle feature selection
    const toggleFeature = (featureId) => {
        setSelectedFeatures((prev) =>
            prev.includes(featureId)
                ? prev.filter((id) => id !== featureId)
                : [...prev, featureId]
        );
    };

    // Filter and sort properties
    const filteredAndSortedProperties = useMemo(() => {
        // Mock data - will be replaced with API data later
        const allProperties = [
            {
                id: 1,
                title: "Small Room",
                image: "/assets/images/rooms/placeholder-room.jpg",
                pricePerDay: 50,
                pricePerHour: 2.5,
                rating: 5,
            },
            {
                id: 2,
                title: "Garage Storage",
                image: "/assets/images/rooms/placeholder-room.jpg",
                pricePerDay: 30,
                pricePerHour: 1.5,
                rating: 4,
            },
            {
                id: 3,
                title: "Document Locker",
                image: "/assets/images/rooms/placeholder-room.jpg",
                pricePerDay: 20,
                pricePerHour: 1.0,
                rating: 5,
            },
            {
                id: 4,
                title: "Basement Room",
                image: "/assets/images/rooms/placeholder-room.jpg",
                pricePerDay: 40,
                pricePerHour: 2.0,
                rating: 4,
            },
            {
                id: 5,
                title: "Regular House Room",
                image: "/assets/images/rooms/placeholder-room.jpg",
                pricePerDay: 60,
                pricePerHour: 3.0,
                rating: 5,
            },
            {
                id: 6,
                title: "Premium Storage Unit",
                image: "/assets/images/rooms/placeholder-room.jpg",
                pricePerDay: 80,
                pricePerHour: 4.0,
                rating: 5,
            },
            {
                id: 7,
                title: "Small Office Space",
                image: "/assets/images/rooms/placeholder-room.jpg",
                pricePerDay: 100,
                pricePerHour: 5.0,
                rating: 5,
            },
            {
                id: 8,
                title: "Climate-Controlled Locker",
                image: "/assets/images/rooms/placeholder-room.jpg",
                pricePerDay: 45,
                pricePerHour: 2.25,
                rating: 4,
            },
        ];

        if (!searchTriggered) return [];

        let filtered = allProperties.filter((property) => {
            const priceInRange =
                property.pricePerDay >= priceRange.min && property.pricePerDay <= priceRange.max;
            const hasSelectedFeatures = selectedFeatures.length === 0; // Simplified for now
            return priceInRange && hasSelectedFeatures;
        });

        // Sort
        if (sortBy === "price-low") {
            filtered.sort((a, b) => a.pricePerDay - b.pricePerDay);
        } else if (sortBy === "price-high") {
            filtered.sort((a, b) => b.pricePerDay - a.pricePerDay);
        } else if (sortBy === "rating-high") {
            filtered.sort((a, b) => b.rating - a.rating);
        } else if (sortBy === "rating-low") {
            filtered.sort((a, b) => a.rating - b.rating);
        }

        return filtered;
    }, [selectedFeatures, priceRange, sortBy, searchTriggered]);

    // Handle search button click
    const handleSearch = () => {
        setSearchTriggered(true);
    };

    // Reset filters
    const handleReset = () => {
        setSelectedFeatures([]);
        setPriceRange({ min: 0, max: 500 });
        setSortBy("featured");
        setSearchTriggered(false);
    };

    return (
        <div className="search-page-container">
            {/* Search Bar - Same as Home Page */}
            <div className="search-section">
                <div className="search-container">
                    <h1 className="search-title">FIND</h1>

                    <div className="search-form">
                        <div className="search-field">
                            <label>Location</label>
                            <input
                                type="text"
                                placeholder="Search property"
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

            {/* Filters Section */}
            <div className="search-filters-section">
                <div className="filters-header">
                    <h2 className="filters-title">Filter Properties</h2>
                </div>

                {/* Features Filters */}
                <div className="filter-group features-filter">
                    <h3 className="filter-label">Features</h3>
                    <div className="features-grid">
                        {featureOptions.map((feature) => (
                            <button
                                key={feature.id}
                                className={`feature-btn ${
                                    selectedFeatures.includes(feature.id) ? "active" : ""
                                }`}
                                onClick={() => toggleFeature(feature.id)}
                                title={feature.label}
                            >
                                {feature.isImage ? (
                                    <img src={feature.icon} alt={feature.label} className="feature-icon-img" />
                                ) : (
                                    <span className="feature-icon">{feature.icon}</span>
                                )}
                                <span className="feature-label">{feature.label}</span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Price Range Filter */}
                <div className="filter-group price-filter">
                    <h3 className="filter-label">Price Range</h3>
                    <div className="price-inputs">
                        <div className="price-input-group">
                            <label htmlFor="min-price">Min: </label>
                            <input
                                id="min-price"
                                type="number"
                                min="0"
                                max={priceRange.max}
                                value={priceRange.min}
                                onChange={(e) =>
                                    setPriceRange({
                                        ...priceRange,
                                        min: Math.max(0, parseInt(e.target.value) || 0),
                                    })
                                }
                            />
                            <span className="currency">SAR</span>
                        </div>
                        <div className="price-input-group">
                            <label htmlFor="max-price">Max: </label>
                            <input
                                id="max-price"
                                type="number"
                                min={priceRange.min}
                                value={priceRange.max}
                                onChange={(e) =>
                                    setPriceRange({
                                        ...priceRange,
                                        max: Math.max(priceRange.min, parseInt(e.target.value) || 500),
                                    })
                                }
                            />
                            <span className="currency">SAR</span>
                        </div>
                    </div>
                </div>

                {/* Sort Dropdown */}
                <div className="filter-group sort-filter">
                    <h3 className="filter-label">Sort By</h3>
                    <select
                        className="sort-select"
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                    >
                        <option value="featured">Featured</option>
                        <option value="price-low">Price: Low to High</option>
                        <option value="price-high">Price: High to Low</option>
                        <option value="rating-high">Rating: High to Low</option>
                        <option value="rating-low">Rating: Low to High</option>
                    </select>
                </div>

                {/* Search & Reset Buttons */}
                <div className="filter-actions">
                    <button className="btn-search" onClick={handleSearch}>
                        <span>🔍</span> Search
                    </button>
                    <button className="btn-reset" onClick={handleReset}>
                        ✕ Reset
                    </button>
                </div>
            </div>

            {/* Results Section - Using PropertyGrid Component */}
            {searchTriggered && filteredAndSortedProperties.length > 0 && (
                <PropertyGrid
                    title={`Search Results (${filteredAndSortedProperties.length} Properties Found)`}
                    properties={filteredAndSortedProperties}
                    showRating={true}
                />
            )}

            {/* No Results Message */}
            {searchTriggered && filteredAndSortedProperties.length === 0 && (
                <div className="empty-state">
                    <div className="empty-icon">🏠</div>
                    <h3 className="empty-title">No Properties Found</h3>
                    <p className="empty-message">
                        Try adjusting your filters to find what you're looking for.
                    </p>
                    <button className="btn-reset-large" onClick={handleReset}>
                        Reset Filters
                    </button>
                </div>
            )}

            {/* Initial State - Before Search */}
            {!searchTriggered && (
                <div className="initial-state">
                    <div className="initial-icon">🔍</div>
                    <h3 className="initial-title">Start Your Search</h3>
                    <p className="initial-message">
                        Use the filters above to find the perfect property for you.
                    </p>
                </div>
            )}
        </div>
    );
};

export default Search;
