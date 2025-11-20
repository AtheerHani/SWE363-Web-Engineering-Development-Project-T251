import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import { SpaceCreationProvider } from "./context/SpaceCreationContext";
import { WishlistProvider } from "./context/WishlistContext";
import { ReservationsProvider } from "./context/ReservationsContext";

import Header from "./components/Header/Header";
import HeaderLoggedIn from "./components/HeaderLoggedIn/HeaderLoggedIn";
import Footer from "./components/Footer/Footer";

// Pages
import Signup from "./signup/Signup";
import Login from "./login/Login";
import Profile from "./profile/Profile";
import AdminProfile from "./pages/admin/AdminProfile";
import Notifications from "./pages/notifications/Notifications.jsx";
import Payment from "./pages/payment/Payment";
import ListingDetails from "./pages/listing-details/ListingDetails";
import Search from "./pages/search/search";
import Home from "./pages/home/Home";
import HostProfile from "./hostProfile/HostProfile";
import Step1 from "./pages/space-creation/step-1/Step1";
import Step2 from "./pages/space-creation/step-2/Step2";
import Step3 from "./pages/space-creation/step-3/Step3";
import Step4 from "./pages/space-creation/step-4/Step4";
import Step5 from "./pages/space-creation/step-5/Step5";
import Step6 from "./pages/space-creation/step-6/Step6";
import Step7 from "./pages/space-creation/step-7/Step7";
import Step8 from "./pages/space-creation/step-8/Step8";
import Wishlist from "./pages/Wishlist/Wishlist";
import Reservations from "./pages/reservations/Reservations";

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
            <Route path="/notifications" element={<Notifications />} />

          {/* Space Creation - steps 1..7 */}
          <Route
            path="/space-creation/step-1"
            element={
              <SpaceCreationProvider>
                <Step1 />
              </SpaceCreationProvider>
            }
          />
          <Route
            path="/space-creation/step-2"
            element={
              <SpaceCreationProvider>
                <Step2 />
              </SpaceCreationProvider>
            }
          />
          <Route
            path="/space-creation/step-3"
            element={
              <SpaceCreationProvider>
                <Step3 />
              </SpaceCreationProvider>
            }
          />
          <Route
            path="/space-creation/step-4"
            element={
              <SpaceCreationProvider>
                <Step4 />
              </SpaceCreationProvider>
            }
          />
          <Route
            path="/space-creation/step-5"
            element={
              <SpaceCreationProvider>
                <Step5 />
              </SpaceCreationProvider>
            }
          />
          <Route
            path="/space-creation/step-6"
            element={
              <SpaceCreationProvider>
                <Step6 />
              </SpaceCreationProvider>
            }
          />
          <Route
            path="/space-creation/step-7"
            element={
              <SpaceCreationProvider>
                <Step7 />
              </SpaceCreationProvider>
            }
          />
          <Route
            path="/space-creation/step-8"
            element={
              <SpaceCreationProvider>
                <Step8 />
              </SpaceCreationProvider>
            }
          />
          <Route path="/reservations" element={<Reservations />} />
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
      <WishlistProvider>
        <ReservationsProvider>
          <AppContent />
        </ReservationsProvider>
      </WishlistProvider>
    </Router>
  );
}

export default App;
