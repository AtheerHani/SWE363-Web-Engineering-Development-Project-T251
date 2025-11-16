import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./signup.css";

const Signup = () => {
  const navigate = useNavigate();

  const [country, setCountry] = useState("SA (+966)");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!phone || !password || !confirmPassword) {
      setError("Please fill in all fields.");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    // Everything is valid → clear errors
    setError("");

    // Redirect to homepage
    navigate("/home"); // 👈 Change the route here if needed
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <h2>Login or Signup</h2>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Country</label>
            <select
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            >
              <option>SA (+966)</option>
              <option>US (+1)</option>
              <option>UK (+44)</option>
              <option>IN (+91)</option>
            </select>
          </div>

          <div className="form-group">
            <label>Phone Number</label>
            <input
              type="text"
              placeholder="Enter Your Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Create Your Password</label>
            <input
              type="password"
              placeholder="Create Your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Confirm Your Password</label>
            <input
              type="password"
              placeholder="Confirm Your Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          {error && <p className="error">{error}</p>}

          <button type="submit" className="continue-btn">
            Continue
          </button>
        </form>

        <div className="divider">Or Continue With</div>

        <p className="signup-text">
          Already have an account? <Link to="/">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
