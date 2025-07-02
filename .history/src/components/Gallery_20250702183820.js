import React, { useState, useEffect } from 'react';
import './Gallery.css';

function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const galleryItems = [
    '/images/_interior_.png',
    '/images/interior1.png',
    '/images/interior2.png',
    '/images/interior3.png',
    '/images/interior4.png',
    '/images/Exterior.png',
    '/images/exterior1.png',
  ];

  const openLightbox = (index) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextImage = () => {
    setLightboxIndex((prev) => (prev + 1) % galleryItems.length);
  };

  const prevImage = () => {
    setLightboxIndex((prev) => (prev - 1 + galleryItems.length) % galleryItems.length);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex !== null) {
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowRight') nextImage();
        if (e.key === 'ArrowLeft') prevImage();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex]);

  return (
    <section id="gallery" className="gallery">
      <h2 className="section-title">Gallery</h2>
      <div className="gallery-grid">
        {galleryItems.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Gallery ${index}`}
            onClick={() => openLightbox(index)}
          />
        ))}
        <video
          src="/images/video.mp4"
          autoPlay
          loop
          muted
          controls
          className="gallery-item"
        />
      </div>

      {lightboxIndex !== null && (
        <div className="lightbox" onClick={closeLightbox}>
          <span className="lightbox-close" onClick={closeLightbox}>&times;</span>
          <img
            src={galleryItems[lightboxIndex]}
            alt="Enlarged View"
            onClick={(e) => e.stopPropagation()}
          />
          <button className="lightbox-prev" onClick={(e) => { e.stopPropagation(); prevImage(); }}>&#10094;</button>
          <button className="lightbox-next" onClick={(e) => { e.stopPropagation(); nextImage(); }}>&#10095;</button>
        </div>
      )}
    </section>
  );
}

export default Gallery;
