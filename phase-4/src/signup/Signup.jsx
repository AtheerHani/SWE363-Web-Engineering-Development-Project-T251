import React, { useState } from "react";
import "./signup.css";

const Signup = () => {
  const [country, setCountry] = useState("SA (+966)");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // ✅ Basic validation
    if (!phone || !password) {
      setError("Please fill in all fields.");
      return;
    }

    if (!/^\d{8,12}$/.test(phone)) {
      setError("Please enter a valid phone number (8–12 digits).");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    setError("");
    alert("Signup successful! ✅");
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

        <div className="social-login">
          <button>Google</button>
          <button>Facebook</button>
        </div>

        <p className="signup-text">
          Don’t have an account? <a href="#">Signup</a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
