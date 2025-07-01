import React from 'react';
import './Gallery.css'; // Gallery styles are in App.css

function Gallery() {
  return (
    <section id="gallery" className="gallery">
      <h2 className="section-title">Gallery</h2>
      <div className="gallery-grid">
        <img src='/images/interior1.png' alt="Interior" />
        <img src="/images/_interior_.png" alt="Interior" />
        <img src="/images/exterior1.png" alt="Exterior" />
        <img src="/images/Exterior.png" alt="Exterior" />
        <img src="/images/interior2.png" alt="Interior" /> 
      </div>
    </section>
  );
}

export default Gallery;
