// src/profile/Profile.jsx
import React, { useState } from "react";
import "./Profile.css";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [user, setUser] = useState({
    name: "John Doe",
    joined: "2021",
    about: "",
    location: "",
    work: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <div className="profile-page">
      {/* LEFT SIDE */}
      <div className="profile-left">
        <div className="profile-box">
          <div className="profile-photo">
            <div className="profile-avatar"></div>
            <p>Upload a Photo</p>
          </div>

          <div className="profile-verification">
            <h4>Identity Verification</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </p>
            <h4>{user.name}</h4>
            <ul>
              <li>✔ Email Confirmed</li>
              <li>✔ Mobile Confirmed</li>
            </ul>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="profile-right">
        {!isEditing ? (
          <>
            <h2>Hello, {user.name}</h2>
            <p>Joined in {user.joined}</p>

            <button className="edit-btn" onClick={() => setIsEditing(true)}>
              Edit Profile
            </button>

            <p style={{ marginTop: "20px" }}>⭐ 0 Reviews</p>
            <hr className="divider" />
            <p className="link">Reviewed By You</p>
          </>
        ) : (
          <div className="edit-section">
            <h2>Edit Profile</h2>

            <label>About</label>
            <textarea
              name="about"
              value={user.about}
              onChange={handleChange}
              placeholder="Tell us about yourself..."
            ></textarea>

            <label>Location</label>
            <input
              type="text"
              name="location"
              value={user.location}
              onChange={handleChange}
              placeholder="Enter your location"
            />

            <label>Work</label>
            <input
              type="text"
              name="work"
              value={user.work}
              onChange={handleChange}
              placeholder="Enter your work"
            />

            <p className="note">
              All the required user information can be added here...
            </p>

            <div className="buttons">
              <button
                className="cancel-btn"
                onClick={() => setIsEditing(false)}
              >
                ✖ Cancel
              </button>
              <button className="save-btn" onClick={() => setIsEditing(false)}>
                Save
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
