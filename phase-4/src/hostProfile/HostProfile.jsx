import React, { useState, useEffect } from "react";
import "./hostProfile.css";

const HostProfile = () => {
  const defaultUser = {
    name: "John Doe",
    joined: "2021",
    about: "",
    location: "",
    work: "",
    photo: null,
  };

  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem("userProfile");
    return saved ? JSON.parse(saved) : defaultUser;
  });

  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState(user);

  useEffect(() => {
    localStorage.setItem("userProfile", JSON.stringify(user));
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditData({ ...editData, [name]: value });
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      setEditData({ ...editData, photo: reader.result });
    };
    reader.readAsDataURL(file);
  };

  const handleRemovePhoto = () => {
    setEditData({ ...editData, photo: null });
  };

  const handleSave = () => {
    setUser(editData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditData(user);
    setIsEditing(false);
  };

  return (
    <div className="profile-page">
      {/* LEFT SIDE */}
      <div className="profile-left">
        <div className="profile-box">
          <div className="profile-photo">
            <div className="profile-avatar">
              {user.photo && (
                <img src={user.photo} alt="Profile" className="avatar-img" />
              )}
            </div>

            {/* Upload Photo (editing only) */}
            {isEditing && (
              <>
                <label className="upload-btn">
                  Upload Photo
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handlePhotoUpload}
                    style={{ display: "none" }}
                  />
                </label>

                {editData.photo && (
                  <button
                    className="remove-photo-btn"
                    onClick={handleRemovePhoto}
                    style={{
                      marginTop: "10px",
                      padding: "6px 12px",
                      background: "#d9534f",
                      color: "white",
                      border: "none",
                      borderRadius: "6px",
                      cursor: "pointer",
                      fontSize: "0.85rem",
                    }}
                  >
                    Remove Photo
                  </button>
                )}
              </>
            )}
          </div>

          <div className="profile-verification">
            <h4 className="identity-title">Identity Verification</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

            <h4>{user.name} - Host</h4>

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

            {user.about && (
              <p>
                <strong>About:</strong> {user.about}
              </p>
            )}

            {user.location && (
              <p>
                <strong>Location:</strong> {user.location}
              </p>
            )}

            {user.work && (
              <p>
                <strong>Work:</strong> {user.work}
              </p>
            )}

            <button
              className="edit-btn"
              onClick={() => {
                setEditData(user);
                setIsEditing(true);
              }}
            >
              Edit Profile
            </button>

            <p style={{ marginTop: "20px" }}>⭐ 0 Reviews</p>
            <hr className="divider" />
            <p className="link">Reviewed By You</p>
          </>
        ) : (
          <div className="edit-section">
            <h2>Edit Profile</h2>

            <label>Name</label>
            <input
              type="text"
              name="name"
              value={editData.name}
              onChange={handleChange}
            />

            <label>About</label>
            <textarea
              name="about"
              value={editData.about}
              onChange={handleChange}
            ></textarea>

            <label>Location</label>
            <input
              type="text"
              name="location"
              value={editData.location}
              onChange={handleChange}
            />

            <label>Work</label>
            <input
              type="text"
              name="work"
              value={editData.work}
              onChange={handleChange}
            />

            <label>Upload Profile Photo</label>
            <input type="file" accept="image/*" onChange={handlePhotoUpload} />

            {editData.photo && (
              <button
                className="remove-photo-btn"
                onClick={handleRemovePhoto}
                style={{
                  marginTop: "10px",
                  padding: "6px 12px",
                  background: "#d9534f",
                  color: "white",
                  border: "none",
                  borderRadius: "6px",
                  cursor: "pointer",
                  fontSize: "0.85rem",
                }}
              >
                Remove Photo
              </button>
            )}

            <p className="note">
              Your data will remain saved even after refreshing.
            </p>

            <div className="buttons">
              <button className="cancel-btn" onClick={handleCancel}>
                ✖ Cancel
              </button>
              <button className="save-btn" onClick={handleSave}>
                Save
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HostProfile;
