import React, { useState } from 'react';
import './Gallery.css';

function Gallery() {
  const [lightboxImage, setLightboxImage] = useState(null);

  const openLightbox = (src) => {
    setLightboxImage(src);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  const galleryItems = [
    '/images/_interior_.png',
    '/images/interior1.png',
    '/images/interior2.png',
    '/images/interior3.png',
    '/images/interior4.png',
    '/images/Exterior.png',
    '/images/exterior1.png',
  ];

  return (
    <section id="gallery" className="gallery">
      <h2 className="section-title">Gallery</h2>
      <div className="gallery-grid">
        {galleryItems.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Gallery ${index}`}
            onClick={() => openLightbox(src)}
          />
        ))}
        {/* Video stays as is */}
        <video
          src="/images/video.mp4"
          autoPlay
          loop
          muted
          controls
          className="gallery-item"
        />
      </div>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div className="lightbox" onClick={closeLightbox}>
          <img src={lightboxImage} alt="Enlarged View" />
          <span className="lightbox-close" onClick={closeLightbox}>&times;</span>
        </div>
      )}
    </section>
  );
}

export default Gallery;
