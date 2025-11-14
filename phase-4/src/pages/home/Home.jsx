import React from "react";
import SearchSection from "../../components/SearchSection/SearchSection";
import PropertyGrid from "../../components/PropertyGrid/PropertyGrid";
import CTASection from "../../components/CTASection/CTASection";
import "./Home.css";

const Home = () => {
    // Sample data - Replace with actual API data later
    const latestProperties = [
        {
            id: 1,
            title: "Small room",
            image: "/assets/images/rooms/placeholder-room.jpg",
            pricePerDay: 1,
            pricePerHour: 0.50,
        },
        {
            id: 2,
            title: "Small room",
            image: "/assets/images/rooms/placeholder-room.jpg",
            pricePerDay: 1,
            pricePerHour: 0.50,
        },
        {
            id: 3,
            title: "Small room",
            image: "/assets/images/rooms/placeholder-room.jpg",
            pricePerDay: 1,
            pricePerHour: 0.50,
        },
        {
            id: 4,
            title: "Basement",
            image: "/assets/images/rooms/placeholder-room.jpg",
            pricePerDay: 1,
            pricePerHour: 0.50,
        },
    ];

    const nearbyProperties = [
        {
            id: 5,
            title: "Small room",
            image: "/assets/images/rooms/placeholder-room.jpg",
            pricePerDay: 1,
            pricePerHour: 0.50,
        },
        {
            id: 6,
            title: "Small room",
            image: "/assets/images/rooms/placeholder-room.jpg",
            pricePerDay: 1,
            pricePerHour: 0.50,
        },
        {
            id: 7,
            title: "Small room",
            image: "/assets/images/rooms/placeholder-room.jpg",
            pricePerDay: 1,
            pricePerHour: 0.50,
        },
        {
            id: 8,
            title: "Small room",
            image: "/assets/images/rooms/placeholder-room.jpg",
            pricePerDay: 1,
            pricePerHour: 0.50,
        },
    ];

    const topRatedProperties = [
        {
            id: 9,
            title: "Small room",
            image: "/assets/images/rooms/placeholder-room.jpg",
            pricePerDay: 1,
            pricePerHour: 0.50,
            rating: 5,
        },
        {
            id: 10,
            title: "Small room",
            image: "/assets/images/rooms/placeholder-room.jpg",
            pricePerDay: 1,
            pricePerHour: 0.50,
            rating: 5,
        },
        {
            id: 11,
            title: "Small room",
            image: "/assets/images/rooms/placeholder-room.jpg",
            pricePerDay: 1,
            pricePerHour: 0.50,
            rating: 5,
        },
        {
            id: 12,
            title: "Small room",
            image: "/assets/images/rooms/placeholder-room.jpg",
            pricePerDay: 1,
            pricePerHour: 0.50,
            rating: 5,
        },
    ];

    const featuredProperties = [
        {
            id: 13,
            title: "Small Room",
            image: "/assets/images/rooms/placeholder-room.jpg",
            pricePerDay: 1,
            pricePerHour: 0.50,
            size: 50,
        },
        {
            id: 14,
            title: "Small Room",
            image: "/assets/images/rooms/placeholder-room.jpg",
            pricePerDay: 1,
            pricePerHour: 0.50,
            size: 50,
        },
        {
            id: 15,
            title: "Small Room",
            image: "/assets/images/rooms/placeholder-room.jpg",
            pricePerDay: 1,
            pricePerHour: 0.50,
            size: 50,
        },
        {
            id: 16,
            title: "Small Room",
            image: "/assets/images/rooms/placeholder-room.jpg",
            pricePerDay: 1,
            pricePerHour: 0.50,
            size: 50,
        },
        {
            id: 17,
            title: "Small Room",
            image: "/assets/images/rooms/placeholder-room.jpg",
            pricePerDay: 1,
            pricePerHour: 0.50,
            size: 50,
        },
        {
            id: 18,
            title: "Small Room",
            image: "/assets/images/rooms/placeholder-room.jpg",
            pricePerDay: 1,
            pricePerHour: 0.50,
            size: 50,
        },
    ];

    return (
        <div className="home-page">
            {/* Search Section */}
            <SearchSection />

            {/* Latest on the Spaces Listing */}
            <PropertyGrid
                title="Latest on the Spaces Listing"
                properties={latestProperties}
            />

            {/* Nearby Listed Properties */}
            <PropertyGrid
                title="Nearby Listed Properties"
                properties={nearbyProperties}
                showMapButton={true}
            />

            {/* Top Rated Properties */}
            <PropertyGrid
                title="Top Rated Properties"
                properties={topRatedProperties}
                showRating={true}
            />

            {/* Try Renting With Us */}
            <CTASection
                title="Try Renting With Us"
                subtitle="Start your journey with us to get the best deals"
                buttonText="Become a Renter"
                buttonLink="/signup"
            />

            {/* Featured Spaces on our Listing */}
            <PropertyGrid
                title="Featured Spaces on our Listing"
                properties={featuredProperties}
                featured={true}
            />

            {/* Browse For More Spaces */}
            <CTASection
                title="Browse For More Spaces"
                subtitle="Discover amazing properties in your area"
                buttonText="Find a Space"
                buttonLink="/spaces"
                variant="dark"
            />
        </div>
    );
};

export default Home;