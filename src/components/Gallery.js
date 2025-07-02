import React, { useState, useEffect, useCallback, useRef } from 'react';
import './Gallery.css';

function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [videoModalSrc, setVideoModalSrc] = useState(null);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

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
    '/videos/video.mp4',
    '/videos/video1.mp4'
  ];

  const openLightbox = (index) => {
    setLightboxIndex(index);
    window.history.pushState({ modal: 'image' }, '');
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
    if (window.history.state?.modal) {
      window.history.back();
    }
  };

  const openVideoModal = (src) => {
    setVideoModalSrc(src);
    window.history.pushState({ modal: 'video' }, '');
  };

  const closeVideoModal = () => {
    setVideoModalSrc(null);
    if (window.history.state?.modal) {
      window.history.back();
    }
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
      if (videoModalSrc && e.key === 'Escape') {
        closeVideoModal();
      }
    };

    const handlePopState = () => {
      if (lightboxIndex !== null) closeLightbox();
      if (videoModalSrc) closeVideoModal();
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('popstate', handlePopState);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('popstate', handlePopState);
    };
  }, [lightboxIndex, videoModalSrc, nextImage, prevImage]);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const deltaX = touchStartX.current - touchEndX.current;
    if (Math.abs(deltaX) > 50) {
      if (deltaX > 0) {
        // swipe left
        if (lightboxIndex !== null) nextImage();
        if (videoModalSrc) closeVideoModal();
      } else {
        // swipe right
        if (lightboxIndex !== null) prevImage();
        if (videoModalSrc) closeVideoModal();
      }
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

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
        <div
          className="lightbox"
          onClick={closeLightbox}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
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
            key={index}
            src={src}
            className="gallery-video"
            onClick={() => openVideoModal(src)}
            muted
            playsInline
            loop
          />
        ))}
      </div>

      {videoModalSrc && (
        <div
          className="video-lightbox"
          onClick={closeVideoModal}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <span className="lightbox-close" onClick={closeVideoModal}>
            &times;
          </span>
          <video
            src={videoModalSrc}
            className="lightbox-video"
            controls
            autoPlay
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}

export default Gallery;
