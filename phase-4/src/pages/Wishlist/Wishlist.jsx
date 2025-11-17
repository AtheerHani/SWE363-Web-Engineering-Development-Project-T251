import React from "react";
import { useWishlist } from "../../context/WishlistContext";
import { X, MapPin, Clock, DollarSign, Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import "./Wishlist.css";

const Wishlist = () => {
  const { wishlist, removeFromWishlist } = useWishlist();
  const navigate = useNavigate();

  if (wishlist.length === 0) {
    return (
      <div className="wishlist-page">
        <div className="wishlist-container">
          <h1 className="wishlist-title">Wishlists</h1>

          <div className="empty-wishlist">
            <Heart size={64} className="empty-icon" />
            <h2 className="empty-title">Your wishlist is empty</h2>
            <p className="empty-text">
              Start adding properties you love to your wishlist!
            </p>
            <button onClick={() => navigate("/")} className="browse-btn">
              Browse Properties
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="wishlist-page">
      <div className="wishlist-container">
        <div className="wishlist-header">
          <h1 className="wishlist-title">Wishlists</h1>
          <span className="wishlist-count">
            {wishlist.length}{" "}
            {wishlist.length === 1 ? "property" : "properties"}
          </span>
        </div>

        <div className="wishlist-grid">
          {wishlist.map((property) => (
            <div key={property.id} className="wishlist-card">
              <div className="card-image-container">
                <img
                  src={property.image}
                  alt={property.title}
                  className="card-image"
                />
                <button
                  onClick={() => removeFromWishlist(property.id)}
                  className="remove-btn"
                  aria-label="Remove from wishlist"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="card-content">
                <h3 className="card-title">{property.title}</h3>

                <div className="card-location">
                  <MapPin size={16} />
                  <span>
                    {property.location || "100 Smart Street, LA, USA"}
                  </span>
                </div>

                <div className="card-footer">
                  <div className="card-pricing">
                    <div className="price-day">
                      <DollarSign size={16} />
                      <span>{property.pricePerDay}/day</span>
                    </div>
                    <div className="price-hour">
                      <Clock size={14} />
                      <span>${property.pricePerHour}/hour</span>
                    </div>
                  </div>

                  {property.rating && (
                    <div className="card-rating">
                      <span>★ {property.rating}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
