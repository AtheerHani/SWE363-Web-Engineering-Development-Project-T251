import React, { useState } from "react";
import "./ImageGallery.css";

const ImageGallery = ({ images }) => {
    const [selectedImage, setSelectedImage] = useState(0);
    const [showAllImages, setShowAllImages] = useState(false);

    const displayImages = images.slice(0, 4);
    const remainingCount = images.length - 4;

    const handleImageClick = (index) => {
        setSelectedImage(index);
    };

    const handleShowAll = () => {
        setShowAllImages(true);
    };

    return (
        <div className="image-gallery">
            {/* Main Image */}
            <div className="main-image-container">
                <img
                    src={images[selectedImage]}
                    alt="Property main view"
                    className="main-image"
                />
            </div>

            {/* Thumbnail Images */}
            <div className="thumbnail-grid">
                {displayImages.map((image, index) => (
                    <div
                        key={index}
                        className={`thumbnail-item ${selectedImage === index ? "active" : ""}`}
                        onClick={() => handleImageClick(index)}
                    >
                        <img src={image} alt={`Property view ${index + 1}`} />
                    </div>
                ))}

                {remainingCount > 0 && (
                    <div className="thumbnail-item more-photos" onClick={handleShowAll}>
                        <div className="more-photos-overlay">
                            <span className="more-photos-text">+{remainingCount}</span>
                            <span className="more-photos-label">More Photos</span>
                        </div>
                        <img src={images[4]} alt="More photos" />
                    </div>
                )}
            </div>
        </div>
    );
};

export default ImageGallery;