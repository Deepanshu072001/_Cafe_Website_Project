import React, { useState, useEffect, useCallback } from 'react';
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

  const videoItems = [
    '/videos/video.mp4'
  ];

  const openLightbox = (index) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextImage = useCallback(() => {
    setLightboxIndex((prev) => (prev + 1) % galleryItems.length);
  }, [galleryItems.length]);

  const prevImage = useCallback(() => {
    setLightboxIndex((prev) => (prev - 1 + galleryItems.length) % galleryItems.length);
  }, [galleryItems.length]);

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
  }, [lightboxIndex, nextImage, prevImage]);

  return (
    <section id="gallery" className="gallery">
      <h2 className="section-title">Image Gallery</h2>
      <div className="gallery-grid">
        {galleryItems.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Gallery ${index}`}
            onClick={() => openLightbox(index)}
          />
        ))}
      </div>

      {lightboxIndex !== null && (
        <div className="lightbox" onClick={closeLightbox}>
          <span className="lightbox-close" onClick={closeLightbox}>
            &times;
          </span>
          <img
            src={galleryItems[lightboxIndex]}
            alt="Enlarged View"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className="lightbox-prev"
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
          >
            &#10094;
          </button>
          <button
            className="lightbox-next"
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
          >
            &#10095;
          </button>
        </div>
      )}

      <h2 className="section-title video-title">Video Gallery</h2>
      <div className="video-grid">
        {videoItems.map((src, index) => (
          <video
          loading="lazy"
            key={index}
            src={src}
            autoPlay
            loop
            muted
            controls
            className="gallery-video"
          />
        ))}
      </div>
    </section>
  );
}

export default Gallery;
