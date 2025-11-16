import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header/Header";
import HeaderLoggedIn from "./components/HeaderLoggedIn/HeaderLoggedIn";
import Footer from "./components/Footer/Footer";
import Signup from "./signup/Signup";
import Login from "./login/Login";
import Profile from "./profile/Profile";
import AdminProfile from "./pages/admin/AdminProfile";
import Payment from "./pages/payment/Payment";
import ListingDetails from "./pages/listing-details/ListingDetails";
import Home from "./pages/home/Home";
import HostProfile from "./hostProfile/HostProfile";
import "./App.css";

function AppContent() {
    const location = useLocation();

    // Show old Header ONLY on Login and Signup pages
    const showOldHeader = location.pathname === "/" || location.pathname === "/signup";

    return (
        <div className="App">
            {/* Show Header on Login/Signup, HeaderLoggedIn on all other pages */}
            {showOldHeader ? <Header /> : <HeaderLoggedIn />}

            <main className="main-content">
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/hostProfile" element={<HostProfile />} />
                    <Route path="/admin/profile" element={<AdminProfile />} />
                    <Route path="/payment" element={<Payment />} />
                    <Route path="/listing/:id" element={<ListingDetails />} />
                </Routes>
            </main>

            <Footer />
        </div>
    );
}

function App() {
    return (
        <Router>
            <AppContent />
        </Router>
    );
}

export default App;