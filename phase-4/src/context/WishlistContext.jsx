import React, { createContext, useState, useEffect, useContext } from "react";

const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState(() => {
    // Load wishlist from localStorage on initialization
    const savedWishlist = localStorage.getItem("hujra-wishlist");
    return savedWishlist ? JSON.parse(savedWishlist) : [];
  });

  // Save to localStorage whenever wishlist changes
  useEffect(() => {
    localStorage.setItem("hujra-wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  const addToWishlist = (property) => {
    setWishlist((prev) => {
      // Check if property already exists in wishlist
      const exists = prev.find((item) => item.id === property.id);
      if (!exists) {
        return [...prev, property];
      }
      return prev;
    });
  };

  const removeFromWishlist = (propertyId) => {
    setWishlist((prev) => prev.filter((item) => item.id !== propertyId));
  };

  const isInWishlist = (propertyId) => {
    return wishlist.some((item) => item.id === propertyId);
  };

  const toggleWishlist = (property) => {
    if (isInWishlist(property.id)) {
      removeFromWishlist(property.id);
    } else {
      addToWishlist(property);
    }
  };

  const clearWishlist = () => {
    setWishlist([]);
  };

  const value = {
    wishlist,
    addToWishlist,
    removeFromWishlist,
    isInWishlist,
    toggleWishlist,
    clearWishlist,
    wishlistCount: wishlist.length,
  };

  return (
    <WishlistContext.Provider value={value}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error("useWishlist must be used within a WishlistProvider");
  }
  return context;
};

export default WishlistContext;
