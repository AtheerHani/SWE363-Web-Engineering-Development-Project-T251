import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./login.css";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Check if coming from "Rent Your Space" button
  const isFromRentYourSpace = location.state?.fromRentYourSpace || false;

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!phone || !password) {
      setError("Please fill in all fields.");
      return;
    }

    // Clear errors (optional)
    setError("");

    // Successful login
    alert("Login successful ✅");

    // Redirect based on where they came from
    if (isFromRentYourSpace) {
      navigate("/space-creation/step-1");
    } else {
      navigate("/home");
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        {isFromRentYourSpace && (
          <div className="rent-space-notice">
            <p>Log in to proceed with renting your space</p>
          </div>
        )}

        <h2>Login or Signup</h2>
        <hr className="title-divider" />

        <form onSubmit={handleSubmit}>
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
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter Your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {error && <p className="error">{error}</p>}

          <button type="submit" className="continue-btn">
            Continue
          </button>
        </form>

        <div className="divider">Or Continue With</div>

        <p className="signup-text">
          Don’t have an account? <Link to="/signup">Signup</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
