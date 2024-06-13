import React from "react";

export default function Feature( {iconSrc, iconSrcSet, title, description} ) {
    return (
        <div className="feature-item">
            <img src={iconSrc} srcSet={iconSrcSet} alt="Chat Icon" className="feature-icon" />
            <h3 className="feature-item-title">{title}</h3>
            <p>{description}</p>
          </div>
    )
}