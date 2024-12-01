import React from "react";
import "./zoom.css"; // Import the CSS file for custom styles

const ZoomImage = ({ percent }) => {
  // Destructure the 'percent' prop correctly
  const r = Math.round(Math.random() * 100) / 10;
  return (
    <div className="zoom-container">
      <img
        src="https://png.pngtree.com/png-clipart/20231004/original/pngtree-granola-bar-foodstuff-picture-image_13086685.png"
        alt="Zooming Image"
        className="zoom-image"
        style={{
          top: `${percent}%`,
          animationDelay: `${r}s`,
        }}
      />
    </div>
  );
};

export default ZoomImage;
