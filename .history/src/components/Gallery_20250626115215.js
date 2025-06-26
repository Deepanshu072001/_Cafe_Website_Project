import React from 'react';

function Gallery() {
  return (
    <div className="gallery">
      <h1>Photos</h1>
      <h2> Coffee</h2>
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
