import React from 'react';
import './Gallery.css'; // Gallery styles are in App.css

function Gallery() {
  return (
    <section id="gallery" className="gallery">
      <h2 className="section-title">Gallery</h2>
      <div className="gallery-grid">
        <img src="/images/coffee.jpg" alt="Coffee" />
        <img src="/images/coffee2.png" alt="Espresso" />
        <img src="/images/coffee3.png" alt="Latte" />
      </div>
    </section>
  );
}

export default Gallery;
