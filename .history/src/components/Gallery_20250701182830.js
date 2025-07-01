import React from 'react';
import './Gallery.css'; // Gallery styles are in App.css

function Gallery() {
  return (
    <section id="gallery" className="gallery">
      <h2 className="section-title">Gallery</h2>
      <div className="gallery-grid">
        <img src="/images/_interior_.png" alt="Interior" />
        <img src='/images/interior1.png' alt="Interior" />
        <img src="/images/interior2.png" alt="Interior" /> 
        <img src="/images/interior3.png" alt="Interior" />
        <img src="/images/interior4.png" alt="Interior" />
        <img src="/images/Exterior.png" alt="Exterior" />
        <img src="/images/exterior1.png" alt="Exterior" />
         {/* Video inside the gallery */}
        <video
          src="/images/video.mp4" 
          autoPlay 
          loop 
          muted
          controls 
          className="gallery-item"
        />
      </div>
    </section>
  );
}

export default Gallery;
