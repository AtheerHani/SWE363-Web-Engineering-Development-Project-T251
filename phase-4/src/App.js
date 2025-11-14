import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Signup from "./signup/Signup";
import Login from "./login/Login";
import Profile from "./profile/Profile";
import AdminProfile from "./pages/admin/AdminProfile";
import "./App.css";
import HostProfile from "./hostProfile/HostProfile";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/admin/profile" element={<AdminProfile />} />
            <Route path="/hostProfile" element={<HostProfile />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
