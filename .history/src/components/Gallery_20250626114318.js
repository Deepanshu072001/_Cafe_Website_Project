import React from 'react';
import './Gallery.css'; // Assuming you have a Gallery.css for styling

function Gallery() {
  return (
    <div className="page gallery">
      <h1>Photos</h1>
      <div className="gallery-grid">
        <img src="/images/coffee.jpg" alt="Coffee" />
        <img src="/images/coffee2.png" alt="Espresso" />
        <img src="/images/coffee3.png" alt="Latte" />
        <img src="/images/coffee4.png" alt="Pastries" />
      </div>
    </div>
  );
}

export default Gallery;
