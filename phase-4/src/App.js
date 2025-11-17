import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import { SpaceCreationProvider } from "./context/SpaceCreationContext";
import { WishlistProvider } from "./context/WishlistContext"; // ✅ Added

import Header from "./components/Header/Header";
import HeaderLoggedIn from "./components/HeaderLoggedIn/HeaderLoggedIn";
import Footer from "./components/Footer/Footer";

// Pages
import Signup from "./signup/Signup";
import Login from "./login/Login";
import Profile from "./profile/Profile";
import AdminProfile from "./pages/admin/AdminProfile";
import Payment from "./pages/payment/Payment";
import ListingDetails from "./pages/listing-details/ListingDetails";
import Search from "./pages/search/search";
import Home from "./pages/home/Home";
import HostProfile from "./hostProfile/HostProfile";
import Step1 from "./pages/space-creation/step-1/Step1";
import Wishlist from "./pages/Wishlist/Wishlist";

import "./App.css";

function AppContent() {
  const location = useLocation();

  /* ------------ Which header to show ------------- */
  const showOldHeader =
    location.pathname === "/" ||
    location.pathname === "/login" ||
    location.pathname === "/signup";

  /* ------------ Hide footer on space-creation pages ------------- */
  const isSpaceCreation = location.pathname.startsWith("/space-creation");

  return (
    <div className="App">
      {/* Public header vs Logged-in header */}
      {showOldHeader ? <Header /> : <HeaderLoggedIn />}

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/search" element={<Search />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/hostProfile" element={<HostProfile />} />
          <Route path="/admin/profile" element={<AdminProfile />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/listing/:id" element={<ListingDetails />} />
          <Route path="/wishlist" element={<Wishlist />} />

          {/* Space Creation */}
          <Route
            path="/space-creation/step-1"
            element={
              <SpaceCreationProvider>
                <Step1 />
              </SpaceCreationProvider>
            }
          />
        </Routes>
      </main>

      {/* Footer hidden on space-creation pages */}
      {!isSpaceCreation && <Footer />}
    </div>
  );
}

function App() {
  return (
    <Router>
      {/* ❤️ Wrap entire site with WishlistProvider */}
      <WishlistProvider>
        <AppContent />
      </WishlistProvider>
    </Router>
  );
}

export default App;
