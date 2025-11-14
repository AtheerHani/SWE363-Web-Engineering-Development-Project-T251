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

    const topRatedProperties = [
        {
            id: 5,
            title: "Small room",
            image: "/assets/images/rooms/placeholder-room.jpg",
            pricePerDay: 1,
            pricePerHour: 0.50,
            rating: 5,
        },
        {
            id: 6,
            title: "Small room",
            image: "/assets/images/rooms/placeholder-room.jpg",
            pricePerDay: 1,
            pricePerHour: 0.50,
            rating: 5,
        },
        {
            id: 7,
            title: "Small room",
            image: "/assets/images/rooms/placeholder-room.jpg",
            pricePerDay: 1,
            pricePerHour: 0.50,
            rating: 5,
        },
        {
            id: 8,
            title: "Small room",
            image: "/assets/images/rooms/placeholder-room.jpg",
            pricePerDay: 1,
            pricePerHour: 0.50,
            rating: 5,
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

            {/* Browse For More Spaces */}
            <CTASection
                title="Browse For More Spaces"
                subtitle="Discover amazing properties in your area"
                buttonText="Find a Space"
                buttonLink="/home"
                variant="dark"
            />
        </div>
    );
};

export default Home;