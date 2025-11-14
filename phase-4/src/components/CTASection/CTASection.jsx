import React from "react";
import { useNavigate } from "react-router-dom";
import "./CTASection.css";

const CTASection = ({ title, subtitle, buttonText, buttonLink, variant = "default" }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(buttonLink);
    };

    return (
        <div className={`cta-section ${variant}`}>
            <div className="cta-content">
                <h2 className="cta-title">{title}</h2>
                {subtitle && <p className="cta-subtitle">{subtitle}</p>}
                <button className="cta-button" onClick={handleClick}>
                    {buttonText}
                </button>
            </div>
        </div>
    );
};

export default CTASection;